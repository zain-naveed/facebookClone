import React from 'react';
import './css/header.css';
import {Search,Home,Flag,Subscriptions,StorefrontOutlined,SupervisedUserCircle, Add, NotificationsActive, Forum, ExpandMore} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
function Header(){
    return  <div className="header">
    <div className="header_left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
   alt="image not found" />
    <div className="header_input">
        <Search />
        <input type="text" placeholder="Search Facebook" />
    </div>
    </div>
    <div className="header_center">
        <div className="header_option header_option_active">
            <Home fontSize="large" />
        </div>
        <div className="header_option">
            <Flag fontSize="large" />
        </div>
        <div className="header_option">
            <Subscriptions fontSize="large" />
        </div>
        <div className="header_option">
            <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
            <SupervisedUserCircle fontSize="large" />
        </div>
    </div>
    <div className="header_right">
        <div className="header_info">
            <Avatar src="https://scontent.flhe6-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.1.40.40a/p40x40/98363888_2739957102894826_5307659836379365376_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=fVruebvGPhEAX-Ar7CU&_nc_ht=scontent.flhe6-1.fna&_nc_tp=27&oh=a8f2081d1976aa554a4f0704080313e8&oe=5F99F61A" />
            <h4>Zain Naveed</h4>
        </div>
        <IconButton>
            <Add />
        </IconButton>
        <IconButton>
            <Forum />
        </IconButton>
        <IconButton>
            <NotificationsActive />
        </IconButton>
        <IconButton>
            <ExpandMore />
        </IconButton>
    </div>
    
    </div>
}
export default Header;