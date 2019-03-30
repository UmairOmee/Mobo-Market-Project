import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';

class Fileupload extends Component {
  constructor(){
    super();
    this.state = {
        uploadedFiles:[],
        uploading:false
    }
}

  onDrop = (files) => {
       this.setState({uploading:true});
       let formData = new FormData();
       const config = {
           header: {'content-type':'multipart/form-data'}
       }
       formData.append("file",files[0]);

       axios.post('/api/users/uploadimage',formData,config)
       .then(response => {
            this.setState({
                uploading:false,
                uploadedFiles:[
                    ...this.state.uploadedFiles,
                    response.data
                ]
            },()=>{
                this.props.imagesHandler(this.state.uploadedFiles)
            })
       });
  }

      onRemove = (id) => {
        axios.get(`/api/users/removeimage?public_id=${id}`).then(response=>{
            let images = this.state.uploadedFiles.filter(item=>{
                return item.public_id !== id;
            });

            this.setState({
                uploadedFiles: images
            },()=>{
                this.props.imagesHandler(images)
            })
        })
    }

      showUploadedImages = () => (
        this.state.uploadedFiles.map(item=>(
            <div className="dropzone_box"
                key={item.public_id}
                onClick={()=> this.onRemove(item.public_id)}
            >
                <div 
                    className="wrap"
                    style={{background:`url(${item.url}) no-repeat`}}
                >
                </div>
            </div>
        ))
    )

        static getDerivedStateFromProps(props,state){
        if(props.reset){
            return state = {
                uploadedFiles:[]
            }
        }
        return null;
    }

  render() {
    return (
      //
      <div className="text-center mt-5">
        <Dropzone 
        multiple={false}
        className="dropzone_box"
        onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
              <div className="wrap">
                                <FontAwesomeIcon
                                className="fas fa-igloo fa-5x"
                                    icon={faPlusCircle}
                                />
                            </div>
            </div>
          )}
        </Dropzone>
        { this.showUploadedImages()}
                                {
                            this.state.uploading ?
                            <div 
                            className="dropzone_box" style={{
                                textAlign: 'center',
                                paddingTop: '60px'
                            }}
                            >
                                <CircularProgress
                                    style={{color:'#00bcd4'}}
                                    thickness={7}
                                />
                            </div>
                            :null
                        }
      </div>
    );
  }
}

export default Fileupload;