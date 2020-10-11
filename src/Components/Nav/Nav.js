import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import './nav.css';


class Nav extends Component {

    render(props){
        return(
            <div className='nav-bar'>
                {/* <p>{props.username}</p>
                <img 
                    className='profile-picture'
                    // src={this.props.user.profile_picture}
                    alt='profile pic'/>
                <div>{this.props.user.profile_picture}</div> */}
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
                
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);
