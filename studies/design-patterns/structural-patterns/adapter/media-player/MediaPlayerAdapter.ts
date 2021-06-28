import { Mp4Player } from "../advanced-media-player/Mp4Player";
import { VlcPlayer } from "../advanced-media-player/VlcPlayer";
import { MediaPlayer } from "./MediaPlayer";

export class MediaPlayerAdapter implements MediaPlayer {
  private readonly vlcPlayer: VlcPlayer = new VlcPlayer();
  private readonly mp4Player: Mp4Player = new Mp4Player();

  play(audioType: string, fileName: string): void {
    if (audioType === "vlc") {
      this.vlcPlayer.playVlc(fileName);
    } else if (audioType === "mp4") {
      this.mp4Player.playMp4(fileName);
    }
  }
}
