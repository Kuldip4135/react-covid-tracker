import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
// import Loader from "../Loader/Loader";

const StatewiseData = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCovidData = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const data = await response.json();
    setData(data.statewise);
    setCardData(data.statewise[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        "Getting Data..."
      ) : (
        <>
          <div className="row mb-4 g-4">
            <div className="col">
              <div className="card bg-danger">
                <div className="card-header">Total Cases</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <NumberFormat
                      value={cardData.confirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-success">
                <div className="card-header">Total Recovered</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <NumberFormat
                      value={cardData.recovered}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-dark">
                <div className="card-header">Total Deaths</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <NumberFormat
                      value={cardData.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-primary">
                <div className="card-header">Total Active</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <NumberFormat
                      value={cardData.active}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <table className="table table-responsive table-striped hover table-bordered text-center">
            <thead>
              <tr>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Last Update</td>
              </tr>
            </thead>

            <tbody>
              {data.map((currentData, index) => (
                <tr key={index}>
                  <td> {currentData.state}</td>
                  <td>
                    <NumberFormat
                      value={currentData.confirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                  <td>
                    <NumberFormat
                      value={currentData.recovered}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                  <td>
                    <NumberFormat
                      value={currentData.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                  <td>
                    <NumberFormat
                      value={currentData.active}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                  <td>{currentData.lastupdatedtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </React.Fragment>
  );
};

export default StatewiseData;
