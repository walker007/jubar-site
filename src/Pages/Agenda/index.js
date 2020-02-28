import React, { Component } from "react";
import { ReactAgenda, guid } from "react-agenda";
import { Paper, Container, Divider, Typography } from "@material-ui/core";
import "react-agenda/build/styles.css";
import "react-datetime/css/react-datetime.css";
import MenuTopBar from "../../Components/Menu";
import Footer from "../../Components/Footer";

var colors = {
  "color-1": "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)"
};

var now = new Date("2020-01-09");

var items = [
  {
    _id: guid(),
    name: "Evento 1",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0
    ),
    classes: "color-1"
  },
  {
    _id: guid(),
    name: "Evento 2",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      15
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      13,
      0
    ),
    classes: "color-2 color-3"
  }
];

export default class Calendar extends Component {
  state = {
    items: items,
    cellHeight: 20,
    showModal: false,
    locale: "pt-br",
    rowsPerHour: 2,
    numberOfDays: 7,
    startDate: new Date()
  };

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <MenuTopBar />

        <Container>
          <Typography variant="h6" gutterBottom>
            Agenda
          </Typography>
          <Divider />
          <Paper style={{ marginTop: 5 }}>
            <ReactAgenda
              minDate={now}
              disablePrevButton={false}
              startDate={this.state.startDate}
              cellHeight={this.state.cellHeight}
              locale={this.state.locale}
              items={this.state.items}
              numberOfDays={this.state.numberOfDays}
              itemColors={colors}
              autoScale={true}
              fixedHeader={true}
            />
          </Paper>
        </Container>

        <Footer />
      </div>
    );
  }
}
