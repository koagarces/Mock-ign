export interface IGNVideo {
  contentId: string;
  contentType: "video";
  thumbnails: IGNVideoThumbnail[];
  metadata: IGNVideoMetadata;
  tags: string[];
  assets: IGNVideoAsset[];
}

export interface IGNVideoThumbnail {
  url: string;
  size: "compact" | "medium" | "large";
  width: number;
  height: number;
}

export interface IGNVideoMetadata {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  networks: string[];
  state: string;
  duration: number;
  videoSeries: string;
}

export interface IGNVideoAsset {
  url: string;
  height: number;
  width: number;
}

export interface IGNVideoApiResponse {
  count: number;
  startIndex: number;
  data: IGNVideo[];
}
