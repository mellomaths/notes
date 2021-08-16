export interface Database<T> {
  save(document: T): void;
  list(): T[];
}
