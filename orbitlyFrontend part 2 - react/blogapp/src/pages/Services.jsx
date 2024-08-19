// import Base from "../components/base";

// const Services = ()=>{
//     return (
//         <Base>
//         <div className="servicepage">
//             <h1>Service</h1>
//             <p>welcome to my service page</p>
//         </div>
//         </Base>
//     )
// }

// export default Services;
import React from 'react';
import Base from "../components/base";
import './Services.css';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Services = () => {
    return (
        <Base>
            <div className="services-container">
                <Card className="card-custom services-card">
                    <CardBody>
                        <CardTitle tag="h1" className="services-header">Our Services</CardTitle>
                        <CardText className="services-paragraph">
                            Welcome to our service page! At Orbitly, we offer a variety of services for satellite enthusiasts and professionals.
                        </CardText>
                        <CardText className="services-paragraph">
                            Our platform provides the following services:
                        </CardText>
                        <ul className="services-paragraph">
                            <li>Comprehensive posts and articles about satellite technology.</li>
                            <li>Interactive community features including comments and discussions.</li>
                            <li>Image uploads to support visual learning and sharing.</li>
                            <li>Regular updates on the latest in satellite advancements.</li>
                        </ul>
                        <CardText className="services-paragraph">
                            Our goal is to support and foster a community of satellite enthusiasts, providing them with the resources and platform they need to learn and share their knowledge.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </Base>
    );
};

export default Services;
