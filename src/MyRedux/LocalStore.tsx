import React from "react";

const LocalStore = () => {
  return <div>LocalStore</div>;
};

const getData = () => {
  const data = localStorage.getItem("reduxData");
  console.log(data);
  return data;
};

const setData = () => {
  const data = localStorage.setItem("data", "krabi");
  console.log(data);
  return data;
};

export default LocalStore;
