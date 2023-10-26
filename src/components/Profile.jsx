import React from "react";

const Profile = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <h1>tanggal : {props.tanggal}</h1>
            <h2>isi : {props.isi}</h2>
            {/* <h2>hobi : {props.hobi}</h2>
            <h2>alamat : {props.alamat}</h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
