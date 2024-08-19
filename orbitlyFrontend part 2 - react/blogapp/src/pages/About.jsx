// import Base from "../components/base";

// const About=()=>{
//     return (
//         <Base>
//         <h1>I am Saad Ehsan</h1>
//         <p>welcome to my about page</p></Base>
//     )
// }

// export default About;

import React from 'react';
import Base from "../components/base";
import './About.css';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const About = () => {
    return (
        <Base>
            <div className="about-container">
                <Card className="card-custom">
                    <CardBody>
                        <CardTitle tag="h1" className="about-header">About Us</CardTitle>
                        <CardText className="about-paragraph">
                            Welcome to the Orbitly blog community platform! This space is dedicated to 
                            all enthusiasts and professionals interested in satellites and space technology. 
                            Here, users can share their knowledge, experiences, and insights about satellites.
                        </CardText>
                        <CardText className="about-paragraph">
                            On our platform, you can:
                        </CardText>
                        <ul className="about-list">
                            <li>Create posts about various aspects of satellites.</li>
                            <li>Comment on posts to engage with other community members.</li>
                            <li>Upload images to enhance your posts and share visual information.</li>
                            <li>And much more!</li>
                        </ul>
                        <CardText className="about-paragraph">
                            Our goal is to build a vibrant community where members can learn from each other, 
                            discuss the latest advancements in satellite technology, and collaborate on projects.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="card-custom">
                    <CardBody>
                        <CardText className="about-paragraph">
                            The creators of this platform are:
                        </CardText>
                        <ul className="about-list">
                            <li>Muhammad Saad Ehsan</li>
                            <li>Mubashir Abid</li>
                            <li>Raza Aziz</li>
                        </ul>
                        <CardText className="about-paragraph">
                            We are passionate about space technology and are excited to provide a platform where 
                            like-minded individuals can come together to share and expand their knowledge.
                        </CardText>
                        <CardText className="about-paragraph">
                            Thank you for being a part of our community. Together, let's explore the infinite possibilities of space!
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </Base>
    );
};

export default About;
