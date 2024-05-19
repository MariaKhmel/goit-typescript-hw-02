export type OpenModal = (img: string) => void;
export interface VoidFunction {
  (): void;
}
export type HandleSearchBarSubmitFunction = (value: string) => void;

export type Urls = {
  regular: string;
  small: string;
};

export type ImagesType = {
  id: string;
  urls: Urls;

  description: string;
}[];
