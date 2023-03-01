import React, { Fragment,useState, useContext, useEffect } from 'react';
import { AlbumService } from '../services/album.service';
import Album from './Album';
import { UserContext } from '../../../context';
import classes from "./Albums.module.css";


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
        <>
            <div className={classes.enclosing}>
            <div className={classes.container}>
            <h1 className={classes.title}>Discover</h1>
            <p className={classes.paragraph}>
                <strong>WHAT'S NEW TODAY</strong>
            </p>
            <br />
            </div>
        </div>
                {userAlbums &&
                    userAlbums.map((album,index) => (
                <Fragment key={album.id}>
                    <Album data={album} />
                </Fragment>
            ))}
        </>
    );
};

export default Albums;
