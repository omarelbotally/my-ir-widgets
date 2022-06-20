import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Investors = () => {
  const data = {
    name: "Investors Representation",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="investors">
      <PageTitle data={data} />
    </div>
  );
};

export default Investors;
