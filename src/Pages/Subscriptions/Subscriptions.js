import React from "react";
import PageTitle from "../../Layouts/PageTitle/PageTitle";

const Subscriptions = () => {
  const data = {
    name: "Subscription Center",
    firsnum: "1100.00",
    secnum: "200.00",
    thirdnum: "000.17%",
  };
  return (
    <div className="subcription">
      <PageTitle data={data} />
    </div>
  );
};

export default Subscriptions;
