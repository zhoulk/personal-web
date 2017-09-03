import React, {Component} from 'react'
import {browserHistory} from 'react-router'

import {Menu} from 'antd'

class HeadView extends Component{

    _handlerMenu(e){
        console.log(e);
        switch (e.key){
            case "1":
            {
                let path = `/`
                browserHistory.push(path)
            }
                break;
            case "2":
            {
                console.log('post')
                let path = `/post`
                browserHistory.push(path)
            }
                break;
            default:
                break;
        }
    }
    
    render(){
        return(
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick={this._handlerMenu}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">文章</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default HeadView;