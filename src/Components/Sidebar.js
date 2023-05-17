import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { Children } from "react";
import {
  ContactsOutlined,
  DashboardOutlined,
  EditOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  MenuOutlined,
  PoweroffOutlined,
  SettingOutlined,
  SwapOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./css/bar.css";
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="sidebar"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              icon: (
                <MenuOutlined
                  style={{
                    fontSize: "17px",
                    marginLeft: "93%",
                    color: "#000",
                    marginRight: "2%",
                  }}
                />
              ),
            },
            { label: "Accueil", key: "/", icon: <FieldTimeOutlined /> },
            {
              label: "Systeme",
              key: "/systeme",
              icon: <SettingOutlined />,
              children: [
                { label: "active user", key: "userList" },
                { label: "inctive user", key: "userLis" },
              ],
            },
            {
              label: "Editer Mot de passe",
              key: "/Editer Mot de passe",
              icon: <EditOutlined />,
            },
            {
              label: "Gestion des factures",
              key: "/gestion des factures",
              icon: <SwapOutlined />,
              children: [
                { label: "active user", key: "userList" },
                { label: "inctive user", key: "userLis" },
              ],
            },
            {
              label: "Contacts",
              key: "/contacts",
              icon: <SwapOutlined />,
              children: [
                { label: "active user", key: "userList" },
                { label: "inctive user", key: "userLis" },
              ],
            },
            {
              label: "Statistiques",
              key: "/Statistiques",
              icon: <SwapOutlined />,
              children: [
                { label: "active user", key: "userList" },
                { label: "inctive user", key: "userLis" },
              ],
            },
            {
              label: "Consultations",
              key: "/Consultations",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    </div>
  );
};
export default Sidebar;
