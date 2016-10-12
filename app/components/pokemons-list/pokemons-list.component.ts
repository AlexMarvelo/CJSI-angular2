import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon.model';
import { ResponseData } from '../../models/responseData.model';

import { CardComponent } from '../card/card.component';

@Component({
    selector: 'pokemons-list',
    providers: [
      PokemonsService
    ],
    template: `
      <div class="section no-pad-bot">
        <div class="container">
          <br>
          <h1 class="header center orange-text">{{pageTitle}}</h1>
          <br>
          <div class="row">
            <card *ngFor="let pokemon of pokemons" [pokemon]="pokemon"></card>
          </div>
        </div>
      </div>`
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[];
  pageTitle: 'Welcome to Pokedex';

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons()
      .then((data: ResponseData) => {
        if (data.objects) this.pokemons = data.objects;
        console.log(this.pokemons);
      });
  }
}
