import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'Add Product',
        linkTo: '/admin/add_product'
    },
    {
        name: 'Add Brand',
        linkTo: '/admin/manage_categories'
    }
]

const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    )


    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My Admin</h2>
                    <div className="links">
                        { generateLinks(links)}
                    </div>
                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;