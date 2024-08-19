// import React from 'react'
// import Base from '../../components/base'

// function ProfileInfo() {
//   return (
//     <Base>
//     <div>ProfileInfo</div>
//     </Base>
//   )
// }

// export default ProfileInfo


// import React from 'react';
// import Base from '../../components/base';
// import './ProfileInfo.css';
// import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

// const ProfileInfo = () => {
//     const userProfile = {
//         name: "Muhammad Saad Ehsan",
//         email: "mu@gmail.com",
//         bio: "Satellite enthusiast and Orbitly platform creator. Passionate about space technology and community building.",
//         profilePicture: "https://via.placeholder.com/150" // Replace with actual profile picture URL
//     };

//     return (
//         <Base>
//             <div className="profile-container">
//                 <div className="profile-header">
//                     <CardImg 
//                         top 
//                         src={userProfile.profilePicture} 
//                         alt="Profile Picture" 
//                         className="profile-picture"
//                     />
//                     <CardTitle tag="h1" className="profile-name">{userProfile.name}</CardTitle>
//                     <CardText className="profile-email">{userProfile.email}</CardText>
//                 </div>
//                 <CardBody>
//                     <CardText className="profile-bio">{userProfile.bio}</CardText>
//                 </CardBody>
//             </div>
//         </Base>
//     );
// }

// export default ProfileInfo;



import React from 'react';
import Base from '../../components/base';
import './ProfileInfo.css';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

const ProfileInfo = () => {
    const userProfile = {
        name: "Muhammad Saad Ehsan",
        email: "mu@gmail.com",
        bio: "Satellite enthusiast and Orbitly platform creator. Passionate about space technology and community building.",
        profilePicture: "https://avatars.dicebear.com/api/avataaars/saad.svg" // Cartoon avatar image URL
    };

    return (
        <Base>
            <div className="profile-container">
                <div className="profile-header">
                    <CardImg 
                        top 
                        src={userProfile.profilePicture} 
                        alt="Profile Picture" 
                        className="profile-picture"
                    />
                    <CardTitle tag="h1" className="profile-name">{userProfile.name}</CardTitle>
                    <CardText className="profile-email">{userProfile.email}</CardText>
                </div>
                <CardBody>
                    <CardText className="profile-bio">{userProfile.bio}</CardText>
                </CardBody>
            </div>
        </Base>
    );
}

export default ProfileInfo;
