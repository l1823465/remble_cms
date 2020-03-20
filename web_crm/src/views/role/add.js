import React,{useState,useEffect} from 'react'
import {Input,Tree,Button} from 'antd'

export default ()=>{
    const {httpSuccess} =React.Meili
        const [role,setRole]=useState('')
        const [treeData,setTreeData]=useState([])
        const [oprData,setOprData]=useState([])
        const [treeArr,setTreeArr]=useState([])
        const [oprArr,setOprArr]=useState([])
        const [arr,setArr]=useState([])

    useEffect(()=>{
            httpSuccess(['get','/crm/rolemenu'],data=>{
                // console.log(data);
                setTreeData(data.data);
                setOprData(data.opr)
                let a=data.data.map(v=>{
                    return v.key
                })
                // console.log(a);
                
                setArr(a)
            })
    },[httpSuccess,setTreeData,setOprData])
    let onCheck=(value)=>{
        value=value.filter(item=>item.indexOf('sub')===-1)
                setTreeArr(value)
                
    }
    let oprCheck=(value)=>{
                setOprArr(value)      
    }
    let submit=()=>{
        httpSuccess(['post','/crm/rolesubmit',{role,treeArr,oprArr}])
    }
    return (
        <div>
            <div>
                <strong>角色：</strong>
                <Input value={role} type='text' style={{width:200}} onChange={e=>setRole(e.target.value)} />
            </div>
            <div className="add_out"></div>
            <div className="m_t_15">
                <p>菜单权限</p>
                <Tree
                // autoExpandParent={false} 
                 checkable 
                selectable={false}
                    expandedKeys={arr}    
                    onCheck={onCheck}
                    treeData={treeData}
                />
            </div>
            <div className="m_t_15">
                <p>操作权限</p>
                <Tree checkable
                    onCheck={oprCheck}
                    treeData={oprData}
                />
            </div>
            <Button className="m_t_15" onClick={submit}>提交</Button>
        </div>
    )
}

// expandedKeys={expandedKeys}

// checkedKeys={checkedKeys}
// selectedKeys={selectedKeys}
