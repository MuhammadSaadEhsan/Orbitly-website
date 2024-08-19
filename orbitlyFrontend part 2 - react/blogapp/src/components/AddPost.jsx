// import { Button } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
// import { Form } from 'react-router-dom'
import { Card, CardBody, Container, Button, Form, Input, Label } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import JoditEditor from 'jodit-react';
import { json } from 'react-router-dom';
import { createPost as doCreatePost, uploadPostImage } from '../services/post-service';
import { getCurrentUserDetail } from '../Auth';
import { toast } from 'react-toastify';

function AddPost() {

    const editor = useRef(null);
    // const [content,setContent] = useState("");

    const [categories, setCategories] = useState([])
    const [user,setUser] = useState(undefined)

    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    })

    const [image, setImage] = useState(null);

    useEffect(
        () => {
            setUser(getCurrentUserDetail());
            loadAllCategories().
                then(data => { console.log(data); setCategories(data) }).
                catch(err => console.log(err))
        },
        []
    )

    //field changed fucntion
    const onFieldChange = (event) => {
        setPost({
            ...post, [event.target.name]: event.target.value
        })

        // console.log(event.target.name  + ':' + event.target.value)
    }

    const contentFieldChanged = (data) => {
        setPost({
            ...post, "content": data
        })
    }

    const createPost = event => {
        event.preventDefault();
        // console.log(post);

        if(post.title.trim() == ''){
            toast.warning('Title of post is required');
            return;
        }
        if(post.content.trim() == ''){
            toast.warning('content of post is required');
            return;
        }
        if(post.categoryId.trim() == ''){
            toast.warning('please select a category');
            return;
        }

        //submit the form on server
        post["userId"] = user.id;
        doCreatePost(post).then((data) => {
            console.log(`your data ${data.postId}`);
            uploadPostImage(image, data.postId).then((data) => {
                toast.success('Image uploaded Successfully');
            }).catch((error) => {console.log(error)});

            toast.success('Post Created Successfully');
            // console.log(post);
        }).catch(err => {
            toast.error('Error');
            console.log(err);
        });
    }

    //handleFileChange
    const handleFileChange = (event) =>{
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    return (
        <div className='wrapper'>
            <Card className='shadow-sm mt-4'>
                <CardBody>
                    {/* {JSON.stringify(post)} */}
                    <h3>What's on your mind?</h3>
                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="title">Post Title</Label>
                            <Input id="title" placeholder="Enter here"
                                name='title'
                                onChange={onFieldChange}
                                type="text" />
                        </div>
                        <div className="my-3">
                            <Label for="content">Post Content</Label>
                            {/* <Input id="content" placeholder="Enter here" type="textarea"
                                style={{ height: "150px" }}
                            /> */}

                            <JoditEditor

                                ref={editor}
                                value={post.content}
                                // onChange = {newContent => setContent(newContent)}
                                onChange={contentFieldChanged}

                            />
                        </div>


                        {/* file field*/}
                        <div className="mt-3">
                            <Label for='image'>Select Image</Label>
                            <Input id='image' type='file' onChange={handleFileChange}/>
                        </div>


                        <div className="my-3">
                            <Label for="category">Post Category</Label>
                            <Input id="category" placeholder="Enter here" type="select"
                                name='categoryId'
                                onChange={onFieldChange}
                                defaultValue={0}
                            // style={{height: "250px"}}
                            >
                                <option disabled value={0}>-- Select Category --</option>
                                {
                                    categories.map((category) =>
                                    (<option value={category.categoryId} key={category.categoryId}>
                                        {category.categoryTitle}
                                    </option>)
                                    )
                                }

                            </Input>
                        </div>

                        <Container className="text-center">
                            <Button type='submit' color="primary">Create Post</Button>
                            <Button className="ms-2" color="danger" type='reset'>Reset</Button>
                        </Container>
                    </Form>
                    {/* {content} */}
                </CardBody>
            </Card>
        </div>
    )
}

export default AddPost