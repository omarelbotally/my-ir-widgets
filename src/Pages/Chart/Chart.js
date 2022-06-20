import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Chart = () => {
  const data = {
    name: "Chart",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="chart">
      <PageTitle data={data} />
    </div>
  );
};

export default Chart;
