import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveVideoDetailsService {
  uploadThumbnailApiUrl: string = 'http://localhost:8080/api/videos/thumbnail';

  constructor(private httpClient: HttpClient) {}

  uploadThumbnail(file: File, id: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('id', id);
    return this.httpClient.post(this.uploadThumbnailApiUrl, formData, {
      responseType: 'text',
    });
  }
}
