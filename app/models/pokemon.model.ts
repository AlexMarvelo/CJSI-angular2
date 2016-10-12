class Type {
  name: string;
  resource_uri: string;
}

export class Pokemon {
  name: string;
  pkdx_id: number;
  types: Type[];
  imgSrc?: string;
}
