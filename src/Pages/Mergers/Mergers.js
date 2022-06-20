import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Mergers = () => {
  const data = {
    name: "Mergers & Acquisitions",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="mergers">
      <PageTitle data={data} />
    </div>
  );
};

export default Mergers;
