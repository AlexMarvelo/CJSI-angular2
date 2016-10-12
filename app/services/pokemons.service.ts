import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

import config from '../config';

@Injectable()
export class PokemonsService {
  next = `${config.url}api/v1/pokemon/?limit=${config.limit}`;

  getPokemons() {
    return this.getServerResponse(this.next)
      .then(data => {
        if (data.objects) {
          data.objects.map((pokemon: Pokemon) => {
            pokemon.imgSrc = `${config.imgSource}${pokemon.pkdx_id}.png`;
            return pokemon;
          })
        }
        return data;
      })
      .then(data => {
        if (data.meta && data.meta.next) {
          this.next = `${config.url}${data.meta.next.slice(1)}`;
        }
        return data;
      })
      .then(data => data.objects || [])
  }

  getPokemon(id: number) {
    return this.getServerResponse(`${config.url}api/v1/pokemon/${id}/`)
      .then(pokemon => {
        pokemon.imgSrc = `${config.imgSource}${pokemon.pkdx_id}.png`;
        return pokemon;
      });
  }

  getServerResponse(url: string) {
    let self = this;
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        url,
        true
      );
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send();
    })
    .then((stringData: string) => JSON.parse(stringData))
  }
}
