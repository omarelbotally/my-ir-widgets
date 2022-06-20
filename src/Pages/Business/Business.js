import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Business = () => {
  const data = {
    name: "Business Segments",
    firsnum: "1300.00",
    secnum: "2020.00",
    thirdnum: "0150.17%",
  };
  return (
    <div className="business">
      <PageTitle data={data} />
    </div>
  );
};

export default Business;
