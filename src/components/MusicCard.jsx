import React, { useState } from "react";
import { Container, Card, Button, Col } from "react-bootstrap";

export const MusicCard = ({
  music,
  setInfo,
  recent,
  setRecent,
  search,
  favorties,
}) => {
  const artists = music.feed.entry;
  console.log(artists);

  const handleInfo = (artist) => {
    setInfo(artist);
    if (!recent) {
      setRecent([artist["im:image"][2].label]);
    } else {
      recent.unshift(artist["im:image"][2].label);
    }
  };

  // Filters timers when search input changes
  let filteredArtist = artists;

  if (search !== "") {
    let regex = new RegExp(search, "gi");
    filteredArtist = artists.filter((art) => {
      // search by artist
      if (art["im:artist"].label.match(regex)) {
        return art["im:artist"].label.match(regex);
      }
      // search by album
      if (art["im:name"].label.match(regex)) {
        return art["im:name"].label.match(regex);
      }
    });
  }

  const handleClick = (art, event) => {
    console.log(art, event);
    switch (event.detail) {
      case 1: {
        handleInfo(art);
        return;
      }
      case 2: {
        alert("Added to Favorites");
        favorties.push(art.id.attributes["im:id"]);
        console.log({ favorties });
        break;
      }
      default: {
        break;
      }
    }
  };

  const styles = {
    background:
      "linear-gradient(white, white) padding-box linear-gradient(#64e6d5 #62e7bf) border-box",
    borderRadius: "10px",
    border: "4px solid transparent",
  };

  return (
    <Col
      className="col d-flex flex-column align-items-center music-scroll"
      xs={12}
      md={4}
    >
      {filteredArtist.map((art, i) => (
        <div
          onClick={(event) => handleClick(art, event)}
          className="artist-container"
          style={
            favorties.includes(art.id.attributes["im:id"]) ? { styles } : {}
          }
        >
          <Card className="artist-card" key={art.id} style={{ width: "25rem" }}>
            <div className="album-img">
              <Card.Img variant="top" src={art["im:image"][2].label} />
            </div>
            <Card.Body style={{ padding: "1rem .5rem 0 0" }}>
              <Card.Title>{art["im:name"].label}</Card.Title>
              <Card.Text>{art["im:artist"].label}</Card.Text>

              <Button variant="primary" onClick={() => handleInfo(art)}>
                Info
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Col>
  );
};
