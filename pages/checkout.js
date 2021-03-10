import Page from "../components/styled/page";
import useCart from "../hooks/useCart";
import styled from 'styled-components';
import axios from 'axios';

const Item = styled.li`
    list-style:none;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #efefef;
    margin-bottom:1rem
`;

const Ul = styled.ul`
    list-style:none;
    padding:0;
`;

const Total = styled.p`
    display:flex;
    justify-content:space-between;
    font-weight:600;
    font-size:1.5rem;
`;

const Button = styled.button`
    background: linear-gradient(to right, #1FA2FF, #12D8FA, #A6FFCB);
    font-size:2.5rem;
    outline:none;
    border:none;
    color:white;
    padding:1.5rem;
    border-radius:5px;
    font-weight:800px;
    margin-bottom:1rem;
    display:inline-block;
    width:100%;

    &:hover {
        cursor:pointer;
    }
`;

const Content = styled.div`
    padding:1rem 2rem;
`;
const Checkout = () => {
    const { cart, total } = useCart();

    const processPayment = async() =>{
        
        let url ='/.netlify/functions/charge-card';
        const {data} = await axios.post(url, { cart });
    }

    return (
        <Page> 
            <h2>Checkout Page</h2>
            {cart.length > 0 
                ?
                <Content>
                    <Ul>
                    { cart.map((item, i) => { 
                        return (
                            <Item key={i}>
                                <span>{item.qty} X {item.name}</span>
                                <span>${item.price/100}</span>
                            </Item>
                        )
                        })
                    }
                    </Ul>
                    <Total>
                        <span>Total</span>
                        <span>${total/100}</span>
                    </Total>
                    <Button onClick={processPayment}>Process Payment</Button>
                </Content>
                : <p>You havent added any items in your cart!</p>
            }
        </Page>
    )
}

export default Checkout;