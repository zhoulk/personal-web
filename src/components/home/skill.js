import React, {Component} from 'react'

import {Card, Row, Col} from 'antd'

import marked from 'marked'
import highlightjs from 'highlight.js'

import './skill.css'

marked.setOptions({
    highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
    }
});

class Skill extends Component{

    render(){
        var tmpSkills = skills;
        if(tmpSkills.length % 3 === 1){
            tmpSkills.push({})
            tmpSkills.push({})
        }else if(tmpSkills.length % 3 === 2){
            tmpSkills.push({})
        }
        return(
            <div style={{ background: '#ffffff', padding: 30 }}>
                <label style={{display:'flex', flex:'1', alignSelf:'flex-start', fontSize:30}}>技能</label>
                <Row gutter={16} style={{marginTop: 10}}>
                    {
                        skills.map((item, index)=>{
                            var col;
                            if (item.title){
                                col = (
                                    <Col span={8} key={index}>
                                        <Card title={item.title} style={{height:350}}>
                                            <div dangerouslySetInnerHTML={{__html: item.desc}}></div>
                                        </Card>
                                    </Col>
                                )
                            }else{
                                col = (
                                    <Col span={8} key={index}>
                                    </Col>
                                )
                            }
                            return col;
                        })
                    }
                </Row>
            </div>
        )
    }
}

const skills = [
    {
        title: 'iOS',
        desc: '<ul>' +
        '<li style="font-size: large">语言<br> Object-C <b>精通</b><br></li> ' +
        '<li style="font-size: large">常用第三方<br> AFN, SDWebImage, MBProgressHUD 等</li> ' +
        '<li style="font-size: large">作品<br> 361°运动, 特步智能芯, 乔丹智跑, 爱康跑步工具 等</li>' +
        '</ul>'
    },
    {
        title: 'Android',
        desc: '<ul>' +
        '<li style="font-size: large">语言<br> Java <b>精通</b><br></li> ' +
        '<li style="font-size: large">常用第三方<br> OkHttp, GreenDao, ImageLoader 等</li> ' +
        '<li style="font-size: large">作品<br> 361°运动, 特步智能芯, 乔丹智跑, 爱康跑步工具 等</li>' +
        '</ul>'
    }
]

export default Skill;