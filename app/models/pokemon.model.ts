export class Pokemon {
  name: string;
  id: number;

  constructor(inp: object) {
    this.id = inp.id;
    this.name = inp.name || '';
  }
}
