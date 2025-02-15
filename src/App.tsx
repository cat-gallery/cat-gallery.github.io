import Container from "./ui/Container/Container"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Panel from "./components/Panel"
import CatIcon from "./components/svg/CatIcon"
import "./index.scss"
import ImageGrid from "./ui/ImageGrid/ImageGrid"

function App() {

    return (
        <>
            <Main>
                <Header />
                <Container>
                    <ImageGrid>
                        {[...Array(20)].map(_ => {
                            return <Panel />
                        })}
                    </ImageGrid>
                </Container>
            </Main>
        </>
    )
}

export default App
