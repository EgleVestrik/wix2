import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";
import image1 from "../images/blog1.webp";
import image2 from "../images/blog2.webp";
import image3 from "../images/blog3.webp";
import image4 from "../images/blog4.webp";

function Blog (){
    return(
        <>
            <div className="blog">
                <div className="blog1">
                    <h1 className="blog-h1">Spark Your Creativity</h1>
                    <h4 className="blog-h4">Follow the latest trends, improve your skills with how-tos and get inspired by case studies on the Wix Blog</h4>
                    <a href="/home" className="blog-a" >Explore the Blog </a>
                </div>
                
                <div className="blog2">
                    <div className="blog2-1" >
                        <Image className="blog-img" src={image1} style={{width: "320px"}}></Image>
                        <a href="/home" className="blog-b" >How to Create a Beautiful<br></br> One-Page Website</a>
                    </div>
                    <div className="blog2-2">
                        <Image className="blog-img" src={image2} style={{width: "320px"}}></Image>
                        <a href="/home" className="blog-b" >Best Portfolio Websites to Fuel Your<br></br>Inspiration</a>
                    </div>
                    <div className="blog2-3">
                        <Image className="blog-img" src={image3} style={{width: "320px"}}></Image>
                        <a href="/home" className="blog-b" >How to Create an Authentic<br></br> Brand Identity</a>
                    </div>
                    <div className="blog2-4">
                        <Image className="blog-img" src={image4} style={{width: "320px"}}></Image>
                        <a href="/home" className="blog-b" >Top 9 Web Design Trends in<br></br> 2021 You Don’t Want to Miss</a>
                    </div>
                </div>
            </div>                
        </>
    )
}

export default Blog;