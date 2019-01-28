import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Photos from "./Photos.js";

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      allAlbums: [],
      allPhotos: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
      this.setState({
        allAlbums: res.data
      });
    });

    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      this.setState({
        allPhotos: res.data
      });
    });
  }

  redirectToPickedAlbum = () => {
    this.props.history.push(this.props.match.url);
  };

  render() {
    let { allAlbums, allPhotos } = this.state;
    let allAlbumsMapped = allAlbums.map(album => {
      return (
        <div className="allAlbumsMappedDIV">
          <h1>
            {album.title}
            <Link to={`/albums/${album.id}`}>Album #{album.id}</Link>
          </h1>
        </div>
      );
    });

    if (this.props.match.params.id) {
      return (
        <>
          <Photos allPhotos={allPhotos} />
        </>
      );
    } else {
      return (
        <>
          <h1>Albums</h1>
          {allAlbumsMapped}
        </>
      );
    }
  }
}

export default Albums;
