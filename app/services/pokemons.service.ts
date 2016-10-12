import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Pokemon } from '../models/pokemon.model';
import config from '../config';

@Injectable()
export class PokemonsService {
  next: string;
  pokemons: Pokemon[];

  constructor(private http: Http) {
    this.next = localStorage.getItem('metaNext') || `${config.url}api/v1/pokemon/?limit=${config.limit}`;
    this.pokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
  }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  loadMorePokemons(): Promise<Pokemon[]> {
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
          localStorage.setItem('metaNext', `${config.url}${data.meta.next.slice(1)}`);
        }
        return data;
      })
      .then(data => {
        if (data.objects) this.pokemons = this.pokemons.concat(data.objects);
        localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
        return data.objects || [];
      })
  }

  getPokemon(id: number): Promise<Pokemon> {
    const stored = this.pokemons.find((pokemon: Pokemon) => pokemon.pkdx_id == id);
    if (stored) {
        return new Promise(resolve => resolve(stored))
    }
    return this.getServerResponse(`${config.url}api/v1/pokemon/${id}/`)
      .then(pokemon => {
        pokemon.imgSrc = `${config.imgSource}${pokemon.pkdx_id}.png`;
        return pokemon;
      });
  }

  private getServerResponse(url: string) {
    return new Promise((resolve, reject) => {
        this.http.get(url)
          .subscribe(
            (response: Response) => resolve(response),
            error => reject(error)
          )
      })
      .then((response: Response) => response.json());
  }
}
