import React, { useState } from "react";
import "./front.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
// console.log(uniqueList);
const Front = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList,setmenuList]=useState(uniqueList);
  const filterItem = (category) => {
if (category==="All"){
  setmenuData(Menu);
  return;
};
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Front;
