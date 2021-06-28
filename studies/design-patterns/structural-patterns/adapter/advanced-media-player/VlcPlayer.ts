import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    console.log(`Playling VLC file: ${fileName}`);
  }
  playMp4(fileName: string): void {
    throw new Error("Method not implemented.");
  }
}
