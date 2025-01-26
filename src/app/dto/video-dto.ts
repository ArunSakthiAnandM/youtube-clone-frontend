export interface VideoDTO {
  id: string;
  title: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  tags: Array<string>;
  videoStatus: string;
}
