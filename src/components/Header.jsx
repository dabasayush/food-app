import { useState } from "react";

const Header = () => {

    const [userHandle, setUserHandle] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">

                <h2 className="">LOGO</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li
                        onClick={() => {
                            userHandle === "Login" ?
                            setUserHandle("Logout"):
                            setUserHandle("Login")}}>
                        {userHandle}
                    </li>
                </ul>
            </div>
            <div className="cart-container">
                <h2>CART</h2>
            </div>
        </div>
    )
}
export default Header;