import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons.service';

@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <div class="section no-pad-bot">
      <div class="container">
        <br>
        <h1 class="header center orange-text">Welcome to Pokedex</h1>
        <br>
        <div class="row">
          <card *ngFor="let pokemon of pokemons" [pokemon]="pokemon"></card>
        </div>
      </div>
    </div>
    <app-footer></app-footer>`,
    providers: [
      PokemonsService
    ]
})
export class AppComponent implements OnInit {
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().then(pokemons => this.pokemons = pokemons);
  }
}
