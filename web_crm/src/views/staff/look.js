import React,{useState,useEffect} from 'react'
export default props=>{
    const {httpSuccess,transTimer}=React.Meili;
    const [item,setItem]=useState([]);
    useEffect(()=>{
        httpSuccess(['post','/crm/staffdetail',{id:props.location.state.id}],data=>{
            setItem(data)
            console.log(data);
        })
    },[httpSuccess,setItem,props])

    let txtObj = {
        id:'职员编号',
        user:'账号',
        status:'状态',
        roleid:'角色',
         name:'姓名',
        sex:'性别',
        time:'入职日期',
        outime:'离职日期'
        }
        return (
            <div className="staff_add">
                    {
                        item[0]&&Object.keys(item[0]).map(j=>(
                            <div key={j} className="add_out">
                                  <strong>{txtObj[j]}:</strong>
                                  {j.indexOf('time')===-1?item[0][j]:transTimer(item[0][j])}
                            </div>
                        ))
                    }
            </div>
        )
}