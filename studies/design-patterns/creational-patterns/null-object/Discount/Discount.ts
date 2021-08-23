export interface Discount {
  apply(originalValue: number): number;
}
