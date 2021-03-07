import Link from "next/link";
const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/aboutus'>Aboout US</Link>
            <Link href='/products'>Products</Link>
            <Component {...pageProps} />
            <footer>THis is footer</footer>
        </div>
    )
}

export default MyApp;
