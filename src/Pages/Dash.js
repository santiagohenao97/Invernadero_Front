import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../Components/Chart";

const url = "https://juan.santiagohenao97.repl.co/api/datos";

export default class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  peticionGet = () => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    //this.intervalId = setInterval(() => this.peticionGet(), 10000);
    this.peticionGet();
  }

  render() {
    return (
      <>
        <Container className="container">
          <Row>
            <Col xs={12} md={6}>
              <Chart
                data={this.state.data}
                dataKey="temperatura"
                variable="Temperatura °C"
                titulo="Temperatura"
              />
              <Chart
                data={this.state.data}
                dataKey="temperaturaSustrato"
                variable="Temp.Sustrato °C"
                titulo="Temperatura Sustrato"
              />
            </Col>
            <Col xs={12} md={6}>
              <Chart
                data={this.state.data}
                dataKey="humedad"
                variable="Humedad"
                titulo="Humedad"
              />

              <Chart
                data={this.state.data}
                dataKey="volumenSustrato"
                variable="Vol. sustrato"
                titulo="Volumen Sustrato"
              />
            </Col>
            <Col xs={12} md={6}>
              <Chart
                data={this.state.data}
                dataKey="pH"
                variable="pH"
                titulo="pH"
              />
            </Col>
            <Col xs={12} md={6}>
              <Chart
                data={this.state.data}
                dataKey="conductividad"
                variable="Conductividad"
                titulo="Conductividad"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
