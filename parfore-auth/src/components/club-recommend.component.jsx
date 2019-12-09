import React, { Component } from "react";
import History from "../history.js";
import YardsHistory from "./yards-history.component";

export default class ClubRecommendation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yards: "",
      club: "",
      averageYards: ""
    };
  }

  render() {
    return (
      <div className="container">
        <h4 className="display-4 text-light">Find your club...</h4>

        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <label className="mt-2 text-muted" htmlFor="inputYards">
                <small>
                  <i>Yards to hole</i>
                </small>
              </label>
              <input
                className="form-control is-valid"
                type="number"
                pattern="\d*"
                name="inputYards"
                id="inputYards"
                placeholder="Distance..."
                onChange={this.handleYardsChange}
                value={this.state.yards}
              />
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <button
                onClick={this.getRecommendation}
                className="btn btn-success btn-block mt-3"
              >
                Get Club
              </button>
            </div>
          </div>
          <div className="row justify-content-around mt-3">
            <div className="col-lg-6">
              <div className="alert alert-info" role="alert">
                <p className="h4 mb-1 text-center">{this.state.club}</p>
              </div>
            </div>
          </div>
          <div className="row mt-2 justify-content-around">
            <div className="col-lg-6">
              <button
                className="btn btn-success btn-block"
                onClick={this.getAverageYardage}
              >
                Get Average Yardage
              </button>
            </div>
          </div>
          <div className="row mt-2 justify-content-around">
            <div className="col-lg-6">
              <button
                className="btn btn-warning btn-block"
                onClick={this.clearInputs}
              >
                Clear all text
              </button>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <p className="mt-4 lead text-center">{this.state.averageYards}</p>
            </div>
          </div>
          <div className="row justify-content-around mt-5">
            <div className="col-lg-6">
              <YardsHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getAverageYardage = () => {
    let sumYards = 0;
    for (let i = 0; i < History.yards.length; i++) {
      sumYards += Number(History.yards[i][0]);
    }
    const avgYards = Math.trunc(sumYards / History.yards.length);
    this.setState({
      averageYards: `Your average distance is ${avgYards} yards...`
    });
  };

  handleYardsChange = e => {
    this.setState({ yards: e.target.value });
  };

  getRecommendation = () => {
    let yardsToHole = this.state.yards;
    let recClub = "";
    switch (true) {
      case yardsToHole > 220:
        recClub = "Driver";
        break;
      case yardsToHole > 210:
        recClub = "2 Wood";
        break;
      case yardsToHole > 200:
        recClub = "3 Wood";
        break;
      case yardsToHole > 195:
        recClub = "4 Wood";
        break;
      case yardsToHole > 185:
        recClub = "2 Iron";
        break;
      case yardsToHole > 175:
        recClub = "3 Iron";
        break;
      case yardsToHole > 165:
        recClub = "4 Iron";
        break;
      case yardsToHole > 155:
        recClub = "5 Iron";
        break;
      case yardsToHole > 145:
        recClub = "6 Iron";
        break;
      case yardsToHole > 135:
        recClub = "7 Iron";
        break;
      case yardsToHole > 125:
        recClub = "8 Iron";
        break;
      case yardsToHole > 115:
        recClub = "9 Iron";
        break;
      case yardsToHole >= 20:
        recClub = "Pitching Wedge";
        break;
      default:
        recClub = "Putter";
    }
    this.setState({ club: recClub, yards: "" });
    History.yards.push([yardsToHole, recClub]);
    console.log(History.yards);
  };

  clearInputs = () => {
    this.setState({ yards: "", club: "", averageYards: "" });
  };
}
