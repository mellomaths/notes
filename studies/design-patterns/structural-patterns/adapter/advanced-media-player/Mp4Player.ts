import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class Mp4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    throw new Error("Method not implemented.");
  }
  playMp4(fileName: string): void {
    console.log(`Playling MP4 file: ${fileName}`);
  }
}
