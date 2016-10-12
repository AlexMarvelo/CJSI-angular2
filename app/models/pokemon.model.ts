class Type {
  name: string;
  resource_uri: string;
}

export class Pokemon {
  name: string;
  pkdx_id: number;
  types: Type[];
  imgSrc?: string;
  attack: number;
  defense: number;
  happiness: number;
  speed: number;
  height: string;
  weight: string;
}
