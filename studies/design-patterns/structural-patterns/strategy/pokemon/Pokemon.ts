interface PokemonAttributes {
  attack: number;
  defense: number;
  health: number;
}

export class Pokemon {
  private id: number;
  private _name: string;
  private _attributes: PokemonAttributes;

  constructor(id: number, name: string, attributes: PokemonAttributes) {
    this.id = id;
    this._name = name;
    this._attributes = attributes;
  }

  name(): string {
    return this._name;
  }

  attributes(): PokemonAttributes {
    return this._attributes;
  }
}
