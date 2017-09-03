import React, {Component} from 'react'

import HeadView from '../header'
import FootView from '../footer'

import PageView from './pageView'

import posts from  '../../posts/posts'

import {Layout, Pagination, Row} from 'antd'
const {Header, Content, Footer} = Layout;

class PostList extends Component{



    render(){
        return(
            <div>
                <Layout style={{minWidth:600}}>
                    <Header>
                        <HeadView/>
                    </Header>
                    <Content style={{minHeight:1000, display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'white'}}>
                        <Row>
                            <PageView items={posts.slice(0,10)}/>
                        </Row>
                        <Row type="flex" justify="center" style={{margin:10}}>
                            <Pagination total={1} />
                        </Row>
                    </Content>
                    <Footer>
                        <FootView/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default PostList;