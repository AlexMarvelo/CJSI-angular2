import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
    selector: 'pokemon-detailed',
    providers: [
      PokemonsService
    ],
    template: `
    <div class="container">
      <div *ngIf="pokemon" class="card large">
        <div class="card-image waves-effect waves-block waves-light">
          <img src="{{pokemon.imgSrc}}">
        </div>
        <div class="card-content">
          <span class="card-title grey-text text-darken-4">{{pokemon.name}}</span>
          <table>
            <thead>
              <tr>
                  <th data-field="prop">Property</th>
                  <th data-field="val">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let prop of propsToShow">
                <td>{{prop}}</td>
                <td>{{pokemon[prop.toLowerCase()]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-reveal"></div>
      </div>
    </div>`
})
export class PokemonDetailedComponent implements OnInit {
  pokemon: Pokemon;
  id: number;
  propsToShow = ['Attack', 'Defense', 'Happiness', 'Speed', 'Height', 'Weight'];

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
    this.pokemonsService.getPokemon(this.id)
      .then((newPokemon: Pokemon) => {
        this.pokemon = newPokemon;
        console.log('Current pokemon:')
        console.dir(newPokemon);
      });
  }
}
