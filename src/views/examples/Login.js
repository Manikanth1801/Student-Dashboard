import React from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";
import Cryptr from "cryptr";
import * as Aes from 'aes-256-gcm';
import { transpile } from "typescript";




const Login = (props) => {
  const loginData = {
    EmailAddress: "",
    password:"",
  }
  const [LoginData, setLoginData] = useState(loginData);
      const history = useHistory();

  

  const{register, handleSubmit} = useForm();
  
  const[Auth, setAuth] = useState({
    isAuth:false,
    resEmail:"",
    resPass:"",
  });








  const handleInputChange = (e) =>{ 
     setLoginData({
       ...LoginData,
       [e.target.name]: e.target.value
     });
     console.log(LoginData.password);
  }
  
     

  const onSubmit = data =>{
    
    console.log(LoginData);
    axios({
      method:'POST',
      mode:'no-cors',
      url: 'http://localhost:4000/login',
      data:LoginData,
    }).then(res=> 
    {
        //users/authenticate/
        // if (res.data.token!=null){
        //   console.log(res.data.token)
          
        //  return <Link to = 'admin/index'/>  
        // }

        

        if(res){
          console.log(res.data.accesstoken)
          let token = res.data.accesstoken;
          let decoded = jwt_decode(token);
          
          localStorage.setItem('details', JSON.stringify(decoded));
          let temp = JSON.parse(localStorage.getItem('details'));
          console.log(temp._id);
          history.push(`/admin/index:`)
          
        
        }

      }).catch(
      err=>{
        alert("Not a member")
        console.log(err,"error---------")
      }
    )
    
  }

 


  // async function loginFun(){
  //   let result = await fetch("localhost:4000/login/",requestOptions);
  //   result = await result.json();
  //   if (result){
  //     console.log("hurrah!");
  //   }
    
  // }

  // if(localStorage.getItem('token')!=null){
  //   return <Redirect to = '/admin/index'/>
  // }
  // else{
    
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-1">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in here</small>
            </div>
            {/* single sign in */}
{/*             
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          */}
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            {/* <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div> */}
            < Form role = "form"
            onSubmit = {handleSubmit(onSubmit)} >
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  <Input
                    className = ""
                    placeholder="Email"
                    innerRef = {register}
                    type="email"
                    autoComplete="new-email"
                    pattern = "^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
                    require
                    onChange = {handleInputChange}
                    name = "EmailAddress"
                  />
                 
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className = ""
                    placeholder="Password"
                    style = {{border:"none", background:"none",}}
                    innerRef = {register}
                    type="password"
                    autoComplete="new-password"
                    required
                    onChange = {handleInputChange}
                    name = "password"
                  />                  
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                {/* <Link to = {routeVar}>  */}
                <Button
                 className="my-4" color="primary" type="submit"
                 role = "Link" to = "/index"
                 >
                  Sign in
                </Button>
                {/* </Link> */}
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            < Link to = '/auth/reset-password'
              className="text-light"
              href="#pablo"
              // onClick = {
              //   () => history.push('/auth/reset-password')
              // }
            >
              <small>Forgot password?</small>
            </Link>
          </Col>
          {/* <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col> */}
        </Row>
      </Col>
    </>
  );
  // }
};

export default Login;
