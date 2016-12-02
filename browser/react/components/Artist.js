import React, { Component } from 'react';
import { Link } from 'react-router';
import Songs from '../components/Songs';
import { convertAlbum, convertAlbums, skip } from '../utils';
import AUDIO from '../audio';
import Albums from './Albums.js';

class Artist extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount () {
    this.props.selectArtist(this.props.params.artistId);
  }
  render () {
    const selectedArtist = this.props.artist;
    const children = this.props.children;
    const propsToPassToChildren = {
        albums: this.props.artistAlbums,
        selectAlbum: this.props.selectAlbum,
        songs: this.props.currentSongList,
        currentSong: this.props.currentSong,
        isPlaying: this.props.isPlaying,
        toggleOne: this.props.toggleOne
    }
    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artist/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artist/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
    </div>
    );
  }
}

export default Artist;
