import React from 'react'
import {GrFormAdd as Add} from 'react-icons/gr'
import {GrFormSubtract as Subtract} from 'react-icons/gr';
import { useShoppingCart } from '../context/ShopingCartContext';
type CheakProps = {
    id:number ;
    name : string ;
    price : number ;
    imgUrl : string ;
}
const StoreItem = ({id , name , price , imgUrl}:CheakProps ) => {

    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity} = useShoppingCart()
    const quantity = getItemQuantity(id) ;
      

//   const btnFun = (id:number) => {
//     return quantity > 1 ? removeFromCart(id) : increaseCartQuantity(id)
//   }
  return (
    <div className='  bg-white px-2 rounded-xl w-[20rem] h-[29rem] overflow-hidden relative' >
             
                <img src={imgUrl} alt="" className= ' h-[18rem] lg:h-[19rem]  lg:w-full ' />
                <div className=' h-[9rem] px-4 '>
                  <div>
                   <p className='produtct-font text-[17px]  font-bold text-[#37876b]'>{name}</p>
                    <p className=' text-[13px] text-gray-400 semi-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  </div>

                    <div className=' flex items-center justify-between w-[5rem]'>
                          <s className=' text-gray-400'>$ {price + 30}</s>
                        <p> {price}</p>
                    </div>

                    {/* <div className='mt-2 
                    flex  items-center justify-between'>
                     
                        <button className={`  'bg-[#123]  text-[#57d38a] text-[14px] font-bold'  w-[8rem] py-3 rounded-full cursor-pointer
                         `}
                        onClick={() => increaseCartQuantity(id)}
                        >
                        {/* {`${quantity > 0 ?   'Remove' : 'Add to Card' } `} 
                        Add to Card
                        </button>
                        {quantity > 0  &&
                        <div className='bg-[#c6ebd2] w-[8rem] h-[2.8rem] rounded-full
                        px-3 flex items-center justify-between 
                        '>
                              <div className='  cursor-pointer'>
                                < Subtract onClick={() =>  decreaseCartQuantity(id)}/>
                              </div>
                              <div className=' font-bold'>{quantity}</div>
                            <div className=' cursor-pointer' onClick={() => increaseCartQuantity(id)}>
                                <Add />
                            </div>
                        </div>
                            }
                    </div> 
                </div>*/}
    </div>
  )
}

export default StoreItem