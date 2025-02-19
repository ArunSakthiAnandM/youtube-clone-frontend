import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-video-details',
  imports: [VideoPlayerComponent],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss',
})
export class VideoDetailsComponent implements OnInit, OnChanges {
  videoID: string = '';
  videoUrl: string = '';
  isVideoAvailable: boolean = false;

  constructor(
    private saveVideoDetailsService: VideoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.videoID = this.activatedRoute.snapshot.params['videoId'];
    this.saveVideoDetailsService.getVideo(this.videoID).subscribe((data) => {
      this.videoUrl = data.url;
      this.isVideoAvailable = true;
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
