import React, { Component } from 'react';
import Songs from '../components/Songs';
import { convertAlbum, convertAlbums, skip } from '../utils';
import AUDIO from '../audio';


class Album extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }
  componentDidMount () {
    this.props.selectAlbum(this.props.params.albumId)
  }
  render () {
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}

export default Album;
