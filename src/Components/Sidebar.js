
import { Menu } from 'antd'
import {Routes, Route, useNavigate} from "react-router-dom"
import React, { Children } from 'react'
import { DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import "./bar.css"
const Sidebar = () =>{
    const navigate = useNavigate()

    return(
        <div >
        <div className='sidebar' style={{display:'flex', flexDirection:'row'}}>
            <Menu onClick={ ({key}) =>{

                if (key === "signout") {

                }else{
                    navigate(key)


                }



            }}  items={[
                {label:"Home", key: "/", icon: <HomeOutlined/>},
                {label: "Dashboard",  key: "/dashboard", icon: <DashboardOutlined/>},
                {label: "Users List",  key: "/usersLists", icon: <UnorderedListOutlined/>, 
                children:[
                    {label:'active user', key: "userList"}, 
                    {label:'inctive user', key: "userLis"}],
                },
                {label: "Profile",  key: "/profile", icon: <UserOutlined/>},
                {label: "Signout",  key: "/signout", icon: <PoweroffOutlined/>},
            ]}></Menu>
           
        </div>
         </div>
    )

}
export default Sidebar