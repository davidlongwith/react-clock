import React from "react";
import { Component } from "react";
import "./css/Clock.css";
import { getClockTime } from "./lib";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = getClockTime();
  }

  componentDidMount() {
    console.log("Starting Clock");
    this.ticking = setInterval(() => this.setState(getClockTime()), 1000);
  }

  render() {
    const { hours, minutes, seconds, ampm } = this.state;
    return (
      <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span className="ampm">{ampm}</span>
      </div>
    );
  }
}
