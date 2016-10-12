import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent } from '../header/header.component';
import { PokemonsListComponent } from '../pokemons-list/pokemons-list.component';
import { PokemonDetailedComponent } from '../pokemon-detailed/pokemon-detailed.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/pokemons',
        pathMatch: 'full'
      },
      {
        path: 'pokemons',
        component: PokemonsListComponent
      },
      {
        path: 'pokemons/:id',
        component: PokemonDetailedComponent
      },
      {
        path: '**',
        redirectTo: '/pokemons',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonsListComponent,
    PokemonDetailedComponent,
    CardComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
