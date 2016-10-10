import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

import { MockPokemons } from '../mock-pokemons';

@Injectable()
export class PokemonsService {
  getPokemons(): Pokemon[] {
    return MockPokemons;
  }
}
