import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TodayIcon from "@mui/icons-material/Today";
import DeleteIcon from "@mui/icons-material/Delete";

const Mainboard = () => {
  return (
    <div className="mainboard">
      <h1>Dashboard</h1>
      <section>
        <div className="row g-4 justify-content-between">
          <div className="col-lg-3 col-md-6">
            <div className="top-card border-primary border-start border-5 rounded-1 d-flex justify-content-between align-items-center">
              <div>
                <p className="card-title fw-bold text-primary ">
                  Today's Bookings
                </p>
                <h2>100</h2>
              </div>
              <div>
                <TodayIcon className="fs-1" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="top-card border-success border-start border-5 rounded-1 d-flex justify-content-between align-items-center">
              <div>
                <p className="card-title fw-bold text-success ">
                  Completed Bookings
                </p>
                <h2>150</h2>
              </div>
              <div>
                <DoneAllIcon className="fs-1" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="top-card border-warning border-start border-5 rounded-1 d-flex justify-content-between align-items-center">
              <div>
                <p className="card-title fw-bold text-warning ">New Bookings</p>
                <h2>5</h2>
              </div>
              <div>
                <PersonAddAlt1Icon className="fs-1" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="top-card border-danger border-start border-5 rounded-1 d-flex justify-content-between align-items-center">
              <div>
                <p className="card-title fw-bold text-danger ">
                  Canceled Bookings
                </p>
                <h2>5</h2>
              </div>
              <div>
                <DeleteIcon className="fs-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-between mt-5">
          <div className="col-lg-8 col-md-12">
            <div className="bg-light p-2 text-primary border rounded-1 p-3">
              <h4>All Bookings</h4>
            </div>
            <div className="p-3 custom-shadow border">
              <table className="table table-responsive  ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="bg-light p-2 text-primary rounded-1 border p-3">
              <h4> New Bookings</h4>
            </div>
            <div className="p-3 custom-shadow border">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainboard;
