import React from "react";
import ChartTest from "../../Components/Chart/ChartTest";
import MarketValue from "../../Layouts/MarketValue/MarketValue";

/* == Import Components == */
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Overview = () => {
  const data = {
    name: "Overview",
    firsnum: "11.00",
    secnum: "20.00",
    thirdnum: "0.17%",
  };
  return (
    <>
      <PageTitle data={data} />

      <div className="chart-section ">
        <div className="row">
          <div className=" col-sm-12 col-lg-5 col-md-12 col-12">
            <ChartTest />
          </div>

          <div className=" col-sm-12 col-lg-7 col-md-12 col-12">
            <MarketValue />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
