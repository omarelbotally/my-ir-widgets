import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Statements = () => {
  const data = {
    name: " Financial Statements",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="statements">
      <PageTitle data={data} />
    </div>
  );
};

export default Statements;
