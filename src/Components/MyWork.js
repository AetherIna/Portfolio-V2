import React from "react";
import '../Assets/css/MyWork.css'
import workimg1 from '../Assets/ML.jpg'
import Title from '../Assets/MyWork.png'

function myWork() {
    return (
        <React.Fragment>
            <section className="myWork" id="work">

                <div className="title2">
                    <img src={Title}></img>
                </div>


                <div className="content">
                    <a href="https://mercado-liebre-344t.onrender.com" target="_blank" rel="noreferrer">
                        <img src={workimg1} alt="idk"></img>
                    </a>

                    <img src={workimg1} alt="work 2"></img>

                    <img src={workimg1} alt="work 3"></img>

                    <img src={workimg1} alt="work4"></img>
                </div>
            </section>
        </React.Fragment>
    )
}

export default myWork;