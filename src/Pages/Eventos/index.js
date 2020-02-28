import React, { Component } from "react";
import MenuTopBar from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { Container, Grid } from "@material-ui/core";
import EventosCard from "../../Components/EventosCard";

export default class Eventos extends Component {
  state = {
    eventos: [
      {
        title: "Evento 1",
        date: "2019-01-10",
        description: "Evento de teste",
        image: ""
      },
      {
        title: "Evento 1",
        date: "2019-01-10",
        description: "Evento de teste",
        image: ""
      },
      {
        title: "Evento 1",
        date: "2019-01-10",
        description: "Evento de teste",
        image: ""
      },
      {
        title: "Evento 1",
        date: "2019-01-10",
        description: "Evento de teste",
        image: ""
      }
    ]
  };
  render() {
    return (
      <div>
        <MenuTopBar />
        <Container style={{ marginTop: 15 }}>
          <Grid container spacing={2} justify="space-between">
            {this.state.eventos.map(evento => (
              <EventosCard key={evento.id} eventoInfo={evento} />
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
