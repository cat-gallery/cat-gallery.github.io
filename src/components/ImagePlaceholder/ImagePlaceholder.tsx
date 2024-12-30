import { QueryStatus } from "@tanstack/react-query";
import { ImageCard } from "../svg/ImageCard";
import classes from "./ImagePlaceholder.module.scss"

interface Props {
    status: QueryStatus
}

const ImagePlaceholder = ({ status }: Props) => {
    return (
        <div className={classes.card}>
            {
                status === "error"
                    ? (
                        <div className={classes.failedCard}>
                            <ImageCard className={classes.img} />
                        </div>
                    )
                    : (
                        <div className={classes.pendingCard} />
                    )
            }

        </div>
    )
}

export default ImagePlaceholder;