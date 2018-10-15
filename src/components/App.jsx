import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import Highcharts from 'highcharts';
//import HighchartsReact from 'highcharts-react-official'
import ReactHighcharts from 'react-highcharts';
import test_data from './data.csv' ;


import { Select } from 'antd';

const Option = Select.Option;


class App extends Component {

      state = { visible: false }


	constructor(params) {
		super(params);
        this.someValidPath="";
        this.handleChange = this.handleChange.bind(this);

	}

     componentWillReceiveProps(nextProps){
         const { value } = nextProps
         this.setData(value)

     }

    handleChange(val) {
          let chart = this.refs.chart.getChart();
        //chart.series[0].addPoint({x: 10, y: 12});

        // set up the updating of the chart each second
        var series = chart.series[0];
         chart.series[0].update({
             type: val
         });  
    
		       
    }
	
	
	handleEditChart(val) {
          let chart = this.refs.chart.getChart();
        //chart.series[0].addPoint({x: 10, y: 12});

        // set up the updating of the chart each second
        var col = [1,2,3,4];
		
		if (val == 'None') {
		
         chart.series[0].update({
            data : col
         }); 
		}
		
		if (val == 'Rebase') {
		var series = chart.series[0];
         chart.series[0].update({
            data : (function () {
                   // generate an array of random data
                        var data = [],
                     //   time = (new Date()).getTime(),
                          i;

                        for (i = 0; i <= 3; i += 1) {
                          data.push({
                         //   x: time + i * 1000,
                            y: col[i] *100
                          });
                        }
                        return data;
                      }())
         }); 
		}
		
		if (val == 'Ratio') {
		var series = chart.series[0];
         chart.series[0].update({
            data : (function () {
                   // generate an array of random data
                        var data = [],
                     //   time = (new Date()).getTime(),
                          i;

                        for (i = 1; i <= 3; i += 1) {
                          data.push({
                         //   x: time + i * 1000,
                            y: col[i] /col[i-1]
                          });
                        }
                        return data;
                      }())
			
         }); 
		}
		 
		}
		
    
		       
    
	
     setData(value){
         let chart = this.refs.chart.getChart();
         chart.series[0].update({
             data: value
         });
     }

	componentDidMount() {



	}

        handleMenuClick(e) {

        }
        showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }



	render() {
	    let config = {
    chart: {
        type: 'column'
    },
        
    title: {
        text: 'Fruit Consumption'
    },
    yAxis: {
        title: {
            text: 'Units'
        }
    },
	
	     series: [{name : 'bar1',
                  data: (function () {
                   // generate an array of random data
                        var data = [],
                     //   time = (new Date()).getTime(),
                          i;

                        for (i = 1; i <= 4; i += 1) {
                          data.push({
                         //   x: time + i * 1000,
                            y: i
							});
                        }
                        return data;
                      }())}  
					  ]
		}


        let charts = <ReactHighcharts neverReflow={true} config={config} ref="chart" > </ReactHighcharts>


		return (
			<div>
			  <Row>
                 <Col span={18}>
                   <Row >
                   {charts}
                     </Row>
                    <Row style={{marginTop:'50px'}}>
                       <Col span={4}>
                            Compare with:
                       </Col>
                       <Col span={4}>
                               <Button onClick={this.showModal}>Another serise</Button>

                       </Col>
                      <Col span={4}>
                              <Button onClick={this.showModal}>Another state</Button>

                       </Col>
                       <Col span={4}>
                              <Button onClick={this.showModal}>Another state</Button>

                       </Col>
                     </Row>
                      <Modal
                          title="Basic Modal"
                          visible={this.state.visible}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>Some contents...</p>

                        </Modal>
                 </Col>
                 <Col span={1}>
                 </Col>
                 <Col span={4}>
                     <Row>
                        Select chart type:
                        <Select defaultValue="bar" style={{ width: 120 }} onSelect={(value, event) => this.handleChange(value, event)} >
                          <Option value="line">line</Option>
                          <Option value="scatter">scatter</Option>
                          <Option value="bar">bar</Option>
                        </Select>
                     </Row>
                     <Row style={{marginTop:'50px'}}>
                       Edit Chart:
                        <Select defaultValue="None" style={{ width: 120 }} onSelect={(value, event) => this.handleEditChart(value, event)}>
                          <Option value="None">None</Option>
                          <Option value="Rebase">Rebase</Option>
                          <Option value="Ratio">Ratio</Option>
                        </Select>
                     </Row>
                     <Row style={{marginTop:'50px'}}>
                       Number State:
                        <Select defaultValue="lucy" style={{ width: 120 }} onSelect={(value, event) => this.handleChange(value, event)}>
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                     </Row>

                 </Col>
              </Row>
           </div>
		)
	}

}

export default App;