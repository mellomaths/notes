export interface Flight {
  origin(): string;
  destiny(): string;
  cost(): number;
  distance(): number;
}
