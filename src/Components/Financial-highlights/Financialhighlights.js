import React, { useEffect, useState } from "react";
import "./Financialhishlights.css";
import { getAllData } from "../../JSONDATA/fetchingdata";
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';


function Financialhighlights() {

  const [tableData, setTableData] = useState([]);
  const [currency, setCurrency] = useState("USD")
  var usdBtn = document.getElementById("usd-btn");
  var riyalBtn = document.getElementById("riyal-btn");



  function changeCurrency(curr) {

    setCurrency(curr);
    if (curr === "Riyal") {
      riyalBtn.style.backgroundColor = " #B8C9D1 "
      usdBtn.style.backgroundColor = "white"
    }

    else if (curr === "USD") {

      usdBtn.style.backgroundColor = "#B8C9D1"
      riyalBtn.style.backgroundColor = "white"


    }


  }

  function showPopUp() {


    document.querySelector(".pop-img").style.display = "flex"
  }


  useEffect(() => {
    getAllData().then((response) => setTableData(response));




  }, []);



  useEffect(() => {
    document.body.onClick = () => {
      console.log("test")

      document.querySelector(".pop-img").style.display = "none";
    }

  })



  return (


    <div className="financial-highlights">

      <div className="pop-img" onClick={(e) => {

        document.querySelector(".pop-img").style.display = "none";


      }}>
        <img src="../../assets/barchart.png" className="chart-img" alt="chart" />
        <AiFillCloseCircle className="close" />

      </div>

      <div className="row">
        <div className="sec-title col-md-9">
          <h2>FINANCIAL HIGHLIGHTS (M RIYAL)</h2>
        </div>

        <div className="col-md-3">
          <span>
            <button id="riyal-btn" onClick={(e) => {
              changeCurrency(e.target.innerText);
              console.log(e.target.innerText)
            }}> Riyal</button>
          </span>

          <span>
            <button id="usd-btn" onClick={(e) => {
              changeCurrency(e.target.innerText);
              console.log(e.target.innerText)
            }}> USD</button>
          </span>
        </div>
      </div>

      <table>
        <tbody style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "30%" }}><h4>Description</h4></td>{" "}
            <td style={{ width: "13%" }}><h4>Chart</h4></td>{" "}
            <td style={{ width: "13%" }}><h4>2020 </h4></td>{" "}
            <td style={{ width: "13%" }}><h4>2019</h4></td>{" "}
            <td style={{ width: "13%" }}><h4>2018</h4></td>{" "}
            <td style={{ width: "13%" }}><h4>2017</h4></td>{" "}
            <td style={{ width: "13%" }}><h4>2016</h4></td>{" "}
          </tr>
          {tableData.filter((trow) => trow.category === currency).map(troww => {
            return (
              < tr key={troww.id}>
                <td><h5>{troww.description}</h5></td>
                <td><h5><BsFillFileBarGraphFill className="fc-bar-chart" onClick={(e) => {
                  showPopUp()
                }} /></h5></td>
                <td><h5>{troww.twtw}</h5></td>
                <td><h5>{troww.twni}</h5></td>
                <td><h5>{troww.twei}</h5></td>
                <td><h5>{troww.twse}</h5></td>
                <td><h5>{troww.twsix}</h5></td>




              </tr>

            )
          })



          }


        </tbody>
      </table>

      <div className="row">

        <div className="col-lg-6 col-sm-6 col-6 more-from-calendar" >

          More from Calendar

        </div>

        <div className="col-lg-6 col-sm-6 col-6 text-right ">


          <BsArrowRight className="right-arrow" />


        </div>


      </div>
    </div >
  );
}

export default Financialhighlights;
