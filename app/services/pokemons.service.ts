import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

import config from '../config';

@Injectable()
export class PokemonsService {
  next = `${config.url}api/v1/pokemon/?limit=${config.limit}`;

  getPokemons() {
    let self = this;
    return new Promise<Pokemon[]>((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        self.next,
        true
      );
      xhr.onload = function() {
        if (this.status == 200) {
          let parser = new Promise(resolve2 => resolve2(this.response))
            .then((stringData: string) => JSON.parse(stringData))
            .then(data => {
              if (data.objects) {
                data.objects.map((pokemon: Pokemon) => {
                  pokemon.imgSrc = `${config.imgSource}${pokemon.pkdx_id}.png`;
                  return pokemon;
                })
              }
              console.log(data);
              return data;
            })
            .then(data => {
              if (data.meta && data.meta.next) {
                self.next = `${config.url}${data.meta.next.slice(1)}`;
              }
              return data;
            })
            .then(data => {
              if (data.objects) {
                resolve(data.objects);
              } else {
                reject(new Error('no pokemons found'));
              }
            })
            .catch(
              error => reject(new Error(error))
            );
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
