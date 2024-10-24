import { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = ({halelAddToCart}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className="w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                product.map((product, index) => <Product
                 key={index} 
                 product={product}
                 halelAddToCart={halelAddToCart}
                 />)
            }
            </div>
        </div>
    );
};

export default AllProducts;