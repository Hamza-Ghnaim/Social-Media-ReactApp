import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
                <div key={photo.id} >
                    <div >
                    <img  src={photo.url} alt="img" />
                    <div >
                    </div>
                    </div>
                    <hr/>
                </div>
        ))}
        </>
    )
}

export default Photos;

