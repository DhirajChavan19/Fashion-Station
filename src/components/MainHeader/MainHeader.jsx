import React, { useState } from "react";
import './MainHeader.css';
import {BiSearch} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'

const MainHeader = () =>{

    const [isSearchOpen,setIsSearchOpen] = useState(false)

    const expandSearchInput = () =>{
        setIsSearchOpen(true)
    }

    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    const handleSidebar = ()=>{
        setIsSidebarOpen((isSidebarOpen)=>!isSidebarOpen)
    }

    return(
        <div className="main-header-container">
            <div className="main-header-nav">
                <div className="web-logo">
                    <div className="black-web-logo" style={{color:"black"}}>
                        FASHION
                    </div>
                    <div className="orng-web-logo" style={{color:'#ed574e'}}>
                        STATION
                    </div>
                </div>

                <div className="search-icon-input-container" onClick={expandSearchInput} >
                            <input type="text" name="userSearch" className={`user-search-input ${isSearchOpen?'open-search':'close-search'}`}/>
                            <BiSearch className="search-icon"/>
                </div>

                <div className="header-content">
                    <div className="categories-content-links">
                        <div className="mens-section">Men</div>
                        <div className="womens-section">Women</div>
                        <div className="kids-section">
                            Kids
                        </div>
                    </div>

                    <div className="header-menu-containner">
                        <div className="user-icon-container">
                            <FaUser/>
                        </div>
                        <div className="cart-icon-container">
                            <FaShoppingCart/>
                        </div>

                        <div className="menu-icon-container" onClick={handleSidebar}>
                            <AiOutlineMenu/>
                        </div>
                    </div>
                </div>

                <div className="sidebar-content" style={isSidebarOpen?{display:"flex"}:{display:"none"}}>
                    <div className="sidebar-mens-content">
                        Men
                    </div>
                    <div className="sidebar-womens-content">
                        Women
                    </div>
                    <div className="sidebar-kids-content">
                        Kids
                    </div>
                    <div className="user-icon-container">
                        My Profile <FaUser/>
                    </div>
                    <div className="cart-icon-container">
                        My Cart <FaShoppingCart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;