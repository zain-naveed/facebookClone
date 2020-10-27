import React from 'react';
import SidebarRow from './sidebarRow';
import './css/sidebar.css';
import { LocalHospital, EmojiEmotions, EmojiFlags, People, Chat, Storefront, VideoLibrary, ExpandMoreOutlined } from '@material-ui/icons';


function Sidebar(){
    return <div className="sidebar">
    <SidebarRow src="https://scontent.flhe6-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.1.40.40a/p40x40/98363888_2739957102894826_5307659836379365376_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=fVruebvGPhEAX-Ar7CU&_nc_ht=scontent.flhe6-1.fna&_nc_tp=27&oh=a8f2081d1976aa554a4f0704080313e8&oe=5F99F61A" title="Zain Naveed"  />
    <SidebarRow 
    Icon={LocalHospital}
    title="COVID-19 Information Center" />
    <SidebarRow Icon={EmojiFlags} title="Pages" />

    <SidebarRow Icon={People} title="Friends" />
    <SidebarRow Icon={Chat} title="Messenger" />
    <SidebarRow Icon={Storefront} title="MarketPlace" />
    <SidebarRow Icon={VideoLibrary} title="Videos" />
    <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
}
export default Sidebar;