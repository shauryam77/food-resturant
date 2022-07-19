import './style.css'
import burger from './assets/burger.jpeg'
import coke from './assets/coke.jpeg'
import pepsi from './assets/pepsi.jpeg'
import fries from './assets/fries.jpeg'
import Buttons from '../Buttons'
import { useState } from 'react'
import CheckOut from '../Checkout'

export default function FoodMenu(props) {
    const [itemPrice, setItemPrice] = useState(0)
    const [checkOut, setCheckOut] = useState('none')
    const data = [
        {
            "name": "Hamburger",
            "price": "200",
            "image": burger
        },
        {
            "name": "Fries",
            "price": "100",
            "image": fries
        },
        {
            "name": "Coke",
            "price": "50",
            "image": coke
        },
        {
            "name": "Pepsi",
            "price": "50",
            "image": pepsi
        }
    ]
    const addButton = (e) => {
        console.log(e.target.id)
        let add = Number(e.target.id)
        setItemPrice(itemPrice + add)
        console.log(add);
    }
    const subButton = () => {
       
    }
    const handleOnClick = () => {
        if (checkOut === 'none') {
            setCheckOut('block')
        }
    }
    return (

        <div style={{ display: props.menuDisplay }}>
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
                {data.map((item, index) => {
                    return (
                        <div className='menuList' key={index}>
                            <ul>
                                <li className='listStyle' >
                                    <img src={item.image} width='300px' height='200px' />
                                </li>
                                <li className='listStyle'>
                                    <h3> {item.name}</h3>
                                </li>
                                <li className='listStyle'>
                                    Price : {item.price}
                                </li>
                                <div>Quantity</div>
                                <div>Cost(Inr)</div>
                                <Buttons id={item.price} addButton={() => { console.log(item.price)}} subButton={subButton} />
                            </ul>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleOnClick}>Submit</button>
            <CheckOut checkOut={checkOut} />
        </div>
    )
}