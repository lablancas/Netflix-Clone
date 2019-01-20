import React, { Component } from "react";
import { Dropbox } from 'dropbox';
import { Player, ControlBar } from 'video-react';
import fetch from 'isomorphic-fetch';
import axios from '../../axios-movies';
import MovieGenre from './MovieGenre';
import Modal from "../../components/UI/Modal/Modal";
import MovieDetails from '../../components/Movie/MovieDetails/MovieDetails';

import Thumbnail from './Thumbnail';

class MovieGenreRow extends Component {

  /** Hold each genre movie row in an array */
  state = {
    rows: [],
    file: {},
  }

  /** Make all API calls as soon as our MovieGenreRow component mounts. */
  componentWillMount() {
    const self = this
    const dbx = new Dropbox({ fetch, accessToken: 'w3mJDTw8SRUAAAAAAAAI54I3eg9xuDGE8hx-X6-nADr0L7tUZaHRbHEx1qF6QE1e' });
    dbx.filesListFolder({path: '/TrapMusicMuseum'})
      .then(function(response) {
        const folders = response.entries.filter(entry => entry['.tag'] === 'folder').map(folder => {
          return dbx.filesListFolder({path: folder.path_lower}).then(files => ({
            id: folder.id,
            name: folder.name,
            files: files.entries,
          }))
        })
        Promise.all(folders).then(rows => self.setState({ rows }))
      })
      .catch(function(error) {
        console.log(error);
      });
  }

   render() {

      return (
        <div className="movieShowcase">
          {this.state.rows.map(row =>
            <div key={row.id}>
              <h1 className="movieShowcase__heading">{row.name}</h1>
              <div className="movieShowcase__container">
                {row.files.map(file =>
                  <div key={file.id} className="movieShowcase__container--movie">
                    <Thumbnail {...file} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
   }
}

export default MovieGenreRow;
