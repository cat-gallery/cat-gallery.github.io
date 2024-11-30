import classes from "./Panel.module.scss"
import { ImagePlaceholder } from "./svg/ImagePlaceholder";

interface Props {
    children?: React.ReactNode
}

const Panel = ({ children }: Props) => {

    return (
        <div className={classes.panel}>
            {
                children != null
                ? children
                : <ImagePlaceholder style={{height: "100px"}}/>
            }
        </div>
    )
};

export default Panel;