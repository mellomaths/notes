import { LowercaseCounter } from "../../src/Counter/LowercaseCounter";
import { SimpleCounter } from "../../src/Counter/SimpleCounter";
import { UppercaseCounter } from "../../src/Counter/UppercaseCounter";
import { SentenceSplitter } from "../../src/SentenceSplitter/SentenceSplitter";

describe("SentenceSplitter", () => {
  it("should split sentence", () => {
    const sentence: string =
      "Minnie Mouse makes many marshmallows for Mickey Mouse to munch on.";
    const sentenceSplitter: SentenceSplitter = new SentenceSplitter();
    const words: string[] = sentenceSplitter.split(sentence);
    expect(words.length).toEqual(11);
  });

  it("should add simple counter observer", () => {
    const sentence: string =
      "Minnie Mouse makes many marshmallows for Mickey Mouse to munch on.";
    const splitter: SentenceSplitter = new SentenceSplitter();
    splitter.addCounter("SIMPLE", new SimpleCounter());
    const words: string[] = splitter.split(sentence);
    expect(splitter.getWordCount("SIMPLE")).toEqual(11);
  });

  it("should add upper case counter observer", () => {
    const sentence: string =
      "Minnie Mouse makes many marshmallows for Mickey Mouse to munch on.";
    const splitter: SentenceSplitter = new SentenceSplitter();
    splitter.addCounter("UPPERCASE", new UppercaseCounter());
    const words: string[] = splitter.split(sentence);
    expect(splitter.getWordCount("UPPERCASE")).toEqual(4);
  });

  it("should add lower case counter observer", () => {
    const sentence: string =
      "Minnie Mouse makes many marshmallows for Mickey Mouse to munch on.";
    const splitter: SentenceSplitter = new SentenceSplitter();
    splitter.addCounter("LOWERCASE", new LowercaseCounter());
    const words: string[] = splitter.split(sentence);
    expect(splitter.getWordCount("LOWERCASE")).toEqual(7);
  });

  it("should add all word counters observer", () => {
    const sentence: string =
      "Minnie Mouse makes many marshmallows for Mickey Mouse to munch on.";
    const splitter: SentenceSplitter = new SentenceSplitter();
    splitter.addCounter("SIMPLE", new SimpleCounter());
    splitter.addCounter("UPPERCASE", new UppercaseCounter());
    splitter.addCounter("LOWERCASE", new LowercaseCounter());
    const words: string[] = splitter.split(sentence);
    expect(splitter.getWordCount("SIMPLE")).toEqual(11);
    expect(splitter.getWordCount("UPPERCASE")).toEqual(4);
    expect(splitter.getWordCount("LOWERCASE")).toEqual(7);
  });
});
