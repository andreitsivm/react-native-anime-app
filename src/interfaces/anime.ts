export interface Anime {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
}

export interface Links {
  self: string;
}
export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  startDate: string;
  endDate: string;
  episodeCount: number;
}
export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}
export interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}
