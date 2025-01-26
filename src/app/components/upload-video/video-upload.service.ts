import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from './UploadVideoResponse';

@Injectable({
  providedIn: 'root',
})
export class VideoUploadService {
  //TODO
  uploadVideoApiUrl: string = 'http://localhost:8080/api/videos';

  constructor(private httpClient: HttpClient) {}

  uploadVideo(file: File): Observable<UploadVideoResponse> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<UploadVideoResponse>(
      this.uploadVideoApiUrl,
      formData
    );
  }
}
