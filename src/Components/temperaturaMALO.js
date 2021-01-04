import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import moment from "moment";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  setData = () => {
    let valor = [];
    let fecha = [];

    this.props.chartData.map((data) => {
      valor.push(data.temperatura);
      fecha.push(moment(data.registro).format("L"));
      console.log("hola");
      return data;
    });
  };

  render() {
    return (
      <Line
        data={this.state.chartData}
        options={{
          title: {
            display: this.props.displayTitle,
            text: "Largest Cities In " + this.props.location,
            fontSize: 25
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
        }}
      />
    );
  }
}

export default Chart;
