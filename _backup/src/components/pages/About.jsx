import React from 'react';
import { HashLink } from 'react-router-hash-link';

const About = () => {

    return (

        <div id="About" className="about">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <HashLink smooth to="#Top" className="hashlink"> <h2 className="mt-5">ABOUT</h2> </HashLink>
                        <img src="/stjerne.svg" className="stjerne mb-4" alt="" />
                    </div>

                </div>


                <div className="row">

                <div className="col-6 aboutcol ml-auto">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, quia? Distinctio molestiae quo beatae ex nemo saepe illum quae harum itaque nostrum, a numquam iusto quasi ratione recusandae veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda quibusdam rem quam iusto ea, magni exercitationem veniam, enim corrupti veritatis illo, deleniti vero nihil molestiae quod dolorem saepe! Iure sint ut distinctio accusamus alias? Incidunt corporis eveniet suscipit nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos pariatur dicta consectetur! </p>
                </div>

                <div className="col-6 aboutcol mr-auto">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi officia exercitationem, dolor nulla in illo aperiam, commodi, velit tempore placeat error quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et officiis optio, nobis tenetur sint nostrum quasi laborum culpa aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta ad minima rerum deleniti consequuntur eligendi repudiandae adipisci voluptatibus at. </p>
                </div>

                </div>

            </div>

        </div>


    )
}


export default About
