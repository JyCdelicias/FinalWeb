import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component.ts;  

const routes: Routes = [
  { path: 'pokemones', component: PokemonListComponent },
  { path: '', redirectTo: '/pokemones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
