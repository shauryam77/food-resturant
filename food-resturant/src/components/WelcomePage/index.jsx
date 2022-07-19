import { useState } from 'react'
import FoodMenu from '../FoodMenu'
import './style.css'

export default function WelcomePage(props) {
    const [pageDisplay, setPageDisplay] = useState('block')
    const[menuDisplay, setMenuDisplay] = useState('none')
    const handleOnClick = () => {
        console.log({ pageDisplay })
        if (pageDisplay === 'block') {
            setPageDisplay('none')
            setMenuDisplay('block')
        }
    }
    return (
        <div style={{display : props.welcomePageDisplay }}>
            <div className="navBar">
                <div className='navbarItems'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg>
                    Food's resturant
                </div>
            </div>
            <div style={{ display: pageDisplay }}>
                <div className='loginPage' >
                    <p >
                        Welcome to Food's Kitchen
                    </p>
                    <div>
                        <button className='menuButton' onClick={handleOnClick}>Go to Menu</button>
                    </div>
                </div>
            </div>
            <FoodMenu menuDisplay={menuDisplay}/>
        </div>
    )
}