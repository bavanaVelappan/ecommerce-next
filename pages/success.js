import Page from "../components/styled/page";
import useCart from "../hooks/useCart";
import { useEffect } from "react";

const Success = () => {    
    const {clearCart} = useCart();
    
    useEffect(() => {
        clearCart();
    }, []);
    
    return(
        <Page>
            <h2>Payment Successful</h2>
            <p>Thank you for your purchase!</p>
        </Page>
    )
}

export default Success;