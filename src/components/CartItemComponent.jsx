import React from 'react'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import delicn from '../assets/delete-icn.svg'
import { MyCartContext } from '../management/context'


const CartItemComponent = (props) => {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
    const { name,image_url,price,quantity,id } = props
    return (
        <div className='item'>
            <div className='product-image'>
                <img src={image_url} alt={name} />
            </div>
            <div className='description'>
                <span>{name}</span>
                <span>ราคา {formatNumber(price)} บาท</span>
            </div>
            <div className='quantity'>
                <button className='btn plus' onClick={()=>toggleQuantity(id,'increase')}><img src={plus} alt="" /></button>
                <input type="text" value={quantity} disabled/>
                <button className='btn minus' onClick={()=>toggleQuantity(id,'decrease')}><img src={minus} alt="" /></button>
            </div>
            <div className='total-price'>
                {formatNumber(quantity*price)}
            </div>
            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={delicn} alt="" />
            </div>
        </div>
    )
}

export default CartItemComponent