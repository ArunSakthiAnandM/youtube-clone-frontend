import { Signal } from '@angular/core';

export interface VideoDTO {
  id: string;
  title: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  videoStatus: string;
}
