import { ReactNode } from "react"
import classes from "./Main.module.scss"

interface Props {
    children?: ReactNode
}

const Main = ({children}: Props) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    )
}
export default Main;
