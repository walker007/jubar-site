import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Divider, Link } from "@material-ui/core";

import PostCard from "../../Components/PostCard";
import Banner from "./banner";
import MenuTopBar from "../../Components/Menu";
import Footer from "../../Components/Footer";
import EventosCard from "../../Components/EventosCard";

const useStyles = makeStyles();
const mainFeaturedPost = {
  id: "3",
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};
const featuredPosts = [
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
    id: "2",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const eventos = [
  {
    title: "Evento 1",
    date: "2019-01-10",
    description: "Evento de teste",
    image: ""
  },
  {
    title: "Evento 2",
    date: "2019-01-10",
    description: "Evento de teste",
    image: ""
  },
  {
    title: "Evento 3",
    date: "2019-01-10",
    description: "Evento de teste",
    image: ""
  }
];

const Home = () => {
  const classes = useStyles();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <MenuTopBar />
      <Container>
        <Banner post={mainFeaturedPost} />
        <Link href="/noticias">+ Notícias</Link>
        <Divider style={{ marginBottom: 5 }} />
        <Grid container spacing={2} style={{ marginBottom: 32 }}>
          {featuredPosts.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Link href="/eventos">+ Eventos</Link>
        <Divider style={{ marginBottom: 5 }} />
        <Grid spacing={2} container justify="space-between">
          {eventos.map((evento, index) => {
            return <EventosCard key={index} eventoInfo={evento} />;
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
