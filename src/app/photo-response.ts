import {Photo} from './photo';

export class PhotoResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
