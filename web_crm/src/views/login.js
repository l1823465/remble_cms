import React ,{useState} from 'react'
import {  Input,message, Button} from 'antd'; 

export default (props)=> {
  let [user,setUser]=useState('')
  let [pwd,setPwd]  =useState('')

   let  onFinish =() => {
     let {httpSuccess,isNull,regType,dataJson} =React.Meili
     let checkArr=[dataJson('账号',user,'user'),dataJson('密码',pwd,'pwd')]
          isNull(checkArr,()=>regType(checkArr,()=>httpSuccess(['post','/crm/login',{user,pwd}],(data,msg)=>{
            message.success(msg)
            localStorage.setItem('user',user)
            setTimeout(()=>{  props.history.push('/home')},500)
          })))
          
        }
        return (
          <div className="login_out">
            <Input value={user} onChange={e=>setUser(e.target.value)}/>
            <Input.Password value={pwd} onChange={e=>setPwd(e.target.value)}/>
            <Button onClick={onFinish}>提交</Button>
          </div>
        )
    }


