export interface WordCounter {
  count(word: string): void;
  getWordCount(): number;
}
