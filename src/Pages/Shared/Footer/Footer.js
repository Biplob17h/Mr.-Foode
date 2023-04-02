import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/png-transparent-mr-krabs.png'
import footerImg from '../../../assets/png-clipart-close-up-of-coffee-bean-lot-coffee-beans-footer-food-coffee.png'

const Footer = () => {
    return (
        <footer style={{background : `${footerImg}`}} className="rounded footer p-10 bg-base-200 text-base-content mt-20">
            <div>
                <img className='w-[130px] mb-5' src={img1} alt="" />
                <p><span className='text-xl font-semibold font-serif ctext1'>Mr. Foode</span><br />Eat until your belly is full.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;