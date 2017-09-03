import React, {Component} from 'react'

import {Avatar, Row, Col} from 'antd'

var birthday = new Date(1991,1,25,0,0,0);
var endDay = new Date(2051,1,25,0,0,0);

class Intro extends Component{

    constructor(props){
        super(props);
        this.state = {
            upSeconds: 0,
            downSeconds: 0
        }
    }

    componentDidMount(){
        this._timer  = setInterval(function() {
            var now = new Date();
            let offset = now.getTime() - birthday.getTime();
            let endOffset = endDay.getTime() - now.getTime();

            this.setState({
                upSeconds: Math.round(offset / 1000),
                downSeconds: Math.round(endOffset / 1000)
            });
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render(){
        return(
            <div style={{height:250, backgroundColor:'#eeeeee'}}>
                <Row>
                    <Col span="8" style={{height:250, display:'flex', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <label>+{this.state.upSeconds}秒</label>
                    </Col>
                    <Col span="8" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Row>
                            <Avatar style={{marginTop:44, width:88, height:88}} src="http://zhoulk-web-image.oss-cn-shenzhen.aliyuncs.com/lufy.jpg" />
                        </Row>
                        <Row style={{marginTop: 10}}>
                            <label>逝者如斯夫,不舍昼夜</label>
                        </Row>
                    </Col>
                    <Col span="8" style={{height:250, display:'flex', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <label>-{this.state.downSeconds}秒</label>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Intro;