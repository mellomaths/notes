import { WordCounter } from "./WordCounter";

export class SimpleCounter implements WordCounter {
  private wordCount: number = 0;

  count(word: string): void {
    this.wordCount++;
  }
  getWordCount(): number {
    return this.wordCount;
  }
}
