import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { resp, Classdnd } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const apiSpells = environment.apiSpells;

@Injectable({
  providedIn: 'root'
})



export class SpellsService {

  ApiURLSpells = apiSpells;

  ApiURL = apiUrl;

  constructor( private http: HttpClient) {}

  getClasses(): Observable<resp>{
    return this.http.get<resp>(this.ApiURL)
    }

  getAllSpells(): Observable<resp>{
    return this.http.get<resp>(this.ApiURLSpells)
    }

}
