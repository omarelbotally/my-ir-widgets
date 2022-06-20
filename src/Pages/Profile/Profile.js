import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Profile = () => {
  const data = {
    name: "Profile",
    firsnum: "678.00",
    secnum: "2050.00",
    thirdnum: "0130.17%",
  };
  return (
    <div className="profile">
      <PageTitle data={data} />
    </div>
  );
};

export default Profile;
