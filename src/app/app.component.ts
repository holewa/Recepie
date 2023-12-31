import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PhotoResponse} from './photo-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recepie';
  pictures: PhotoResponse;
  laddar = true;
  knappKlickad: boolean;
  searchWord: string;
  apiAccesKey = '&client_id=s6j_dQynLXMKyfwT4jbrDTcHoUxVuKvQRFRsUQHlWqQ'
  currentPage = 1;
  pageSize = 4; // Number of pictures to display per page
  lankAktiv: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

  async fetchListOfPictures() {
    this.laddar = true;
    try {
      this.knappKlickad = true;
      this.http.get('https://api.unsplash.com/search/photos/?query=' + this.searchWord + this.apiAccesKey)
        .subscribe((response: any) => {
          this.pictures = response
          this.laddar = false;
        });
    } catch (error) {
      console.log(error);
    }
  }

  get paginatedPictures(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.pictures.results.slice(startIndex, endIndex);
  }

  get totalPages(): number[] {
    const totalPictures = this.pictures.results.length;
    const pageCount = Math.ceil(totalPictures / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }

  clicked(aktivLank: string) {
    this.lankAktiv = aktivLank;
  }
}
