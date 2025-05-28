import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) {}

  getAllPokemon() {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonDetails(url: string) {
    return this.http.get<any>(url);
  }
}
