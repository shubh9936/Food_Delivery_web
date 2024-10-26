import React, { useContext, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState(" ");

  const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
 
  const navigate = useNavigate();

  const logout=()=>{
    localStorage.removeItem("token")
    setToken("");

    //after user get logeout we will send them to the homepage
    navigate("/")
  }


   //hi i m shubham
  
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
      <Link to='/'> <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</li></Link>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active": ""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact us")} className={menu === "contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <SearchIcon />
        <div className="navbar-search-icon">
         <Link to='/cart'><ShoppingBasketIcon /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sing in</button> 
        :<div className="navbar-profile">
          <img src={assets.profile_icon} alt=""/>
          <ul className="nav-profile-dropdwon">
            <li><img src={assets.bag_icon} alt=""/><p> Orders </p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt=""/><p> Logout </p></li>
          </ul>
          </div>}
        
     {/* jab bhi state ki value change hogi too web page reload hoga */}
      </div>
    </div>
  );
};

export default Navbar;

