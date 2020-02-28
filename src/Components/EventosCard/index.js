import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Moment from "moment";

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardActions,
  Grid,
  Button,
  CardContent,
  Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { red } from "@material-ui/core/colors";
require("moment/locale/pt-br.js");
const useStyles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class EventosCard extends Component {
  state = {
    expanded: false
  };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    const { classes, eventoInfo } = this.props;
    const date = new Date(eventoInfo.date);

    return (
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={eventoInfo.title}
            subheader={`${Moment(date).format("DD")} de ${Moment(date).format(
              "MMMM"
            )} de ${Moment(date).format("YYYY")}`}
          />
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title={eventoInfo.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Button size="small">Inscreva-se</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(EventosCard);
