import React, { Component } from 'react';
import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/FormAction';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

class Login extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata:{
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
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'login');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'login');
        let formIsValid = isFormValid(this.state.formdata,'login')

        if(formIsValid){
            this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
                if(response.payload.loginSuccess){
                    console.log(response.payload);
                    this.props.history.push('/admin/add_product')
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });

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
      <h1 className="text-center mb-3">  Login</h1>
      <form  onSubmit={(event)=> this.submitForm(event)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
                         <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=> this.updateForm(element)}
                     />
           </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=> this.updateForm(element)}
                     />
        </div>
                        { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
                    <button className="btn btn-primary btn-block" onClick={(event)=> this.submitForm(event)}>
                        Log in
                    </button>
      </form>
      <p className="lead mt-4">
        No Account? <a href="/register">Register</a>
      </p>
    </div>
  </div>
</div>
             </div>
        );
    }
}

export default connect()(withRouter(Login));

// import React, { Component } from 'react';


// import { Link } from 'react-router-dom';

// import { addUser } from '../../actions/user_actions';
// import { connect } from 'react-redux'


// class Login extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       message: ''
//     };
//   }
//   onChange = (e) => {
//     const state = this.state
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     const { username, password } = this.state;

//     var options = {
//       method: 'POST',
//       body: JSON.stringify({ username: this.state.username, password:this.state.password }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
      
//     }
//     fetch('http://localhost:3002/login', options)
//     .then((res) => res.json())

//     .then((message) =>{localStorage.setItem('user', JSON.stringify(message.user));
//     var user=JSON.parse(localStorage.getItem('user'));
//  if(user!==null){
//         this.props.dispatch(addUser(user));}
//       console.log(message.user);
//       this.props.history.push('/dashboard')
//     })
//     .catch(() => {
// this.setState({message:'Username and Password are Incorrect'})
//     })
//   }

//   render() {
//     const { username, password, message } = this.state;
//     return (
//       <div class="container">
//         <form class="form-signin" onSubmit={this.onSubmit}>
//           {message !== '' &&
//             <div class="alert alert-warning alert-dismissible" role="alert">
//               { message }
//             </div>
//           }
//           <h2 class="form-signin-heading">Please sign in</h2>
//           <label for="inputEmail" class="sr-only">Email address</label>
//           <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
//           <label for="inputPassword" class="sr-only">Password</label>
//           <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
//           <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
//           <p>
//             Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect()(Login);