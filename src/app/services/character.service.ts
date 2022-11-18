import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  

  constructor(private http: HttpClient) {


   }

   public getCharater(page:any): Observable<any>{
    let API_CHARACTER = 'https://rickandmortyapi.com/api/character?page='
    return this.http.get(`${API_CHARACTER}${page}`);
   }
   public getEpisode(url:any): Observable<any>{
    return this.http.get(url);
   }
   public getOneCharater(url:any): Observable<any>{
    return this.http.get(url);
   }
   public getLocation(url:any): Observable<any>{
    return this.http.get(url);
   }
}
