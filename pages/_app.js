import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CartProvider from '../context/Cart';
import Cart from "../components/Cart";

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');    
    background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
    font-family: 'Roboto', sans-serif;
`;
const Page = styled.div`
    max-width:968px;
    width:100%;
    height:100%;
    min-height:80vh;
    margin:0 auto;
`;
const MyApp = ({ Component, pageProps }) => {
    return (
        <CartProvider>
            <Container>
                <Normalize />
                <NavBar/>
                <Page>                
                    <Component {...pageProps} />                               
                </Page>
                <Cart />
                <Footer/>
            </Container>
        </CartProvider>
    )
}

export default MyApp;
