import React, {Component} from 'react'

import HeadView from '../header'
import FootView from '../footer'

import PropTypes from 'prop-types'

import {Layout} from 'antd'

import {Link} from 'react-router'

import posts from  '../../posts/posts'

const {Header, Content, Footer} = Layout;

class PageDetail extends Component{
    render(){
        var cur = this.props.location.state;

        var path = '/posts/' + cur.html + '.html';

        var pre;
        var next;
        var preLink;
        var nextLink;
        if (cur.index - 1 -1 >= 0){
            pre = posts[cur.index-1-1];

            var prePath = {
                pathname: '/post/detail',
                state: pre
            }
            preLink = <div><Link to={prePath}>{pre.title}</Link></div>
        }else{
            preLink = <div></div>
        }
        if (cur.index + 1 -1 < posts.length){
            next = posts[cur.index+1-1];

            var nextPath = {
                pathname: '/post/detail',
                state: next
            }
            nextLink = <div><Link to={nextPath}>{next.title}</Link></div>
        }else{
            nextLink=<div></div>
        }

        
        return(
            <div>
                <Layout>
                    <Header>
                        <HeadView/>
                    </Header>
                    <Content style={{minHeight:1000, backgroundColor:'white'}}>
                        <iframe title="myiframe" src={path} width="100%" style={{minHeight:1000}}></iframe>
                        <div style={{display:'flex', justifyContent:'space-between', margin:10}}>
                            {preLink}
                            {nextLink}
                        </div>
                    </Content>
                    <Footer>
                        <FootView/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

PageDetail.propTypes={
    fileName : PropTypes.string
}

export default PageDetail;