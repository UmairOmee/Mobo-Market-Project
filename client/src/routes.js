import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index'
// import App from './App'
import RegisterLogin from './components/Register_login'
import Register from './components/Register_login/register'
import UserDashboard from './components/User'
import Welcome from './components/Register_login/Welcome'
import Shop from './components/Shop';
// import Auth from './hoc/auth'
import Layout from './hoc/layout'
import AddProduct from './components/User/Admin/add_product';
import ProductPage from './components/Product';
import PageNotFound from './components/utils/page_not_found'
import ManageCategories from './components/User/Admin/manage_categories'
import ContactUs from './components/Contact/contact'
// import ManageSite from './components/User/Admin/update_site_nfo';
import About from './components/About/about'


const Routes = () => {
  return (
      <div>
        <Layout>
    <Switch>
      <Route path="/about" exact component={About}/>
      {/* <Route path="/admin/site_info" exact component={ManageSite}/> */}
      <Route path="/contactus" exact component={ContactUs}/>
      <Route path="/admin/manage_categories" exact component={ManageCategories}/>
      <Route path="/product_detail/:id" exact component={ProductPage}/>
      <Route path="/admin/add_product" exact component={AddProduct}/>
      <Route path="/user/dashboard" exact component={UserDashboard}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/register_login" exact component={RegisterLogin}/>
      <Route path="/welcome" exact component={Welcome}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/" exact component={Home}/>
      <Route component={PageNotFound}/>
      
    </Switch>
    </Layout>  
      </div>
  );
};

export default Routes;