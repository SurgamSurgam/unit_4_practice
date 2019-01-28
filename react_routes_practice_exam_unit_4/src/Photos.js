import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Photos = props => {
  let { allPhotos } = props;

  let matchedAlbumsPhotos = allPhotos.map(photos => {
    if (photos.albumId === +props.match.params.id) {
      return (
        <div className="matchedAlbumsPhotosDIV" key={photos.id}>
          <img src={photos.thumbnailUrl} alt="" />
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <h1>PHOTOS</h1>
      <div className="photosDiv">{matchedAlbumsPhotos}</div>
      <Link to="/albums">Back</Link>
    </>
  );
};

export default withRouter(Photos);
