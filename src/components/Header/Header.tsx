import Container from "../../ui/Container/Container";
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div>
            <Container>
                <header className={classes.header}>
                    {/* <CatIcon style={{ height: "59px", width: "fit-content" }}></CatIcon> */}
                    <img src="/assets/logo.png" alt="Cat Logo" style={{height: "100%", objectFit: "contain"}}/>
                    <h1>Галерея кошки</h1>
                </header>
            </Container>

            <div className={classes.block} />
        </div>
    )
}

export default Header;
