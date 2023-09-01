import React from 'react';

import '../Assets/css/Contact.css'

import Icon1 from '../Assets/Icons/Git.png';
import Icon2 from '../Assets/Icons/Mail.png'
import Icon3 from '../Assets/Icons/Linkedin.png'

function Contact() {
    return (
        <React.Fragment>
            <section className='contacts'>
                <div className='title'>
                    <h3>Contact me!</h3>
                </div>

                <div className='info'>
                    <div className='left'>
                        <div className='icon'>
                            <img src={Icon1} alt='GitIcon'></img>
                            <p>My GitHub</p>
                        </div>

                        <div className='icon'>
                            <img src={Icon2} alt='MailIcon'></img>
                            <p>AetherInaWork@gmail.com</p>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='icon'>
                            <img src={Icon3} alt='LinkedinIcon'></img>
                            <p>My Linkedin</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact