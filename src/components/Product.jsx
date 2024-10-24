
const Product = ({product, halelAddToCart}) => {
    const {name, brand, price, category, reviews, description,image} = product;
    return (
    <div>
        <div className="card bg-base-100 shadow-xl">
      <figure>
        {/* Image Placeholder, replace with actual product image URL if available */}
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex gap-3">
            <div className="mt-2">
          <span className="badge badge-outline badge-success">
            {brand}
          </span>
            </div>
            <div className="mt-2">
          <span className="badge badge-outline badge-primary">
            {category}
          </span>
            </div>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <span className="text-xl font-semibold text-green-600">
            ${price}
          </span>
          <div className="flex items-center">
            <span className="ml-2 text-gray-500 text-sm">
              ({reviews} reviews)
            </span>
          </div>
        </div>
        <div className="card-actions justify-start">
          <button onClick={() => halelAddToCart(product)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
</div>
    );
};

export default Product;