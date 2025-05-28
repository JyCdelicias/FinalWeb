import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private api = 'https://pokeapi.co/api/v2' 

  constructor(private http: HttpClient) { }
  getPokemones(): Observable<any[]> {
    const endpoint = `${this.api}/pokemon`
    return this.http.get <any[]> (endpoint);
  }
}
