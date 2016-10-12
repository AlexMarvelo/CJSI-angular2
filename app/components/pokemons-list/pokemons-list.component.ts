import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon.model';

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
          <div class="center">
            <a
              class="waves-effect waves-light btn {{status=='PENDING' ? 'disabled' : ''}}"
              (click)="addNewPokemons()">
              Load more
            </a>
          </div>
        </div>
      </div>`
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pageTitle = 'Welcome to Pokedex';
  status = 'OK';

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.addNewPokemons();
  }

  addNewPokemons(): void {
    if (this.status == 'PENDING') return;
    this.status = 'PENDING';
    this.pokemonsService.getPokemons()
      .then((newPokemons: Pokemon[]) => {
        this.pokemons = this.pokemons.concat(newPokemons);
        console.log(newPokemons);
        this.status = 'OK';
      });
  }
}
