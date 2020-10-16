import React, {Component} from 'react';
import store from '../../ducks/store';
import axios from 'axios';
import { connect } from 'react-redux' ;
import { Link } from 'react-router-dom';
import noImage from './no_image.jpg'



class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            img: '',
            content: '',
            newPost: { }
        }
    }


    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        const newPost = this.state
        console.log('sending new post', newPost);
    }  
      createPost = () => {  
        const {title, img, content}=this.props
        axios
          .post( '/api/post', {title, img, content} )
          .then(() => {
              
              this.setState({newPosts: {title, img, content}});
          })  
          .catch( error => console.log(error));
    }

    render(){
        let imgSrc = this.state.img ? this.state.img : noImage;
        return(
            <div className="Form">
                <div className="form-content_box">
                    <h1 className="title">New Post</h1>
                    <input onChange={ e => this.handleInput(e)} className="form-input" type="text" name="title" placeholder="Enter Post Title" />
                    {/* <img className="form_img_prev" src={this.state.img} alt="Not Found"/> */}
                    <div className="form_img_prev" style={{ backgroundImage: `url('${imgSrc}')`}} alt='preview'></div>
                    <input onChange={ e => this.handleInput(e)} className="form-input" type="text" name="img" placeholder="Enter Post Image URL" />
                    <textarea onChange={ e => this.handleInput(e)} className="form-textarea" type="text" name="content" placeholder="Enter Post Content" rows="40" cols="50" />
                    <Link to="/dashboard">
                        <button onClick={this.createPost} className="form-post-button">Post</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Form);