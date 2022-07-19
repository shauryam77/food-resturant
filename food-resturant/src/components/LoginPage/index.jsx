import WelcomePage from "../WelcomePage";
import { useState } from "react";
import './style.css'

export default function LoginPage() {
    const [loginDisplay, setLoginDisplay] = useState('block')
    const [welcomePageDisplay, setWelcomePageDisplay] = useState('none')
    const handleOnClick = () => {
        if (loginDisplay === 'block') {
            setLoginDisplay('none')
            setWelcomePageDisplay('block')
        }
    }
    return (
        <>
            <div className="loginMainPage" >
                <div style={{ display: loginDisplay, marginTop: '100px' }}>
                    <div className="loginBox">
                        <h1 className="loginHeader">Food's Resturant</h1>
                        <h3 className="loginHeader">Login</h3>
                        <div style={{ display: 'flex', justifyContent: 'center',gap:'20px' }}>
                            <input type='text' placeholder="UserName" />
                            <input type='text' placeholder="Password" />
                            <button onClick={handleOnClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <WelcomePage welcomePageDisplay={welcomePageDisplay} />
        </>
    )
}