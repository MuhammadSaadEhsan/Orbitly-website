// import React, { useEffect, useState } from 'react';
// import Base from '../components/base';
// import { Link, useParams } from 'react-router-dom';
// import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from 'reactstrap';
// import { createComment, laodPost } from '../services/post-service';
// import { toast } from 'react-toastify';
// import { privateAxios } from '../services/helper';
// import { fetchUserName } from '../services/user-service';
// import { currentUserId } from './login';

// function PostPage() {
//     const [comment,setComment] = useState(
//         {comment : ""}
//     )
//     const { postId } = useParams();
//     const [post, setPost] = useState(null);
//     const [imageURL, setImageURL] = useState(null);


//     useEffect(() => {
//         laodPost(postId).then(async (data) => {
//             console.log(data);
//             const commentsWithUsernames = await Promise.all(
//                 data.comments.map(async (comment) => {
//                     const username = await fetchUserName(comment.userId);
//                     return { ...comment, username };
//                 })
//             );
//             data.comments = commentsWithUsernames;
//             console.log("updated data" + data);
//             setPost(data);

//             if (data.imageName) {
//                 return privateAxios.get(`/api/post/imagenpnote/${data.imageName}`, { responseType: 'blob' });
//             } else {
//                 return null;
//             }
//         }).then((response) => {
//             if (response && response.data) {
//                 const url = URL.createObjectURL(response.data);
//                 setImageURL(url);
//             }
//         }).catch((error) => {
//             console.log(error);
//             toast.error("Error occurred in loading post!");
//         });
//     }, [postId]);

//     const printDate = (number) => {
//         return new Date(number).toLocaleString();
//     };

//     // const submitPost = () =>{
//     //     createComment(comment,post.postId,post.user.id)
//     //     .then(data => console.log(data)).catch(err => console.log(err));
//     // }

//     const submitPost = () => {
//         createComment({ content: comment }, post.postId, currentUserId)
//             .then(data => {
//                 setComment("");
//                 // Refresh comments
//                 return laodPost(postId);
//             })
//             .then(async (data) => {
//                 const commentsWithUsernames = await Promise.all(
//                     data.comments.map(async (comment) => {
//                         const username = await fetchUserName(comment.userId);
//                         return { ...comment, username };
//                     })
//                 );
//                 data.comments = commentsWithUsernames;
//                 setPost(data);
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <Base>
//             <Container className='mt-4'>
//                 <Link to="/">Home</Link> / {post && (<Link to="">{post.title}</Link>)}
//                 <Row>
//                     <Col md={{ size: 12 }}></Col>
//                     <Card className='mt-3'>
//                         {post && (
//                             <CardBody>
//                                 <CardText>
//                                     Posted by <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
//                                 </CardText>
//                                 <CardText className='mt-3 text-muted'>
//                                     <span>{post.category.categoryTitle}</span>
//                                 </CardText>
//                                 <div className="divider" style={{
//                                     width: '100%',
//                                     height: '1px',
//                                     backgroundColor: '#e2e2e2'
//                                 }}>
//                                 </div>
//                                 <div className='mt-3'>
//                                     <h1>{post.title}</h1>
//                                 </div>
//                                 <div className="image-Container mt-3" style={{ maxWidth: "50%" }}>
//                                     {imageURL ? (
//                                         <img className='img-fluid' src={imageURL} alt="Post" />
//                                     ) : (
//                                         <p>Loading image...</p>
//                                     )}
//                                 </div>
//                                 <CardText className='mt-4' dangerouslySetInnerHTML={{ __html: post.content }}>
//                                 </CardText>
//                             </CardBody>
//                         )}
//                     </Card>
//                 </Row>

//                 <Row>
//                     <Col md={{
//                         size: 9,
//                         offset: 1
//                     }}>
//                         <h3 className='mt-4'>Comments ({post ? post.comments.length : 0})</h3>
//                         {post && post.comments && post.comments.length > 0 ? (
//                             post.comments.map((comment, index) => (
//                                 <Card className='mt-3 mb-1' key={index}>
//                                     <CardBody>
//                                         <CardText>
//                                             <b>{comment.content}</b> --  by {comment.username}
//                                         </CardText>
//                                     </CardBody>
//                                 </Card>
//                                 // <div key={comment.id}>
//                                 //     <h4>{comment.username}</h4>
//                                 //     <p>{comment.content}</p>
//                                 // </div>
//                             ))
//                         ) : (
//                             <p>No comments available</p>
//                         )}

