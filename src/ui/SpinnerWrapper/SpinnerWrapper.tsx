import { ReactNode } from "react";
import classes from "./SpinnerWrapper.module.scss"

interface Props {
    children?: ReactNode
}

const SpinnerWrppaer = ({children}: Props) => {
    return (
        <div className={classes.spinnerWrapper}>
            {children}
        </div>
    )
}

export default SpinnerWrppaer;