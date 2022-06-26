import React from "react";
import Financialhighlights from "../../Components/Financial-highlights/Financialhighlights";
import PageTitle from "../../Layouts/PageTitle/PageTitle";
import Profileinfo from "../../Layouts/Profile.info/Profileinfo";
import Tradingdata from "../../Components/Trading-data/Tradingdata";
import "./edit.css"

const Profile = () => {
  const data = {
    name: "Profile",
    firsnum: "678.00",
    secnum: "2050.00",
    thirdnum: "0130.17%",
  };
  return (
    <div className="profile " >
      <PageTitle data={data} />
      <Profileinfo />

      <div className="row">

        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <Financialhighlights />

        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">

          <Tradingdata />

        </div>

      </div>


    </div>


  );
};

export default Profile;
