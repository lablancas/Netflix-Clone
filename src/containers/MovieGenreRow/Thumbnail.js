import React, { Component } from "react";
import { Dropbox } from 'dropbox';
import { Player, ControlBar } from 'video-react';
import fetch from 'isomorphic-fetch';
import PlayIcon from '../../static/images/play-button.svg';

class Thumbnail extends Component {
  state = {
    loaded: false,
    link: null,
  }

  componentDidMount() {
    const dbx = new Dropbox({ fetch, accessToken: 'w3mJDTw8SRUAAAAAAAAI54I3eg9xuDGE8hx-X6-nADr0L7tUZaHRbHEx1qF6QE1e' });
    dbx.filesGetTemporaryLink({ path: this.props.path_lower }).then(response => {
      this.setState({ ...response, loaded: true })
    })
  }

  renderPlayer() {
    const file = { ...this.props, ...this.state }
    return <video onClick={() => this.props.onClick(file)}>
      <source src={this.state.link} />
    </video>
  }

  renderButton() {
    return <button className="modal__btn modal__btn--white">
      <PlayIcon className="modal__btn--icon" />
      {this.props.name}
    </button>
  }

  render() {
    return this.state.loaded ? this.renderPlayer() : this.renderButton();
  }
}

export default Thumbnail
