import React, { useState } from 'react';
import Base from "../components/base";
import { Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";
import { toast } from 'react-toastify';
import { loginUser } from '../services/user-service';
import { doLoggedIn } from '../Auth';
import { useNavigate } from 'react-router-dom';

// export const currentUserId = 402;
const Login = () => {
  const navigate = useNavigate();

  const [loginDetail,setLoginDetail] = useState({
    email:'',
    password:'',
    role:'USER'
    
  })

  const handleChange=(event,field)=>{
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue
    })
  }

  const handleReset=()=>{
    setLoginDetail({
      email: '',
      password: ''
    })
  };

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log(loginDetail);

    //validation
    if(loginDetail.email=='' || loginDetail.password==''){
      toast.error("please enter necessary details !!");
    }
    
    //submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{  //jwtTokenData
      console.log("User logged in successfully !!");
      console.log("server respone "+JSON.stringify(data));
      // currentUserId = data.id;
      // export const currentUserId = data.
      toast.success("User logged in successfully !!");


      //saving data to local storage
      doLoggedIn(data,()=>{
        console.log("data saved successfully in local storage");

        // redirect to user dashboard page
        navigate("/user/dashboard")

      })

    }).catch((error)=>{
      console.log("Error : " + error);
      toast.error("Somethong went wrong on server");
    });
  }

  return (
    <div style={{
      backgroundImage: 'url(https://i.gifer.com/BXNA.gif)',
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
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader><h3>Login here!</h3></CardHeader>
                <CardBody>
                  {/* creating form */}
                  <Form onSubmit={handleFormSubmit}>
                    {/* email field */}
                    <FormGroup>
                      <Label for='email'>Enter Email</Label>
                      <Input
                        type='email'
                        placeholder="Enter here"
                        id='email'
                        value={loginDetail.email}
                        onChange={(e)=>{handleChange(e,"email")}}
                        />
                    </FormGroup>

                    {/* password field */}
                    <FormGroup>
                      <Label for='password'>Enter Password</Label>
                      <Input
                        type='password'
                        placeholder="Enter here"
                        id='password'
                        value={loginDetail.password}
                        onChange={(e)=>{handleChange(e,"password")}}
                        />
                    </FormGroup>

                    <Container className="text-center">
                      <Button color="success" >Login</Button>
                      <Button type="reset" onClick={handleReset} color="dark" outline className="ms-2">Reset</Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
