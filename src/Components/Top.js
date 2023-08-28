import React from 'react'

import image from '../Assets/pic.jpg'
import letters from '../Assets/lettering.png'
import title from '../Assets/AboutMe.png'

import '../Assets/css/Top.css'

function Top() {
    return (
        <React.Fragment>
            <section className='top'>
                <div className='profile'>
                    <img src={image} alt='idk'></img>
                </div>

                <div className='content'>
                    <div className='stuff'>
                        <img src={letters} alt='letters'></img>
                    </div>

                    <div className='information'>
                        <div className='title'>
                            <img src={ title }></img>
                        </div>

                        <div className='info'>
                            <p>
                                I'm Adriel Lopez, a dev from Argentina Ushuaia! I'm a highschool student with basic knowledge in Front-End (React, HTML, CSS) and still trying to get better at SQL and Back-End itself.
                                Aside from the coding, I am an artist who loves to desing characters and create stories.
                            </p>
                        </div>
                    </div>
                </div>

            </section>



        </React.Fragment>
    )

}

export default Top