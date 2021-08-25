import { WordCounter } from "./WordCounter";

export class LowercaseCounter implements WordCounter {
  private wordCount: number = 0;

  count(word: string): void {
    const firstLetter: string = word.charAt(0);
    if (firstLetter === firstLetter.toLowerCase()) {
      this.wordCount++;
    }
  }
  getWordCount(): number {
    return this.wordCount;
  }
}
