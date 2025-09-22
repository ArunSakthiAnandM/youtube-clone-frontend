import { Routes } from '@angular/router';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { HomeComponent } from './components/home/home.component';
import { SaveVideoDetailsComponent } from './components/save-video-details/save-video-details.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { HistoryComponent } from './components/history/history.component';
import { LikedVideosComponent } from './components/liked-videos/liked-videos.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

export const routes: Routes = [
  {
    path: '',
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
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'liked-videos',
    component: LikedVideosComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
  },
];
