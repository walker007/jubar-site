import React, { Component } from "react";
import Footer from "../../Components/Footer";
import MenuTopBar from "../../Components/Menu";
import { Container, Grid } from "@material-ui/core";
import PostCard from "../../Components/PostCard";

export default class Noticias extends Component {
  state = {
    posts: [
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      },
      {
        id: "1",
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text"
      }
    ]
  };
  render() {
    return (
      <div>
        <MenuTopBar />
        <Container style={{ marginTop: 5, marginBottom: 5 }}>
          <Grid container spacing={2}>
            {this.state.posts.map(post => (
              <PostCard key={post.title} post={post} />
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
