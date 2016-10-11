import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ResponseData } from '../models/responseData.model';

import { MockPokemons } from '../mock-pokemons';
import config from '../config';

@Injectable()
export class PokemonsService {
  next: string;

  getPokemons() {
    return new Promise<ResponseData>((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        `${config.url}api/v1/pokemon/?limit=${config.limit}`,
        true
      );
      xhr.onload = function() {
        if (this.status == 200) {
          let parser = new Promise(resolve2 => resolve2(this.response))
            .then((stringData: string) => JSON.parse(stringData))
            .then(data => resolve(data))
        } else {
          reject(new Error(this.statusText));
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send();
    });
  }
}
