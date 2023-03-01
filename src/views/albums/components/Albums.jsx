import React, { Fragment,useState, useContext, useEffect } from 'react';
import { AlbumService } from '../services/album.service';
import Album from './Album';
import { UserContext } from '../../../context';

const Albums = () => {
    const { currentUser } = useContext(UserContext);
    const [userAlbums,setuserAlbums] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            const albumsData= await 
                AlbumService.list();
                // console.log(albumsData);
                setuserAlbums(prevAlbums => [
                    ...prevAlbums,
                    ...albumsData.filter(item => item.userId === currentUser?.id)
                ]);
    
        // console.log(albumsData.filter(item => item.userId === currentUser?.id));
    };
        
        fetchData();
    }, [currentUser?.id]);
    // console.log(userAlbums);

    return (
        <div>
            <h1
                style={{
                color: 'blue',
            }}>
                Albums
            </h1>
            {userAlbums &&
                userAlbums.map((album,index) => (
            <Fragment key={album.id}>
                <Album data={album} />
            </Fragment>
        ))}
        </div>
    );
};

export default Albums;
