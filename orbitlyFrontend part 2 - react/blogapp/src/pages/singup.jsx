import { useEffect, useState } from "react";
import Base from "../components/base";
import { Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Container,Row,Col} from "reactstrap";
import { singUp } from "../services/user-service";
import {toast } from 'react-toastify';

const Signup = () => {

    const [data,setData] = useState({
        user_name:'',
        email:'',
        password:'',
        about:'',
        role:'USER'
    });
    const [error,setError] = useState({
        errors:{},
        isError : false
    });

    const handleChange = (event,property) =>{
        setData({...data,[property]:event.target.value})
    }

    // useEffect(()=>console.log(data),[data])

    const resetData=()=>{
        setData(
            {
                user_name:'',
                email:'',
                password:'',
                about:'',
            }
        )
    }
    
    
    //submit user details
    const submitForm = (event)=>{
        event.preventDefault();
        console.log(data);
        
        // if(error.isError){
        //     toast.error("Error occurred !!");
        //     return;
        // }
        //validate data
        
        //call to server
        if(data.user_name!='' && data.email!='' && data.password!=''){
            singUp(data).then((resp)=>{
                console.log(resp);
                console.log("success");
                toast.success(`${data.user_name} has registered successfully !!`);
                setData(
                    {
                        user_name:'',
                        email:'',
                        password:'',
                        about:'',
                    }
                )
            }).catch((error)=>{
                console.log(error);
                console.log("failure");
                toast.error("Error occurred !!");
                setError(()=>{
                    errors:error;
                    error.isError = true;
                })
            });
        }
        else{
            console.log("please enter necessary details");
            toast.error("please enter necessary details !!");
        }
    }
    
    
    return (
        <div style={{
            backgroundImage: 'url(https://i.gifer.com/hFU.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Base />
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>

            <Container>
\w
                <Row className="mb-3">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card >
                            <CardHeader><h3>Fill the information to register!</h3></CardHeader>
                            <CardBody>

                                {/* creating form */}
                                <Form onSubmit={submitForm}>
                                    {/* name field */}
                                    <FormGroup>
                                        <Label for='user_name'>Enter User Name</Label>
                                        <Input
                                            type='text'
                                            placeholder="Enter here"
                                            id='user_name'
                                            onChange={(e)=>handleChange(e,"user_name")}
                                            value={data.user_name}
                                            />
                                    </FormGroup>

                                    {/* email field */}
                                    <FormGroup>
                                        <Label for='email'>Enter Email</Label>
                                        <Input
                                            type='email'
                                            placeholder="Enter here"
                                            id='email'
                                            onChange={(e)=>handleChange(e,"email")}
                                            value={data.email}
                                            />
                                    </FormGroup>

                                    {/* password field */}
                                    <FormGroup>
                                        <Label for='password'>Enter Password</Label>
                                        <Input
                                            onChange={(e)=>handleChange(e,"password")}
                                            type='password'
                                            placeholder="Enter here"
                                            id='password'
                                            value={data.password}
                                            />
                                    </FormGroup>

                                    {/* about field */}
                                    <FormGroup>
                                        <Label for='about'>Enter About</Label>
                                        <Input
                                            type='textarea'
                                            placeholder="Enter here"
                                            id='about'
                                            style={{ height: '65px' }}
                                            onChange={(e)=>handleChange(e,"about")}
                                            value={data.about}
                                            />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="success" >Register</Button>
                                        <Button type="reset" color="dark" outline  className="ms-2" onClick={resetData}>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>

            </div>
            </div>
    )
}

export default Signup;


