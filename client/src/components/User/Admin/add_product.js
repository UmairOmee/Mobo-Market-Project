import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';

import FormField from '../../utils/Form/formfield';
import { update, populateOptionFields,generateData,isFormValid,resetFields } from '../../utils/Form/FormAction';
import FileUpload from '../../utils/Form/fileupload';

import { connect } from 'react-redux';
import { getBrands ,addProduct, clearProduct } from '../../../actions/products_actions';


class AddProduct extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    label: 'Product name',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            description: {
                element: 'textarea',
                value: '',
                config:{
                    label: 'Product description',
                    name: 'description_input',
                    type: 'text',
                    placeholder: 'Enter your description'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            price: {
                element: 'input',
                value: '',
                config:{
                    label: 'Product price',
                    name: 'price_input',
                    type: 'number',
                    placeholder: 'Enter your price'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            brand: {
                element: 'select',
                value: '',
                config:{
                    label: 'Product Brand',
                    name: 'brands_input',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },           
            os: {
                element: 'input',
                value: '',
                config:{
                    label: 'OS',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Product OS'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            processor: {
                element: 'input',
                value: '',
                config:{
                    label: 'Processor',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Product Processor'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            display: {
                element: 'input',
                value: '',
                config:{
                    label: 'Display',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Product Display'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            memory: {
                element: 'input',
                value: '',
                config:{
                    label: 'Memory',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Product Memory'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            camera: {
                element: 'input',
                value: '',
                config:{
                    label: 'Camera',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Product Camera'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },

            images:{
                value:[],
                validation:{
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage:'',
                showlabel: false
            }
        }
    }


    updateFields = (newFormdata) => {
        this.setState({
            formdata: newFormdata
        })
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'products');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata,'products');

        this.setState({
            formdata: newFormData,
            formSuccess:true
        });
        setTimeout(()=>{
            this.setState({
                formSuccess: false
            }
            ,()=>{
                this.props.dispatch(clearProduct())
            }
            )
        },3000)
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'products');
        let formIsValid = isFormValid(this.state.formdata,'products')

        if(formIsValid){
            this.props.dispatch(addProduct(dataToSubmit)).then(()=>{
                if( this.props.products.addProduct.success){
                    this.resetFieldHandler();
                
                }else{
                    this.setState({formError: true})
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }


    componentDidMount(){
        const formdata = this.state.formdata;

        this.props.dispatch(getBrands()).then( response => {
            const newFormData = populateOptionFields(formdata,this.props.products.brands,'brand');
            this.updateFields(newFormData)
        })
    }

    imagesHandler = (images) => {
        const newFormData = {
            ...this.state.formdata
        }
        newFormData['images'].value = images;
        newFormData['images'].valid = true;

        this.setState({
            formdata:  newFormData
        })
    }

    render() {
        return (
            <UserLayout>
                <div>
                    <h1>Add product</h1>
                    
                    <form onSubmit={(event)=> this.submitForm(event)}>

                        <FileUpload
                            imagesHandler={(images)=> this.imagesHandler(images)}
                            reset={this.state.formSuccess}
                        />

                        <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element) => this.updateForm(element)}
                        />

                         <FormField
                            id={'description'}
                            formdata={this.state.formdata.description}
                            change={(element) => this.updateForm(element)}
                        />

                         <FormField
                            id={'price'}
                            formdata={this.state.formdata.price}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'brand'}
                            formdata={this.state.formdata.brand}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'os'}
                            formdata={this.state.formdata.os}
                            change={(element) => this.updateForm(element)}
                        />

                         <FormField
                            id={'processor'}
                            formdata={this.state.formdata.processor}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'memory'}
                            formdata={this.state.formdata.memory}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'display'}
                            formdata={this.state.formdata.display}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'camera'}
                            formdata={this.state.formdata.camera}
                            change={(element) => this.updateForm(element)}
                        />

                        {this.state.formSuccess ?
                            <div className="form_success">
                                Success
                            </div>
                        :null}

                        {this.state.formError ?
                            <div className="error_label">
                                Please check your data
                                        </div>
                            : null}
                            <button type="button" onClick={(event) => this.submitForm(event)} className="btn btn-primary">
                            Add product
                            </button>
                        {/* <button onClick={(event) => this.submitForm(event)}>
                            Add product
                        </button> */}


                    </form>

                </div>
            </UserLayout>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(AddProduct);