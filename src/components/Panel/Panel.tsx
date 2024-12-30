import classes from "./Panel.module.scss"
import { ImageCard } from "../svg/ImageCard";
import IImageInfo from "../../logic/IImageInfo";
import BASE_URL from "../../logic/BaseURL";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

interface Props {
    imageInfo: IImageInfo
}

const Panel = ({ imageInfo }: Props) => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const imgWrapper = useRef({} as HTMLDivElement);
    const imgRef = useRef({} as HTMLImageElement);
    const fullImgRef = useRef({} as HTMLImageElement);
    const query = useQuery({
        queryKey: [imageInfo.name + imageInfo.src],
        queryFn: async () => {
            setTimeout(() => { alert }, 5000);
            const response = await fetch("assets/" + imageInfo.src);
            return await response.blob();
        }
    });
    useEffect(() => {
        if (query.status === "success") {
            console.log(query);
            const imgUrl = URL.createObjectURL(query.data);
            fullImgRef.current.src = imgUrl;
            imgRef.current.src = imgUrl;
        }
    }, [query.status]);

    const switchFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        console.log("clicked");
        if (!isFullScreen) {
            imgWrapper.current.style.display = "flex";
            document.body.style.overflowY = "hidden";
        }
        else {
            imgWrapper.current.style.display = "none";
            document.body.style.overflowY = "auto";
        }
    };

    return (
        <div className={classes.panel}>
            {
                imageInfo != null
                    ? <img onClick={switchFullScreen} ref={imgRef} className={classes.image} />
                    : <ImagePlaceholder status={query.status} />
            }

            <div ref={imgWrapper} onClick={switchFullScreen} className={classes.popup}>
                <img ref={fullImgRef} />
            </div>


        </div>
    )
};

export default Panel;