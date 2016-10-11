import { NgModule } from '@angular/core';

import { PokemonsListComponent } from './pokemons-list.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    PokemonsListComponent,
    CardComponent
  ],
  bootstrap: [
    PokemonsListComponent
  ]
})
export class PokemonsListModule { }
