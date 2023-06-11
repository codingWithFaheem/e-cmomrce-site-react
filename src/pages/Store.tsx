import React from 'react'
import { useShoppingCart } from '../context/ShopingCartContext';
import { StoreItem } from '../component';


const Store = () =>  {
 const {storeItems , isCartOpen , closeCart} = useShoppingCart()
 const cartState = isCartOpen ? 'blur-sm' :''
 return (
  <div className=' bg-gradient-to-r from-[#e4fdf2] to-[#e7e8e8]'>
  <div className={`${cartState} lg:w-[1240px]  
   flex flex-wrap justify-center items-start gap-7 
   m-auto  px-6 py-40 
    `} onClick={closeCart}>
  {storeItems.map(item => { 
    return <div>
          <StoreItem  key={item.id} {...item} />
      </div>
})} 
  </div>

  </div>
)
}

export default  Store ;