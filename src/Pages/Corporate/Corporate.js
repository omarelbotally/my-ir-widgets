import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Corporate = () => {
  const data = {
    name: "Corporate",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="corporate">
      <PageTitle data={data} />
    </div>
  );
};

export default Corporate;
