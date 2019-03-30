import React, { Component } from 'react';
import { Form, FormGroup,Input,Label,Button } from 'reactstrap';
import axios from 'axios';
// import { Button } from '@material-ui/core';

class Contact extends Component {
    constructor(){
        super();

        this.state={
            name:'',
            email:'',
            message:'',
            error:'',
            sucess:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const {name,email,message} = this.state;
        if(!name && !email &&  !message){
            this.setState({
                error:"Please Fill All Fields",
                sucess:''
            })
        }
        else{
            this.setState({
                error:"",
                sucess:'Email Sucessfully Sent.'
            })
            axios.post('/api/form',{
                name,
                email,
                message
            })

        }

    }

    render() {
        return (
            <div className="container">
            <h1>Contact Us</h1>
                <Form onSubmit={this.handleSubmit} style={{width:'50%',align:'center'}}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <p style={{color:'red'}}>{this.state.error}</p>
                    <p style={{color:'green'}}>{this.state.sucess}</p>
                    <Button>Submit</Button>
                </Form>
                
            </div>
        );
    }
}

export default Contact;