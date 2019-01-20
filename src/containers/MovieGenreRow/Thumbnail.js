import React, { Component } from "react";
import { Dropbox } from 'dropbox';
import { Player, ControlBar } from 'video-react';
import fetch from 'isomorphic-fetch';
import PlayIcon from '../../static/images/play-button.svg';
import Modal from "../../components/UI/Modal/Modal";

class Thumbnail extends Component {
  state = { open: false }

  componentDidMount() {
    const dbx = new Dropbox({ fetch, accessToken: 'w3mJDTw8SRUAAAAAAAAI54I3eg9xuDGE8hx-X6-nADr0L7tUZaHRbHEx1qF6QE1e' });
    dbx.filesGetTemporaryLink({ path: this.props.path_lower }).then(response => {
      this.setState(response)
    })

  }

  render() {
    return <Player ref="player" src={this.state.link} loop={true}>
      <ControlBar autoHide={true} />
    </Player>
  }
}

export default Thumbnail
