import React, { Component } from 'react';


import { Menu, Dropdown, message } from "antd";

import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export const showMessage = (title, type = "success", duration = 3) => {
	message[type](title, duration);
};

class MagicComponent extends Component {
	constructor(params) {
		super(params);
        this.someValidPath="";
		this.getOverlay = this.getOverlay.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	componentDidMount() {

	}

	handleMenuClick(e) {
		if (e.item.props.value === "yellow") {
			showMessage("Yellow pressed", "success");
		}
	}

	getOverlay() {
		return (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="0" value={"yellow"}>
					Yellow item
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="1" value={"black"}>Black item</Menu.Item>
			</Menu>


		)
	}

	render() {
		return (
			<div>
				<Dropdown overlay={this.getOverlay()} trigger={['click']}>
					<a href={this.someValidPath} className="ant-dropdown-link" style={{ display: "flex", alignItems: "center" }}> Click me </a>
				</Dropdown>
				  <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                              title={<a href="https://ant.design">{item.title}</a>}
                              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                          </List.Item>
                        )}
                      />
             </div>
		)
	}

}

export default MagicComponent;