import React, { Component } from "react";
import History from "../history.js";

class YardsHistory extends Component {
  yardsArray = History.yards;

  render() {
    return (
      <div className="container text-light">
        <div className="row">
          <div className="col">
            <p className="h1 text-center">History</p>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <p className="h4 text-center">Yards</p>
          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Yards</th>
                <th scope="col">Club</th>
              </tr>
            </thead>
            <tbody>
              {this.yardsArray.map((x, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td key={`yard${i}`}>{x[0]}</td>
                    <td key={`club${i}`}>{x[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default YardsHistory;
