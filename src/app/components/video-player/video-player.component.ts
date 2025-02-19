import { Component, Input } from '@angular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@Component({
  selector: 'app-video-player',
  imports: [
    VgOverlayPlayModule,
    VgCoreModule,
    VgBufferingModule,
    VgControlsModule,
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  preload: string = 'auto';

  @Input()
  videoUrl!: string | '';
}