//                         {<Card className='mt-3 mb-1'>
//                             <CardBody>
//                                 <Input type="textarea" placeholder='Enter comment here'/>
//                                 <Button onClick={submitPost} value={comment.comment} onChange={(event)=>{setComment({comment:event.target.value})}} className='mt-3' color='primary' >Submit</Button>
//                             </CardBody>
//                         </Card >}
//                     </Col>
//                 </Row>
//             </Container>
//         </Base>
//     );
// }

// export default PostPage;


import React, { useEffect, useState, useContext } from 'react';
import Base from '../components/base';
import { json, Link, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from 'reactstrap';
import { createComment, laodPost } from '../services/post-service';
import { toast } from 'react-toastify';
import { privateAxios } from '../services/helper';
import { fetchUserName } from '../services/user-service';
// import { currentUserId } from './login';

function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [comment, setComment] = useState({ comment: "" });

    useEffect(() => {
        laodPost(postId).then(async (data) => {
            const commentsWithUsernames = await Promise.all(
                data.comments.map(async (comment) => {
                    const username = await fetchUserName(comment.userId);
                    return { ...comment, username };
                })
            );
            data.comments = commentsWithUsernames;
            setPost(data);

            if (data.imageName) {
                return privateAxios.get(`/api/post/imagenpnote/${data.imageName}`, { responseType: 'blob' });
            } else {
                return null;
            }
        }).then((response) => {
            if (response && response.data) {
                const url = URL.createObjectURL(response.data);
                setImageURL(url);
            }
        }).catch((error) => {
            toast.error("Error occurred in loading post!");
        });
    }, [postId]);

    const submitPost = () => {
        if (!comment.comment) {
            toast.error("Comment content cannot be empty!");
            return;
        }

        const currentUserId = JSON.parse(localStorage.getItem('data')).id;
        const commentData = { content: comment.comment };
        createComment(commentData, postId, currentUserId) // Use currentUser's ID
            .then(data => {
                toast.success("Comment added successfully!");
                setComment({ comment: "" });
                return laodPost(postId);
            })
            .then(async (data) => {
                const commentsWithUsernames = await Promise.all(
                    data.comments.map(async (comment) => {
                        const username = await fetchUserName(comment.userId);
                        return { ...comment, username };
                    })
                );
                data.comments = commentsWithUsernames;
                setPost(data);
            })
            .catch(err => {
                toast.error("Failed to add comment.");
            });
    };

    const printDate = (number) => {
        return new Date(number).toLocaleString();
    };

    return (
        <Base>
            <Container className='mt-4'>
                <Link to="/">Home</Link> / {post && (<Link to="">{post.title}</Link>)}
                <Row>
                    <Col md={{ size: 12 }}></Col>
                    <Card className='mt-3'>
                        {post && (
                            <CardBody>
                                <CardText>
                                    Posted by <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
                                </CardText>
                                <CardText className='mt-3 text-muted'>
                                    <span>{post.category.categoryTitle}</span>
                                </CardText>
                                <div className="divider" style={{
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: '#e2e2e2'
                                }}>
                                </div>
                                <div className='mt-3'>
                                    <h1>{post.title}</h1>
                                </div>
                                <div className="image-Container mt-3" style={{ maxWidth: "50%" }}>
                                    {imageURL ? (
                                        <img className='img-fluid' src={imageURL} alt="Post" />
                                    ) : (
                                        <p>Loading image...</p>
                                    )}
                                </div>
                                <CardText className='mt-4' dangerouslySetInnerHTML={{ __html: post.content }}>
                                </CardText>
                            </CardBody>
                        )}
                    </Card>
                </Row>

                <Row>
                    <Col md={{ size: 9, offset: 1 }}>
                        <h3 className='mt-4'>Comments ({post ? post.comments.length : 0})</h3>
                        {post && post.comments && post.comments.length > 0 ? (
                            post.comments.map((comment, index) => (
                                <Card className='mt-3 mb-1' key={index}>
                                    <CardBody>
                                        <CardText>
                                            <b>{comment.content}</b> -- by {comment.username}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            ))
                        ) : (
                            <p>No comments available</p>
                        )}

                        <Card className='mt-3 mb-1'>
                            <CardBody>
                                <Input type="textarea" placeholder='Enter comment here' value={comment.comment} onChange={(event) => setComment({ comment: event.target.value })} />
                                <Button onClick={submitPost} className='mt-3' color='primary'>Submit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
}

export default PostPage;
