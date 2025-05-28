import { Routes } from '@angular/router';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';

export const routes: Routes = [
  {
    path: 'pokemones',
    component: PokemonListComponent
  },
  {
    path: '',
    redirectTo: 'pokemones',
    pathMatch: 'full'
  }
];
