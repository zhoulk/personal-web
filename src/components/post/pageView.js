import React, {Component} from 'react'

import {Row} from 'antd'
import {Link} from 'react-router'

import PropTypes from 'prop-types'

import './pageView.css'

class PageView extends Component{
    render(){
        //console.log(this.props.items)
        return(
            <div>
                {
                    this.props.items.map((item, index)=>{
                        var path = {
                            pathname: '/post/detail',
                            state: item
                        }
                        return (
                            <div key={index}>
                                <Row type='flex' align='middle' justify='space-between' style={{padding: 10}}>
                                        <label className="pageView-title">{item.title}</label>
                                        <label className="pageView-time">{item.time}</label>
                                </Row>
                                <hr/>
                                <Row style={{padding: 10}}>
                                    <div className="pageView-p" dangerouslySetInnerHTML={{__html: item.pre}} />
                                </Row>
                                <div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center', padding: 10}}>
                                    <div><Link to={path}>more ...</Link></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

PageView.propTypes = {
    items: PropTypes.array
}

export default PageView;