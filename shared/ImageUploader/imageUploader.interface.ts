export interface IImageUploaderProps {
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export interface IUploaderResponse {
  urls: {
    original: string;
    webP: string;
  };
}
