import React,{useState,useEffect} from 'react'
import {Input,Select,Button,DatePicker,message} from 'antd'
import moment from 'moment';
const {Option} = Select;
export default props => {
        const {httpSuccess,nowDateStr,dategetTime} =React.Meili;
        const [roleList,setRoleList]=useState([])
        const [user,setUser]=useState('')
        const [name,setName]=useState('')
        const [roleid,setRoleid]=useState('0')
        const [sex,setSex]=useState('1')
        const [time,setTime]=useState(nowDateStr())
    useEffect(()=>{
        httpSuccess(['get','/crm/rolelist'],data=>{
            console.log(data);
            setRoleList(data)
        })
    },[httpSuccess,setRoleList])
    let submit=()=>{
        let subData={user,name,sex,time,roleid}
        subData.time=dategetTime(time)
        httpSuccess(['post','/crm/staffadd',subData],()=>{
            message.success('添加成功')
            setTimeout(()=>{  props.history.push('/home/staff')},500)
        })
    }
        return (
            <div className="staff_add">
            <div className="add_out">
                <strong>账    号:</strong>
                <Input value={user} type="text" style={{width:200}} onChange={ e =>setUser(e.target.value)}/><small>初始密码:123456</small></div>
            <div className="add_out">
                <strong>职员姓名:</strong>
                <Input value={name} type="text" style={{width:200}} onChange={ e =>setName(e.target.value)}/></div>
            <div className="add_out">
                <strong>角    色：</strong>
                <Select value={roleid} style={{width:200}} onChange={value=>setRoleid(value)}>
                    <Option value="0">请选择角色</Option>
                    {
                        roleList.map(i=><Option key={i.id} value={i.id}>{i.role}</Option>)
                    }
                </Select>
            </div>
            <div className="add_out">
                <strong>职员性别:</strong>
                <Select value={sex} style={{width:200}} onChange={value=>setSex(value)}>
                    <Option value="1">男</Option>
                    <Option value="2">女</Option>
                </Select>
            </div>
            <div className="add_out">
                <strong>入职日期:</strong>
                <DatePicker value={moment(time,'YYYY/MM/DD')} format="YYYY/MM/DD" onChange={(date, dateString) => setTime(dateString)} style={{width:200}}/>
            </div>
            <Button onClick={()=>submit()}>提交</Button>
        </div>
        )
}
