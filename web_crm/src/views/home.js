import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default (props)=> {
    const {httpSuccess}=React.Meili
    const [list,setList]=useState([])
    // const [name,setName]=useState('')
    useEffect(()=>{
      // if(!list.length){
        httpSuccess(['get','/crm/homemenu'],data=>{
          console.log(1);
          setList(data)
      },[])
    })
        return (
            <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
          <div className="home_work">工作台</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            {
                list.map((v,i)=>(
                    <SubMenu key={"sub"+(i+1)} title={<span>{v.class}</span>}>
                        {
                            v.sub.map(vv=>(
                                <Menu.Item key={vv.key}>
                                  <Link to={vv.to}> {vv.title}</Link>
                                </Menu.Item>
                            ))
                        }
          </SubMenu>
                ))
            }
        </Menu>
      </Sider>
      <Layout >
      <Header className="site-layout-background"/>
        <Content className="site-layout-background" style={{margin:"15px"}} >
          <React.Meili.Routerview routes={props.routes}></React.Meili.Routerview>
        </Content>
      </Layout>
  </Layout>
        )
}
