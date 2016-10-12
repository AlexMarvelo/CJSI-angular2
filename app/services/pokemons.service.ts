import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Pokemon } from '../models/pokemon.model';
import config from '../config';

@Injectable()
export class PokemonsService {
  next: string;

  constructor(private http: Http) {
    this.next = `${config.url}api/v1/pokemon/?limit=${config.limit}`;
  }

  getPokemons(): Promise<Pokemon[]> {
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

  getPokemon(id: number): Promise<Pokemon> {
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
