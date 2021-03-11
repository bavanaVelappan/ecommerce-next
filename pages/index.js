import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import styled from 'styled-components';
import UnstyledLink from '../components/styled/unstyled';
import useCart from "../hooks/useCart";

const Container = styled.div`
    background:#EDF7F6;
    padding:1rem;
    border-radius:7px;
    cursor:pointer;
    min-height:200px;
    position:relative;    
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.03);
    }
`;
const ProductContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:1rem;
    margin-top:2rem;
`;
const Price =styled.div`
    position:absolute;
    bottom: 0.5rem;
    right: 1rem;
    font-size: 2.5rem;
`;
const Buttons = styled.div`
    padding:0.5rem;
    top:0;
    right:0;
    position:absolute;
    padding:1rem 1rem 1rem 1rem;
`;

const renderProduct =(product, addItemToCart, removeItemFromCart) => {
    
    const handleAddItemToCart = (e) => {
        e.stopPropagation();
        addItemToCart(product);
    }

    const handleRemoveItemFromCart = (e) => {
        e.stopPropagation();
        removeItemFromCart(product.id);
    }

    return (
        <Link href={product.slug} key={product.id} >
            <UnstyledLink>
                <Container >
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <Price>${product.price/100}</Price>
                    <Buttons>
                        <button onClick={handleAddItemToCart}>+</button>&nbsp;&nbsp;
                        <button onClick={handleRemoveItemFromCart}>-</button>
                    </Buttons>
                </Container>
            </UnstyledLink>
        </Link>
    )
}
const HomePage = (props) => {
    const { cart, addItemToCart, removeItemFromCart } = useCart();
    return  (
        <ProductContainer>{props.products.map(product => renderProduct(product, addItemToCart, removeItemFromCart))}</ProductContainer>
    );
}

export const getStaticProps = () =>{
    const directory = `${process.cwd()}/content`;
    const filenames = fs.readdirSync(directory);

    const products = filenames.map(filename => { 
        const fileContent =fs.readFileSync(`${directory}/${filename}`).toString();
        const { data } = matter(fileContent);
        const slug = `/products/${filename.replace('.md', '')}`;
        const product = {
            ...data,
            slug
        }
        return product;
    });
    return {
        props: {
            products
        }
    }
}
  
export default HomePage;