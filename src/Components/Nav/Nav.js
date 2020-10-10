import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import './nav.css';


class Nav extends Component {

    render(){
        return(
            <div className='nav-bar'>
                <div>{this.props.user.username}</div>
                <img 
                    className='profile-picture'
                    src={this.props.user.profile_picture}
                    alt={this.props.user.username}/>
                {/* <div>{this.props.user.profile_picture}</div> */}
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
                
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);
