import React from "react";
import "./Marketvalue.css";
function MarketValue() {
  return (
    <div className="market-value">
      <div className="row">
        <div
          className="col-6"
          style={{
            color: "#3F5D34",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          MARKETVALUE
        </div>

        <div
          className="col-6"
          style={{
            color: "#A7A6A7",
            fontSize: "30px",
            textAlign: "right",
          }}
        >
          2,950.00
        </div>
      </div>

      <div className="row">
        <table>
          <tbody>
            <tr
              className=""
              style={{
                borderBottom: "1px solid rgb(212, 212, 212) ",
              }}
            >
              <td colSpan="2">Volume</td>
              <td > 270</td>
              <td > Average Volume (3M)</td>
              <td > </td>

              <td style={{ textAlign: "right" }}>
                {" "}
                505,436
              </td>
            </tr>

            <tr

              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2" >Volume</td>
              <td > 270</td>
              <td > Average Volume (3M)</td>
              <td >  </td>

              <td style={{ textAlign: "right" }} colSpan="1">
                {" "}
                505,436
              </td>
            </tr>
            <tr
              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2">Volume</td>
              <td > 270</td>
              <td > Average Volume (3M)</td>
              <td > </td>

              <td style={{ textAlign: "right" }}>
                {" "}
                505,436
              </td>
            </tr>
            <tr

              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2" >Volume</td>
              <td > 270</td>
              <td> Average Volume (3M)</td>
              <td > </td>

              <td style={{ textAlign: "right" }}>
                {" "}
                505,436
              </td>
            </tr>

            <tr

              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2">Volume</td>
              <td > 270</td>
              <td > Average Volume (3M)</td>
              <td > </td>

              <td style={{ textAlign: "right" }}>
                {" "}
                505,436
              </td>
            </tr>

            <tr
              className=""
              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2" >Volume</td>
              <td > 270</td>
              <td > Average Volume (3M)</td>
              <td > </td>

              <td style={{ textAlign: "right" }}>
                {" "}
                505,436
              </td>
            </tr>
            <tr

              style={{ borderBottom: "1px solid rgb(212, 212, 212) " }}
            >
              <td colSpan="2">Change</td>
              <td >3 Months</td>

              <td>6 Months</td>
              <td >12 Months</td>

              <td style={{ textAlign: "right", wordWrap: "none", whiteSpace: "unset" }}>
                {" "}
                Year to date
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default MarketValue;
