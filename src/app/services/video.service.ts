import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoDTO } from '../dto/video-dto';
import { UploadVideoResponse } from '../dto/UploadVideoResponse';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  uploadThumbnailApiUrl: string = 'http://localhost:8080/api/videos/thumbnail';
  getVideoApiUrl: string = 'http://localhost:8080/api/videos/';
  saveVideoApiUrl: string = 'http://localhost:8080/api/videos/save';

  constructor(private httpClient: HttpClient) {}

  uploadThumbnail(file: File, id: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('id', id);
    return this.httpClient.post(this.uploadThumbnailApiUrl, formData, {
      responseType: 'text',
    });
  }

  getVideo(videoId: string): Observable<VideoDTO> {
    return this.httpClient.get<VideoDTO>(this.getVideoApiUrl + videoId);
  }

  saveVideo(videoMetadata: VideoDTO): Observable<VideoDTO> {
    return this.httpClient.post<VideoDTO>(this.saveVideoApiUrl, videoMetadata);
  }

  uploadVideo(file: File): Observable<UploadVideoResponse> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<UploadVideoResponse>(
      this.getVideoApiUrl,
      formData
    );
  }
}
