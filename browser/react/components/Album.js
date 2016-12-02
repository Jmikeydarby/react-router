import React, { Component } from 'react';
import Songs from '../components/Songs';
import { convertAlbum, convertAlbums, skip } from '../utils';
import AUDIO from '../audio';
import {Link} from 'react-router';

class Album extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount () {
    this.props.selectAlbum(this.props.params.albumId)
  }
  render () {
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;
    console.log(this.props.location);
    return (
      <div className="album">
        <div>
          <h3>{ album.name }
          <a href={`mailto:nowhere@mozilla.org?subject=${album.name}
&body=${window.location.href}`} target="_top">
            <button className="btn btn-xs btn-default">
              <span className="glyphicon glyphicon-envelope"></span>
            </button>
          </a>
          </h3>
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
