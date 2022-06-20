import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Ratios = () => {
  const data = {
    name: "Financial Ratios",
    firsnum: "1154545",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="finantial-ratios">
      <PageTitle data={data} />
    </div>
  );
};

export default Ratios;
