import React from "react";

// Import Custom Css File
import "./PageTitle.css";

const PageTitle = (props) => {
  return (
    <div className="page-title">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h1>{props.data.name}</h1>
          </div>

          <div className="text-center">
            <span className="fs-num">{props.data.firsnum}</span>
            <span className="sec-num">{props.data.secnum}</span>
            <span>
              <i className="bi bi-arrow-90deg-up"></i>
            </span>
            <span className="third-num">{props.data.thirdnum}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
