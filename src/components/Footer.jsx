import React from "react";
import Profile from "./Profile";
import Header from "./Header";

const Footer = (props) => {
  return (
    <div>
      <Header />
      <Profile nama="asdad" umur="200" hobi="jsand" alamat="jln.skdnas" />
      <h1>perusahaan : {props.perusahaan}</h1>
    </div>
  );
};

export default Footer;
