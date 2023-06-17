import { Component } from '@angular/core';
import {PhotoResponse} from '../photo-response';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../photo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lagg-till-recepet',
  templateUrl: './lagg-till-recepet.component.html',
  styleUrls: ['./lagg-till-recepet.component.css']
})
export class LaggTillRecepetComponent {
  title = 'recepie';
  pictures: PhotoResponse;
  laddar = true;
  knappKlickad: boolean;
  searchWord: string;
  apiAccesKey = '&client_id=s6j_dQynLXMKyfwT4jbrDTcHoUxVuKvQRFRsUQHlWqQ'
  currentPage = 1;
  pageSize = 4; // Number of pictures to display per page
  bilderHittade: boolean;
  selectedPicture: Photo;
  klickatPaBild: boolean;
  ingridiens: string;
  ingridiensLista: string[] = [];
  placeholder: string = 'lägg till en ingridiens';

  constructor(private http: HttpClient, private route: Router) {
  }

  ngOnInit() {
  }

  async fetchListOfPictures() {
    this.laddar = true;
    try {
      this.knappKlickad = true;
      this.http.get('https://api.unsplash.com/search/photos/?query=' + this.searchWord + this.apiAccesKey)
        .subscribe((response: any) => {
          this.pictures = response
          this.bilderHittade = this.pictures.results.length > 0;
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

  selectPicture(selectedPicture: Photo) {
    this.selectedPicture = selectedPicture;
    this.klickatPaBild = true;
    // this.route.navigate(['/laggtillingridienser'])
    //pagineringen?
  }

  laggTillIngridiens(ingridiens: string): void {
    this.ingridiens = '';
    if (ingridiens !== '') {
      this.ingridiensLista.push(ingridiens);
    }
  }

  markeraIngridienslistaSomKlar(): void {
    this.placeholder = 'Lägg till stegen'

  }

  rensa():void {
    this.ingridiensLista = [];
  }
}
