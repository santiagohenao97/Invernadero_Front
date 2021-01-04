import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

const url = "https://juan.santiagohenao97.repl.co/api/temperatura";

export default class Temperatura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  ///////////////////////////////////////////////////
  /* INICIO PETICIONES*/
  //////////////////////////////////////////////////

  peticionGet = () => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  ///////////////////////////////////////////////////
  /* Cargar los datos que vienen de la API*/
  //////////////////////////////////////////////////

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Temperatura</Card.Title>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={this.state.data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="temperatura"
                stroke="rgb(106, 110, 229)"
                fill="url(#colorUv)"
              />
              <XAxis dataKey="registro">
                <Label value="Fecha" offset={0} position="insideBottom" />
              </XAxis>
              <YAxis
                label={{
                  value: "Temperatura °C",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10
                }}
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    );
  }
}
