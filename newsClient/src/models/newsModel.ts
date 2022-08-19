export interface NewsModel {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export interface NewsListModel {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: Array<NewsModel>;
}
