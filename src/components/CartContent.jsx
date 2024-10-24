
const CartContent = ({addCart, haldelDeleteItem}) => {    
    return (
        <div >
           {
            addCart.map((item, index) => 
                <div key={index} className="flex gap-3 items-center ml-5 mt-5">
                    <div>
                        <img className="h-20 w-full rounded-xl" src={item.image} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">{item.name}</h1>
                        <h1 className="font-bold">Price ${item.price}</h1>
                    </div>
                    <button onClick={() => haldelDeleteItem(item.id)} className="btn btn-primary">Delete</button>
                </div>
            )
           }
        </div>
    );
};

export default CartContent;