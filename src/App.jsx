import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Homepages from "./components/Homepages";
import Profile from "./components/Profile";

export default function App() {
  const notes = [
    { tanggal: "19-29-23", isi: "absdba" },
    { tanggal: "s12324", isi: "wefewewf" },
    { tanggal: "123124", isi: "jsdjsd" },
  ];
  return (
    <div>
      {notes.map((data) => {
        return <Profile tanggal={data.tanggal} isi={data.isi} />;
      })}
    </div>
  );
}
