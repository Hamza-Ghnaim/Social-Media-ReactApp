import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import classes from "./Albums.module.css";


const Photos = ()=>{

    const [photos, setphotos] = useState([]);
    const [searchParams] = useSearchParams();
    const albumID = searchParams.get("albumID");

    useEffect(() => {
        const Fetch = async () => {

        const Response2 = await axios.get(
        `albums/${albumID}/photos`
        );
        setphotos(Response2.data);
    };
    Fetch();
    // localStorage.removeItem('userinfo');
});

    return (
        <>
            {photos &&
                photos.map((photo) => (
                <div key={photo.id} className={classes.addedCOMMENTDIV}>
                    <div className={classes.commenterINFO} >
                    <img className={classes.photo} src={photo.url} alt="img" />
                    <div className={classes.commentorNAMES}>
                    </div>
                    </div>
                    <hr className={classes.hr2}/>
                </div>
        ))}
        </>
    )
}

export default Photos;

