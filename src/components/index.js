import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import './header.css';


class Header extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			
			<Menu mode='horizontal'>
				<Menu.Item key="0">
				<Icon type="aliwangwang" />
					home
				</Menu.Item>

				<Menu.Item key="2">
                <Icon type="qq" />
					blog
				</Menu.Item>	

				<Menu.Item key="3">
                <Icon type="yuque" />
					Gallery
				</Menu.Item>

				<Menu.Item key="4">
                <Icon type="crown" />
					help
				</Menu.Item>		
				</Menu>	
		)
	}
}
export default Header
