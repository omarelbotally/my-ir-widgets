import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Analyst = () => {
  const data = {
    name: "Analyst Coverage",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="analyst">
      <PageTitle data={data} />
    </div>
  );
};

export default Analyst;
