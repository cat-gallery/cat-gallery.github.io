import Container from "./ui/Container/Container"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import "./index.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Panels from "./components/Panels/Panels"
import { StrictMode } from "react"

const queryCLient = new QueryClient();

function App() {

    return (
        <StrictMode>
            <Main>
                <Header />
                <Container>
                    <QueryClientProvider client={queryCLient}>
                        <Panels/>
                    </QueryClientProvider>
                </Container>
            </Main>
        </StrictMode>
    )
}

export default App
