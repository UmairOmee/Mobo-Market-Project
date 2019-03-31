import React, { Component } from 'react';
import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/FormAction';
import Dialog from '@material-ui/core/Dialog';
import UserIcon from '../icons/UserIcon'

import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions';

class Register extends Component {

    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation:{
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response =>{ 
                if(response.payload.success){
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(()=>{
                        this.props.history.push('/register_login');
                    },3000)
                    console.log("success");
                } else {
                    this.setState({formError: true})
                }
            }).catch(e => {
                this.setState({formError: true})
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
<div>       
<div className="row mt-5">
  <div className="col-md-6 m-auto">
    <div className="card card-body">
      <h1 className="text-center mb-3">
      <UserIcon/>
        Register
      </h1>
      <form  onSubmit={(event)=>  this.submitForm(event)} >
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={(element)=> this.updateForm(element)}
                />
           
        </div>

        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <FormField
                id={'lastname'}
                formdata={this.state.formdata.lastname}
                change={(element)=> this.updateForm(element)}
                />
           
        </div>
     

          <div className="form-group">
          <label htmlFor="name">Email</label>
          <FormField
                id={'email'}
                formdata={this.state.formdata.email}
                change={(element)=> this.updateForm(element)}
                />
           
        </div>
      

          <div className="form-group">
          <label htmlFor="name">Password</label>
          <FormField
                id={'password'}
                formdata={this.state.formdata.password}
                change={(element)=> this.updateForm(element)}
                />
           
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <FormField
                id={'confirmPassword'}
                formdata={this.state.formdata.confirmPassword}
                change={(element)=> this.updateForm(element)}
                />
           
        </div>
        
        <div>
            { this.state.formError ?
            <div className="error_label">
            Please check your data
            </div>
            :null}
            <button className="btn btn-primary btn-block" onClick={(event)=> this.submitForm(event)}>
            Create an account
            </button>
            </div>
      </form>
      <p className="lead mt-4">Have An Account? <a href="/register_login">Login</a></p>
    </div>
  </div>
  
</div>

<Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>Congratulations !!</div>
                        <br/>
                        <div>
                            You will be redirected to the 
                            <br/>
                            LOGIN in a couple seconds...
                        </div>
                    </div>
                </Dialog>
</div>
        );
    }
}

export default connect()(Register);

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { addUser } from '../../actions/user_actions'

// class Register extends Component {

//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       fullname:''
//     };
//   }
//   onChange = (e) => {
//     const state = this.state
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//   }


// onSubmit = (e) => {
//   e.preventDefault();

//   const { email, password } = this.state;

// var options1 = {
//   method: 'POST',
//   body: JSON.stringify({fullname: this.state.fullname, email: this.state.email, password:this.state.password }),
//   headers: {
//       'Content-Type': 'application/json'
//   }

// }
// fetch('http://localhost:3002/register', options1)
//   .then((res) => res.json())
//   .then((message) =>{
//     const {success,user}=message;
//   if(success===true){
//     var options2 = {
//       method: 'POST',
//       body: JSON.stringify({ username:user.email, password:user.password }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
      
//     }
//     fetch('http://localhost:3002/login', options2)
//     .then((res) => res.json())

//     .then((message) =>{localStorage.setItem('user', JSON.stringify(message.user));
//     var user=JSON.parse(localStorage.getItem('user'));
//  if(user!==null){
//         this.props.dispatch(addUser(user));}
//       console.log(message.user);
//       this.props.history.push('/dashboard')
//     })
//     .catch(() => {
//     })
//   }
  
//  })
//   .catch((error) => console.log(error))

// }
//   render() {
//     const { email, password,fullname } = this.state;
//     return (
//       <div class="container">
//         <form class="form-signin" onSubmit={this.onSubmit}>
//           <h2 class="form-signin-heading">Register</h2>
//           <label for="inputText" class="sr-only">Full Name</label>
//           <input type="text" class="form-control" placeholder="Full Name" name="fullname" value={fullname} onChange={this.onChange} required/>
//           <label for="inputEmail" class="sr-only">Email address</label>
//           <input type="email" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
//           <label for="inputPassword" class="sr-only">Password</label>
//           <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
//           <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect()(Register);