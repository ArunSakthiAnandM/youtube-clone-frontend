import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { VideoDTO } from '../../dto/video-dto';
// import { SingleMediaPlayer } from './single-media-player';

@Component({
  selector: 'app-save-video-details',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIcon,
    MatButtonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VideoPlayerComponent,
  ],
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.scss',
})
export class SaveVideoDetailsComponent implements OnInit {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly tags = signal<string[]>([]);
  _tags: Array<string> = [];
  readonly announcer = inject(LiveAnnouncer);

  saveVideoDetails: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('');

  shortLink: String = '';
  loading: Boolean = false;
  thumbnailFile: File | null = null;
  isFileUploaded: Boolean = false;

  videoID: string = '';
  videoUrl: string = '';
  thumbnailUrl: string = '';

  constructor(
    private saveVideoDetailsService: VideoService,
    private activatedRoute: ActivatedRoute,
    private _snackbar: MatSnackBar
  ) {
    this.videoID = this.activatedRoute.snapshot.params['videoId'];
    this.saveVideoDetailsService.getVideo(this.videoID).subscribe((data) => {
      this.videoUrl = data.url;
      this.thumbnailUrl = data.thumbnailUrl;
    });
    this.saveVideoDetails = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus,
    });
  }

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.update((tags) => {
        this._tags = [...tags, value];
        return this._tags;
      });
    }
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    this.tags.update((tags) => {
      const index = tags.indexOf(tag);
      if (index < 0) {
        return tags;
      }
      tags.splice(index, 1);
      this.announcer.announce(`Removed $tags.name}`);
      this._tags = [...tags];
      return this._tags;
    });
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(tag);
      return;
    }
    this.tags.update((tags) => {
      const index = tags.indexOf(tag);
      if (index >= 0) {
        tags[index] = value;
        return [...tags];
      }
      this._tags = tags;
      return this._tags;
    });
  }

  onChange(event: any) {
    this.thumbnailFile = event.target.files[0];
    console.log(this.thumbnailFile);
    this.isFileUploaded = true;
  }

  uploadThumbnail() {
    this.loading = true;
    if (this.thumbnailFile !== null) {
      console.log(this.videoID);
      this.saveVideoDetailsService
        .uploadThumbnail(this.thumbnailFile, this.videoID)
        .subscribe((data) => {
          console.log(data);
          this.thumbnailUrl = data;
          this._snackbar.open('Upload Successful', 'Ok');
        });
    }
    this.loading = false;
  }

  saveVideo() {
    const videoMetadata: VideoDTO = {
      id: this.videoID,
      title: this.saveVideoDetails.get('title')?.value,
      description: this.saveVideoDetails.get('description')?.value,
      thumbnailUrl: this.thumbnailUrl,
      tags: this._tags,
      videoStatus: this.saveVideoDetails.get('videoStatus')?.value,
      url: this.videoUrl,
    };
    this.saveVideoDetailsService.saveVideo(videoMetadata).subscribe((data) => {
      this._snackbar.open('Video Metadata updated successfully', 'ok');
    });
  }
}
