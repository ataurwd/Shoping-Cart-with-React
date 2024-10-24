import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart"
import { useState } from 'react';

function App() {
  const [active, setActive] = useState({
    cart: true,
    status: 'active'
  })

  const [addCart, setAddCart] = useState([])
  const [price , setPrice] = useState(50)

  const handelProductPrice = (newPrice) => {    
    setPrice(price + newPrice)
  }

  const haldelDeleteItem = Item => {
    const updateCart = addCart.filter(prev => prev.id !== Item)
    setAddCart(updateCart)
  }
  const halelAddToCart = item => {
    const isExist = addCart.find(prev => prev.id === item.id)
    if(isExist){
      alert('This item is already added to the cart')
    }
    else{
      setAddCart([...addCart, item])
      handelProductPrice(addCart.stock)
    }
  }

const haldelActiveStatus = newActive => {
  setActive({
    cart: newActive === 'cart',
    status: 'active'
  })
}

  return (
    <div className="flex gap-5 px-5 md:px-10 mt-4 md:mt-10">
      <AllProducts
      halelAddToCart={halelAddToCart}
    />
    <Cart 
      haldelActiveStatus={haldelActiveStatus}
     active={active}
     addCart={addCart}
     haldelDeleteItem={haldelDeleteItem}
     price={price}
     />

    </div>
      )
    }
export default App
