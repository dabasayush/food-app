import { useState } from "react";
import { Link } from "react-router-dom";

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
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/learn">
                            Learn
                        </Link>
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