import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

import { MockPokemons } from '../mock-pokemons';

@Injectable()
export class PokemonsService {
  getPokemons(): Promise<Pokemon[]> {
    return new Promise<Pokemon[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(MockPokemons)
      }, 1000);
    });
  }
}
