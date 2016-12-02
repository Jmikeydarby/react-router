import React, { Component } from 'react';
import Songs from '../components/Songs';
import { convertAlbum, convertAlbums, skip } from '../utils';
import AUDIO from '../audio';
import Albums from './components/Albums.js';


class Artist extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount () {
    this.props.selectArtist(this.props.params.artistId);
  }
  render () {
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        <h4>ALBUMS</h4>
        <Albums albums={this.props.albums} />
        <h4>SONGS</h4>
      </div>
    );
  }
}

export default Artist;
