import React from 'react';
//import { Link } from 'react-router-dom';

import { Form, Row, Col, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;

//const Search = Input.Search;

export default class AppWrapper extends React.Component {
   constructor(params) {
		super(params);
        this.onclick = this.onclick.bind(this);

	}
  onclick(value)
  {

            //alert("asd");
		     let path = 'list';
             this.props.history.push(path);

	}


  render() {
    return (
              <Row>
                 <Col span={8}></Col>
                 <Col span={8}>
                            <FormItem label='Searchbox'>
                                 <Input
                                  style={{height: '35px'}}
                                  size="large"
                                  addonAfter={
                                    <Icon type="check-circle"
                                              onClick={ this.onclick }
                                        style={{backGround: 'Blue'}}
                                    />
                                  }
                                />
                             </FormItem>

                 </Col>
                 <Col span={8}> </Col>
               </Row>
            )
  }
}