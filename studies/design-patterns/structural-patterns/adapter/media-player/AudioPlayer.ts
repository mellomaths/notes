import { MediaPlayer } from "./MediaPlayer";
import { MediaPlayerAdapter } from "./MediaPlayerAdapter";

export class AudioPlayer implements MediaPlayer {
  private readonly mediaPlayerAdapter: MediaPlayerAdapter =
    new MediaPlayerAdapter();

  play(audioType: string, fileName: string): void {
    if (audioType == "mp3;") {
      console.log(`Playing MP3 file: ${fileName}`);
      return;
    }

    if (audioType === "vlc" || audioType === "mp4") {
      return this.mediaPlayerAdapter.play(audioType, fileName);
    }

    console.log(`Invalid media. ${audioType} format not supported`);
  }
}
