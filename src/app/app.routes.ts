import { Routes } from '@angular/router';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { HomeComponent } from './components/home/home.component';
import { SaveVideoDetailsComponent } from './components/save-video-details/save-video-details.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'upload-video',
    component: UploadVideoComponent,
  },
  {
    path: 'save-video-details/:videoId',
    component: SaveVideoDetailsComponent,
  },
  {
    path: 'video-details/:videoId',
    component: VideoDetailsComponent,
  },
];
