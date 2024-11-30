import { ReactNode } from "react"
import classes from "./ImageGrid.module.scss"

interface Props {
    children?: ReactNode
}

const ImageGrid = ({children}: Props) => {
    return (
        <div className={classes.grid}>
            {children}
        </div>
    )
}

export default ImageGrid