import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
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
        console.log('Respuesta API:', response);  
        this.ListaPokemon = response.results;    
      },
      error: (err) => {
        console.error('Error al obtener los pokemones', err);
      }
    });
  }
}
