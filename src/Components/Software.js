import React from "react";

import '../Assets/css/Software.css'

import Icon1 from '../Assets/Icons/Clip.png';
import Icon2 from '../Assets/Icons/Visual.png'
import softimg from '../Assets/Software.png'

 function Software() {
    return(
        <React.Fragment>
            <div className="abilities">
                <div className="title">
                    <img src={ softimg } alt="idk">
                        
                    </img>
                </div>

                <div className="list">
                    <div className="clip">
                        <img src= { Icon1 } alt="ClipStudio-Icon"></img>
                        <p>Clip Studio Paint</p>
                    </div>

                    <div className="clip">
                        <img src= { Icon2 } alt="ClipStudio-Icon"></img>
                        <p>Visual Studio Code</p>
                    </div>

                </div>
            </div>



        </React.Fragment>
    )
 }



export default Software