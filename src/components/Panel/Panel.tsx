import classes from "./Panel.module.scss"
import IImageInfo from "../../logic/IImageInfo";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

interface Props {
    imageInfo: IImageInfo
    style?: CSSProperties
    imageStyle?: CSSProperties,
}

const Panel = ({ imageInfo, style, imageStyle }: Props) => {

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
        <div style={style} className={classes.panel}>
            {
                imageInfo != null
                    ? <img style={{...imageStyle}} onClick={switchFullScreen} ref={imgRef} className={classes.image} />
                    : <ImagePlaceholder status={query.status} />
            }

            <div ref={imgWrapper} onClick={switchFullScreen} className={classes.popup}>
                <img ref={fullImgRef} />
                <div>
                    <h2>
                        {imageInfo.name}
                    </h2>
                    <p>
                        {imageInfo.description}
                    </p>
                </div>
            </div>


        </div>
    )
};

export default Panel;