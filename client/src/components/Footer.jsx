import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    const navigate = useNavigate();
    const externalLinks = (name) => {
        if (name === "mail")
            window.location.href = "mailto:adhikarysayandip@gmail.com";
        else if (name === "portfolio")
            window.location.href = "https://sayandip2.netlify.app";
        else if (name === "facebook")
            window.location.href = "https://www.facebook.com/sayandip.adhikary.96";
        else if (name === "github")
            window.location.href = "https://github.com/Sayandip0408";
        else if (name === "instagram")
            window.location.href = "https://www.instagram.com/sayan.dip7/";
        else navigate('/contact');
    }
    return (
        <footer className='container-fluid bg-dark mt-4 py-3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 text-center my-3">
                        <h3 className='text-light'>IRCTC-CLONE MERN</h3>
                        <h6 style={{ color: "#5D5E61" }}>By SayanDip Adhikary</h6>
                        <div className="d-flex justify-content-around mt-4">
                            <Button variant='outlined' color='error' onClick={() => { externalLinks("portfolio") }}><StarsOutlinedIcon /></Button>
                            <Button variant='outlined' color='error' onClick={() => { externalLinks("instagram") }}><InstagramIcon /></Button>
                            <Button variant='outlined' color='error' onClick={() => { externalLinks("github") }}><GitHubIcon /></Button>
                            <Button variant='outlined' color='error' onClick={() => { externalLinks("facebook") }}><FacebookOutlinedIcon /></Button>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 text-center my-3">
                        <h4 className='text-light'>Important Links</h4>
                        <Link to='/about' className='d-block text-decoration-none' style={{ color: "#5D5E61" }}>About Us</Link>
                        <Link to='/contact' className='d-block text-decoration-none' style={{ color: "#5D5E61" }}>Contact Us</Link>
                        <Link to='/tickets' className='d-block text-decoration-none' style={{ color: "#5D5E61" }}>Reservations</Link>
                        <Link to='/new-ticket' className='d-block text-decoration-none' style={{ color: "#5D5E61" }}>Book New Ticket</Link>
                    </div>
                    <div className="col-md-4 col-12 text-center my-3">
                        <h4 className='text-light'>Newsletter</h4>
                        <input type='text' placeholder='Your Email ID' className='d-block p-2 m-auto text-center' style={{ borderRadius: "3px", border: "none", outline: "none", width: "250px" }} />
                        <Button variant='contained' color='error' className='my-2' style={{ width: "250px", height: "40px" }} startIcon={<SubscriptionsIcon />}>Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer