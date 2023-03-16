import React from 'react'
import './ExperienceComp.scss'
import bannerImage1 from "./images/bannerImage1.jpg";
import bannerImage2 from "./images/bannerImage2.jpg";

function ExperienceComp() {
    return (
        <section>
            <div className="ExperienceComp">
                    <img src={bannerImage1} alt="" className="Image" />
                
                <div className="text_Container">
                    <div className="banner_title">
                        NEW CREAMY KOHL LONGWEAR EYE PENCIL
                    </div>
                    <div className="banner_description">
                        Define your eyes with our ultra-pigmented New Creamy Kohl Longwear Eye Pencil. Our Ultra-creamy formula allows you to smudge and smoke your liner before it’s locked in and transfer-proof.
                    </div>

                    <a href="" className="btn_arrow"> SHOP NOW     <img src="https://hudabeauty.com/on/demandware.static/Sites-huda-us-Site/-/en_US/v1678350663508/images/svg-icons/arrow-right.svg" alt="" height="13" width="13" right="8.375rem" />
                    </a>

                </div>
               <img src={bannerImage2} alt="" className="Image" />


            </div>
        </section>
    )
}

export default ExperienceComp