import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";
import image1 from "../images/editor1.webp";
import image2 from "../images/editor2.webp";
import image3 from "../images/editor3.webp";


function Editor (){
    return(
        <>
            
                <div className="editor">
                    <div className="editor-part1" >
                        <div className="editor-part1_1">
                            <Image src={image1} style={{width: "490px"}}></Image>
                        </div>
                        <div className="editor-part1_2">
                            <h1 className="editor-h1">Wix Editor <br></br>
                                Total Design Freedom</h1>
                            <h2 className="editor-h3">Start from scratch or choose from over 500 designer-made templates that you can fully  customize using the drag and drop website builder. Make your site come to life with video backgrounds, scroll effects and animation. With the Wix Editor, you can create your own professional website exactly the way you want it.</h2>
                            <a href="/home" className="editor-a" >Get Started</a>
                        </div>
                    </div>
                    <div className="editor-part2" >
                        <div className="editor-part2_1"> 
                            <h1 className="editor-h1">Wix ADI <br></br>
                            Get Online Fast</h1>
                            <h2 className="editor-special">Answer a few simple questions and Wix ADI (Artificial Design Intelligence) will instantly build a personalized website just for you. Choose your style, change the layout and add any features you need for your business, like an online store or booking system. When you’re ready, go live in a click.</h2>
                            <a href="/home" className="editor-b" >Get Started</a>
                            <Image className="part2_1" src={image2} style={{width: "490px"}}></Image>
                        </div>
                        <div className="editor-part2_2">
                            <h1 className="editor-h1">Velo by Wix <br></br>
                            Open Dev Platform</h1>
                            <h2 className="editor-h3">Build professional web applications with serverless computing and hassle-free coding. Manage all your content from integrated databases, add your own code in the built-in IDE or work in your own environment, and connect to 100s of APIs. Plus, you get total design freedom from the Wix Editor and optimized business applications.</h2>
                            <a href="/home" className="editor-b" >Get Started</a>
                            <Image className="part2_2" src={image3} style={{width: "490px"}}></Image>
                        </div>
                    </div>  
                    <div>
                        <h4 className="editor-get">Get Professional Features for Your Website</h4>
                        <h4 className="line">_______________________________________________</h4>
                    </div>                 
                </div>
            
        </>
    )
}

export default Editor;