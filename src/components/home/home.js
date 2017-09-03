import React, {Component} from 'react'

import Intro from './intro'
import PrePost from './prePost'
import Skill from './skill'

import HeadView from '../header'
import FootView from '../footer'

import {Layout} from 'antd'
const {Header, Content, Footer} = Layout;

class Home extends Component{

    render(){
        return(
            <div>
                <Layout style={{minWidth:600}}>
                    <Header>
                        <HeadView/>
                    </Header>
                    <Content style={{minHeight:1000}}>
                        <Intro/>
                        <PrePost/>
                        <hr/>
                        <Skill/>
                    </Content>
                    <Footer>
                        <FootView/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home;