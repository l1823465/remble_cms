import React,{useState,useEffect} from 'react'
import {Table} from 'antd'

export default ()=>{
    const {httpSuccess} = React.Meili;

    const [list,setList] = useState([]);
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '出行人数',
          dataIndex: 'person',
          key: 'age',
        },
        {
          title: '目的地',
          dataIndex: 'place',
          key: 'place',
        },
    ];
    useEffect(()=>{
      httpSuccess(['get','/crm/purpose'],data=>{
        console.log('意向表');
        setList(data)
    })} ,[setList,httpSuccess])
    return (
        <div>
            <Table rowKey={i=>i.id} dataSource={list} columns={columns} />;
        </div>
    )
}