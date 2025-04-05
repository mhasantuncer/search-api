export interface SearchInformation {
  totalResults: string;
  searchTime: number;
}

export interface GoogleSearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    cse_image?: Array<{ src: string }>;
  };
}

export interface GoogleSearchResponse {
  items?: GoogleSearchResult[];
  searchInformation?: SearchInformation;
}
