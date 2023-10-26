import React from "react";
import Profile from "./Profile";

export default function Header() {
  const profile = [
    { nama: "umar", umur: 19, hobi: "bola" },
    { nama: "lala", umur: 23, hobi: "bola" },
    { nama: "raja", umur: 25, hobi: "bola" },
  ];
  return (
    <div>
      <h1>Profile</h1>
      {/* <Profile nama="lala" umur={22} hobi="main" alamat="adnsakjn" /> */}
      {profile.map((data) => {
        return <Profile nama={data.nama} umur={data.umur} hobi={data.hobi} />;
      })}
    </div>
  );
}
