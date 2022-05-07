import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";
import image1 from "../images/business1.webp";

function Business (){
    return(
        <>
            <div className="business">
                <div className="business1">
                <Image src={image1} style={{width: "100%"}}></Image>
                </div>
                <div className="business2">
                    <h1 className="business-h1">Manage, Promote and Grow Your Business Online</h1>
                    <h3 className="business-h3">Create a website with the Wix website builder and use the built-in professional business suite to promote and manage your business—all in one place. Generate leads and drive conversions with 
                    <a href="/home" className="business-a" > Email Marketing</a>, 
                    <a href="/home" className="business-a" > Facebook Ads</a>,
                    <a href="/home" className="business-a" > Landing Pages</a> and
                    customer management tools. Then track your success and make data-driven decisions on how to improve with  
                    <a href="/home" className="business-a" > Wix Analytics</a>.</h3>
                    <a href="/home" className="editor-a" >Get Started</a>
                </div>
            </div>
        
        
        
        </>
    )
}

export default Business;