import React, { useState, useContext, useEffect } from 'react';

import Gallery from './components/Gallery';
import { AlbumService, PhotoService } from './services';
import { UserContext } from '../../context';

const Albums = () => {
  const [photos, setPhotos] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const [albumsData, photosData] = await Promise.all([
        AlbumService.list(),
        PhotoService.list(),
      ]);

      const userAlbums = albumsData.filter(
        item => item.userId === currentUser?.id,
      );

      setPhotos(
        photosData
          .filter(el => userAlbums.some(item => item.id === el.albumId))
          .map(item => ({ src: item.url, width: 600, height: 600 })),
      );
    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <div>
      <h1
        style={{
          color: 'blue',
        }}>
        Photos
      </h1>
      <Gallery photos={photos} />
    </div>
  );
};

export default Albums;
