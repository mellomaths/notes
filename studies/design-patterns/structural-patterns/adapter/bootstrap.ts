import { AudioPlayer } from "./media-player/AudioPlayer";

const audio = new AudioPlayer();
audio.play("mp3", "beyond the horizon.mp3");
audio.play("mp4", "alone.mp4");
audio.play("vlc", "far far away.vlc");
audio.play("avi", "mind me.avi");
