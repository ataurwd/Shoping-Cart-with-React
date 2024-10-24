import AboutContent from "./AboutContent";
import CartContent from "./CartContent";

const Cart = ({haldelActiveStatus ,active, addCart, haldelDeleteItem, deleteItem,price}) => {    
    return (
        <div className="w-1/3">
            <div className=" flex justify-center space-x-4 mt-4 items-center">
                <button onClick={() => haldelActiveStatus('cart')} className={`border-2 px-4 py-2 rounded-xl hover:bg-sky-100 
                    ${active.cart ? 'bg-sky-600 text-white' : ''}`}>Cart</button>
                <button onClick={() => haldelActiveStatus('about')} className={`border-2 px-4 py-2 rounded-xl hover:bg-sky-100 
                    ${active.cart ? '' : 'bg-sky-600 text-white'}`}>About Us</button>
                     <h3 className="text-xl font-bold">Cart Item {addCart.length}</h3>
                     <h4 className="font-bold text-2xl">$ {price}</h4>
            </div>
            {active.cart ?<CartContent 
            addCart={addCart}
            haldelDeleteItem ={haldelDeleteItem}
            deleteItem={deleteItem}
            />:<AboutContent/>}
        </div>
    );
};

export default Cart;