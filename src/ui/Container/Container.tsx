import classes from "./Container.module.scss"

interface Props {
    children?: React.ReactNode
}

const Container = ({children}: Props) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Container;