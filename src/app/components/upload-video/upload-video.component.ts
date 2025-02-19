import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-upload-video',
  imports: [MatButtonModule],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss',
})
export class UploadVideoComponent implements OnInit {
  shortLink: String = '';
  loading: Boolean = false;
  file: File | null = null;
  isFileUploaded: Boolean = false;

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    this.isFileUploaded = true;
  }

  async uploadVideo() {
    this.loading = true;
    if (this.file !== null) {
      this.videoService.uploadVideo(this.file).subscribe((data) => {
        console.log('Video Sucessfully Uploaded');
        data.videoId;
        this.router.navigateByUrl('/save-video-details/' + data.videoId);
      });
    }
    this.loading = false;
  }
}
