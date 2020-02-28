import React, { Component } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Container,
  CardMedia,
  Grid
} from "@material-ui/core";
import MenuTopBar from "../../Components/Menu";
import Footer from "../../Components/Footer";

export default class Post extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <MenuTopBar />
        <Container style={{ marginTop: 15 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Título do post"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <p align="justify">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like. Aliqua ad
                    incididunt incididunt pariatur cupidatat amet ipsum proident
                    eiusmod ut id sunt. Amet minim et ex occaecat proident velit
                    id dolore magna nulla. Occaecat occaecat ut velit velit
                    fugiat cupidatat veniam. Irure in consectetur culpa pariatur
                    aliqua deserunt magna. Mollit sit proident elit labore
                    dolore nisi et. Culpa velit officia aliquip nisi ipsum culpa
                    exercitation. Proident commodo mollit ex ad non. Consequat
                    deserunt Lorem cillum sint aute occaecat occaecat sint
                    tempor fugiat aliquip ipsum sint. Qui proident exercitation
                    ut id id adipisicing id aute laborum exercitation tempor
                    reprehenderit aliquip.
                  </p>
                  <p align="justify">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like. Aliqua ad
                    incididunt incididunt pariatur cupidatat amet ipsum proident
                    eiusmod ut id sunt. Amet minim et ex occaecat proident velit
                    id dolore magna nulla. Occaecat occaecat ut velit velit
                    fugiat cupidatat veniam. Irure in consectetur culpa pariatur
                    aliqua deserunt magna. Mollit sit proident elit labore
                    dolore nisi et. Culpa velit officia aliquip nisi ipsum culpa
                    exercitation. Proident commodo mollit ex ad non. Consequat
                    deserunt Lorem cillum sint aute occaecat occaecat sint
                    tempor fugiat aliquip ipsum sint. Qui proident exercitation
                    ut id id adipisicing id aute laborum exercitation tempor
                    reprehenderit aliquip.
                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              aaaaaa
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
