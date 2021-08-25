import { WordCounter } from "../Counter/WordCounter";

export class SentenceSplitter {
  private counters: Map<string, WordCounter> = new Map();

  split(sentence: string): string[] {
    const words: string[] = sentence.split(" ");
    words.forEach((word) => {
      Array.from(this.counters.values()).forEach((counter) => {
        counter.count(word);
      });
    });
    return words;
  }

  addCounter(name: string, counter: WordCounter): void {
    this.counters.set(name, counter);
  }

  getWordCount(name: string): number {
    const counter: WordCounter = this.counters.get(name);
    return counter.getWordCount();
  }
}
