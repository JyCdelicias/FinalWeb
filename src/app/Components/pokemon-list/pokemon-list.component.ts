import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  ListaPokemon: any[] = [];

  constructor(private pokemonservice: PokemonService) {}

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonservice.getPokemones().subscribe({
      next: (response: any) => {
        this.ListaPokemon = response.results; 
      },
      error: (err) => {
        console.error('Error al obtener los pokemones', err);
      }
    });
  }
}
