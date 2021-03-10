const fs = require("fs");
const matter = require("gray-matter");

exports.handler = async (event, context) => {

    const { cart } = JSON.parse(event.body);
    const products = getProducts();

    //process.env.STRIPE_PUBLIC_KEY

    const cartWithProducts = cart.map(({ id, qty }) => {
        const product = products.find((p) => p.id === id);
        return {
            ...product,
            qty,
        };
    })
    

    return {
        statusCode: 200,
        body: "I have charged that card many time!",
    };
};

const getProducts = () =>{
    const directory = `${process.cwd()}/content`;
    const filenames = fs.readdirSync(directory);

    const products = filenames.map(filename => { 
        const fileContent =fs.readFileSync(`${directory}/${filename}`).toString();
        const { data } = matter(fileContent);        
        return data;
    });

    return products;
}