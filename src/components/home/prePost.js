import React, {Component} from 'react'

import {Row, Col} from 'antd'
import {Link} from 'react-router'

import './prePost.css'
import posts from  '../../posts/posts'

class PrePost extends Component{

    componentWillMount(){
        console.log(posts)
    }

    _handleClick(content){

    }

    _createFirstColView(){
        if(posts.length > 0){
            var path = {
                pathname: '/post/detail',
                state: posts[0]
            }
            return(
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:10}}>
                    <label className="prePost-title">{posts[0].title}</label>
                    <label className="prePost-time">{posts[0].time}</label>
                    <div className="prePost-content">
                        <div className="prePost-p" dangerouslySetInnerHTML={{__html: posts[0].pre}} />
                    </div>
                    <Link to={path} style={{alignSelf:'flex-end', marginTop:10, marginBottom:10}}>more...</Link>
                </div>
            )
        }
    }

    _createSecondColView() {
        if(posts.length > 1){
            var path = {
                pathname: '/post/detail',
                state: posts[1]
            }
            return(
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:10}}>
                    <label className="prePost-title">{posts[1].title}</label>
                    <label className="prePost-time">{posts[1].time}</label>
                    <div className="prePost-content">
                        <div className="prePost-p" dangerouslySetInnerHTML={{__html: posts[1].pre}} />
                    </div>
                    <Link to={path} style={{alignSelf:'flex-end', marginTop:10, marginBottom:10}}>more...</Link>
                </div>
            )
        }
    }

    render(){
        return(
            <div style={{backgroundColor:'#ffffff', maxheight:350, padding:30}}>
                <label style={{display:'flex', flex:'1', alignSelf:'flex-start', fontSize:30}}>最近更新</label>
                <Row gutter={35}>
                    <Col span="12">
                        {
                            this._createFirstColView()
                        }
                    </Col>
                    <Col span="12">
                        {
                            this._createSecondColView()
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PrePost;