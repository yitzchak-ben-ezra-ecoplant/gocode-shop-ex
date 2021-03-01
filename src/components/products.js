import Product from "./product";

const productTemplate = {
    img: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
}
const products = [];
for (let i = 0; i < 15; ++i) {
    products.push({...productTemplate, id: i + 1});
}

function Products() {
    return (
        <section className="products">
            {products.map(product => <Product key={product.id} img={product.img} title={product.title}
                                              price={product.price}/>)}
        </section>
    )
}

export default Products;