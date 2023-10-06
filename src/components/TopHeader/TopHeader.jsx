import React from "react";
import './TopHeader.css'
import {RxCross2} from 'react-icons/rx'

const TopHeader = ()=>{
    return(
        <div className="top-blck-header">
            <div className="top-header-nav">
                <div className="top-header-content">
                    Free Shipping on all orders above $50
                </div>
                <div className="top-header-acct">
                    <select name="acct-selected" id="acct-set">
                        <option value="select-opt">My Account</option>
                        <option value="signin">Sign In</option>
                        <option value="signup">Sign Up</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;