import React from "react";
import "./style.css";
import {Image} from 'react-bootstrap'
import logo1 from '../images/wix.png';
import logo2 from '../images/fb.png';
import logo3 from '../images/twitter.png';
import logo4 from '../images/yt.png';
import logo5 from '../images/pint.png';
import logo6 from '../images/insta.png';
import logo7 from '../images/link.png';


function About (){
    return(
        <>
            <div className="about">
                <div className="about1">
                    <h6 className="about-h">PRODUCT</h6>
                    <p className="about-p">Templates </p>
                    <p className="about-p">Explore</p>
                    <p className="about-p">Features</p>
                    <p className="about-p">Website Builder</p>
                    <p className="about-p">Web Accessibility</p>
                    <p className="about-p">Velo</p>
                    <p className="about-p">Wix Playground</p>
                    <p className="about-p">My Sites</p>
                    <p className="about-p">Premium Plans</p>
                    <p className="about-p">Wix SEO</p>
                    <p className="about-p">Logo Maker</p>
                    <p className="about-p">Create a Blog</p>
                    <p className="about-p">Online Store</p>
                    <p className="about-p">Wix Bookings</p>
                    <p className="about-p">Restaurants</p>
                    <p className="about-p">App Market</p>
                    <p className="about-p">Domains</p>
                    <p className="about-p">Business Email</p>
                    <p className="about-p">Web Hosting</p>
                    <p className="about-p">CX Software</p>
                    <p className="about-p">Developers</p>
                    <p className="about-p">Enterprise</p>
                    <p className="about-p">Email Marketing</p>
                    <p className="about-p">Website Design</p>
                    <p className="about-p">Professional Tools</p>
                </div>

                <div className="about1">
                    <h6 className="about-h">COMPANY</h6>
                    <p className="about-p">About Wix</p>
                    <p className="about-p">Press Room</p>
                    <p className="about-p">Investor Relations</p>
                    <p className="about-p">Wix Jobs</p>
                    <p className="about-p">Design Assets</p>
                    <p className="about-p">Terms of Use</p>
                    <p className="about-p">App Market Terms</p>
                    <p className="about-p">Privacy Policy</p>
                    <p className="about-p">Privacy and Security Hub</p>
                    <p className="about-p">Accessibility Statement</p>
                    <p className="about-p">Abuse</p>
                    <p className="about-p">Affiliates</p>
                    <p className="about-p">Wix Capital</p>
                    <p className="about-p">Updates & Releases</p>
                    <p className="about-p">Contact Us</p>
                    <p className="about-p">Patent Notice</p>
                    <p className="about-p">Sitemap</p>
                </div>

                <div className="about1">
                    <h6 className="about-h">COMMUNITY</h6>
                    
                    <p className="about-p">Wix Blog</p>
                    <p className="about-p">Wix Marketplace</p>
                    <p className="about-p">Student Website</p>
                    <p className="about-p">Wix Encyclopedia</p>
                    <p className="about-p">Partner Community</p>
                    
                </div>

                <div className="about1">
                    <h6 className="about-h">SUPPORT</h6>
                    
                    <p className="about-p">Support Center</p>
                    <p className="about-p">Getting Started Guide</p>
                    <p className="about-p">Wix Learn</p>
                    <p className="about-p">Status Page</p>
                </div>
                <div className="about5">
                    <Image src={logo1} className='img-logo'/>
                    <div className="about-p2">
                    <p>Wix.com is a leading cloud-based development platform with millions of users worldwide. We make it easy for everyone to create a beautiful, professional web presence.</p>
                    <p>Promote your business, showcase your art, set up an online shop or just test out new ideas. The Wix website builder has everything you need to create a fully personalized, high-quality free website.</p>
                    <p>© 2006-2022 Wix.com, Inc</p>
                    <Image src={logo2} className='img-logo2'/>
                    <Image src={logo3} className='img-logo2'/>
                    <Image src={logo4} className='img-logo2'/>
                    <Image src={logo5} className='img-logo2'/>
                    <Image src={logo6} className='img-logo2'/>
                    <Image src={logo7} className='img-logo2'/>
                    
                    </div>

                </div>

            </div>                
        </>
    )
}

export default About;