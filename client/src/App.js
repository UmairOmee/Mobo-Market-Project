import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import  NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './images/logo2.png'
import { logoutUser } from './actions/user_actions';




class App extends Component {
  
  state = {
    page:[
        {
            name:'Home',
            linkTo:'/',
            public: true
        },
        {
            name:'Guitars',
            linkTo:'/shop',
            public: true
        }
    ],
    user:[
        {
            name:'My Cart',
            linkTo:'/user/cart',
            public: false
        },
        {
            name:'My Account',
            linkTo:'/user/dashboard',
            public: false
        },
        {
            name:'Log in',
            linkTo:'/register_login',
            public: true
        },
        {
            name:'Log out',
            linkTo:'/user/logout',
            public: false
        },
    ]
}


logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(response =>{
        if(response.payload.success){
            this.props.history.push('/')
        }
    })
}


cartLink = (item,i) => {
    const user = this.props.user.userData;

    return (
        <div className="cart_link" key={i}>
            <span>{user.cart ? user.cart.length:0}</span>
            <Link to={item.linkTo}>
                {item.name}
            </Link>
        </div>
    )
}


defaultLink = (item,i) => (
    item.name === 'Log out' ?
        <div className="log_out_link"
            key={i}
            onClick={()=> this.logoutHandler()}
        >
            {item.name}
        </div>

    :
    <Link to={item.linkTo} key={i}>
        {item.name}
    </Link>
)


showLinks = (type) =>{
    let list = [];

    if(this.props.user.userData){
        type.forEach((item)=>{
            if(!this.props.user.userData.isAuth){
                if(item.public === true){
                    list.push(item)
                }
            } else{
                if(item.name !== 'Log in'){
                    list.push(item)
                }
            }
        });
    }

    return list.map((item,i)=>{
        if(item.name !== 'My Cart'){
            return this.defaultLink(item,i)
        } else {
            return this.cartLink(item,i)
        }
        
    })
}

  render() {
    var style = {
        backgroundColor: "#275fa5",
      };
    return (

    <div>
<Navbar  expand="lg" style={style} variant="dark" className="container-fluid sticky-top">
  <Navbar.Brand href="#home"><img src={logo} alt="logo" height="50px"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/shop">Categories</Nav.Link>
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/register">Admin</Nav.Link>
      
      
      {/* <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        <NavDropdown.Item href="/register_login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/register_login">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
    {/* <Nav.Link href="/shop">Categories</Nav.Link> */}
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
  </div>


     
    
      
    )
  }
}
function mapStateToProps(state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(App));

