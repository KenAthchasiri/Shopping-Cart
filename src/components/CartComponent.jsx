import React, { useEffect, useState } from 'react'
import { MyCartContext } from '../management/context'
import CartItemComponent from './CartItemComponent'


const CartComponent = () => {
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        return (
            <div className='shopping-cart'>
                <div className='empty'>ไม่มีสินค้าในตะกร้า</div>
            </div>
        )

    }else{
        return (
            <div className='shopping-cart'>
                <div className='title'>สินค้าในตะกร้า</div>
                {cart.map((element,i)=>{
                    return <CartItemComponent key={i} {...element}/>
                })}
                
                <div className='footer'>ยอดรวม {formatNumber(total)} บาท</div>
            </div>
        )
    }
}

export default CartComponent