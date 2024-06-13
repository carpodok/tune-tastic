let playList = [];
const invalidPlayingIndex = -1;
let currPlayingIndex = invalidPlayingIndex;

const playlistManager = {
  getPlaylist: () => playList,
  getCurrentIndex: () => currPlayingIndex,
  addSong: (url) => {
    playList.push(url);
    if (playList.length === 1) currPlayingIndex = 0;
  },
  clearPlaylist: () => {
    playList = [];
    currPlayingIndex = invalidPlayingIndex;
  },
  nextSong: () => {
    if (currPlayingIndex < playList.length - 1) {
      currPlayingIndex++;
      return playList[currPlayingIndex];
    } else {
      return null;
    }
  },
  previousSong: () => {
    if (currPlayingIndex > 0) {
      currPlayingIndex--;
      return playList[currPlayingIndex];
    } else {
      return null;
    }
  },
  getCurrentSong: () => {
    if (currPlayingIndex !== invalidPlayingIndex) {
      return playList[currPlayingIndex];
    }
    return null;
  },
};

module.exports = playlistManager;
