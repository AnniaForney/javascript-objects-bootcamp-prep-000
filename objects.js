var playlist = {
'Lady Gaga':'Shallow', 
'Cardi B': 'Ring'
};

var updatePlaylist = (playlist, artist, song) => {
  // playlist['Tayla Parx'] ='I Want You',

  return playlist[artist] = song;
};

var removeFromPlaylist = (playlist, artist) => {
  delete playlist[artist]
  return playlist;
};