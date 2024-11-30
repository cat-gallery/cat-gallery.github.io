import Container from "../../ui/Container/Container";
import CatIcon from "../svg/CatIcon";
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div>
            <Container>
                <header className={classes.header}>
                    <CatIcon style={{ height: "59px", width: "fit-content" }}></CatIcon>
                    <h1>Галлерея кошки</h1>
                </header>
            </Container>

            <div className={classes.block} />
        </div>
    )
}

export default Header;
