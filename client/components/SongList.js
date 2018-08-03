import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  renderSongs() {
   
    return this.props.data.songs.map(song => {
      return (
        // key = { song.id }
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    })
  }
  render() {
    // could have is loading instead of not songs
    if (!this.props.data.songs) { return <div>loading data</div> };
    return (
      <div>
         Song List
        <ul className="collection">
            {this.renderSongs()}
        </ul>
        <Link 
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);