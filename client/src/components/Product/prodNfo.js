import React from 'react';

const ProdNfo = (props) => {

    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price"><i className="fas fa-dollar-sign"></i> { detail.price }</div>
            <div className="cart">
                {/* <MyButton
                    type="add_to_cart_link"
                    runAction={()=>{
                    //    props.addToCart(detail._id)
                    console.log("add to cart")
                    }} */}
                {/* /> */}
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product_specifications">
            <h2>Specifications:</h2>
            <div>
                <div className="item">
                    <strong><i className="fab fa-android"></i> OS : </strong> {detail.os}
                </div>
                <div className="item">
                    <strong><i className="fas fa-microchip"></i>  Processor : </strong> {detail.processor}
                </div>
                <div className="item">
                    <strong><i className="fas fa-mobile"></i>  Display : </strong> {detail.display}
                </div>
                <div className="item">
                    <strong><i className="fas fa-sd-card"></i> Memory : </strong> {detail.memory}
                </div>
                <div className="item">
                    <strong><i className="fas fa-eye"></i> Camera : </strong> {detail.camera}
                </div>
                <div className="item">
                    <strong><i className="fab fa-google-play"></i> Frequency : </strong> {detail.frequency}
                </div>
            </div>
        </div>
    )

    const detail = props.detail;
    return (
            <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            { showProdActions(detail)}
            { showProdSpecifications(detail)}
            </div>

    );
};

export default ProdNfo;;