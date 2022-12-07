import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Info } from "./Info";
import { MusicCard } from "./MusicCard";

export const MainView = ({ search }) => {
  const [music, setMusic] = useState(null);
  const [info, setInfo] = useState("");
  const [recent, setRecent] = useState(null);
  const [favorties, setFavorites] = useState([]);

  const getMusic = () => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((data) => data.json())
      .then((music) => setMusic(music))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMusic();
  }, [favorties]);

  return (
    <Container className="d-flex justify-content-evenly">
      <Row
        className="row d-flex justify-content-center text-align-center"
        style={{ padding: "1rem", gap: "2rem" }}
      >
        {info ? (
          <Col
            className="col d-flex"
            xs={12}
            md={6}
            lg={{ order: "first" }}
            style={{
              flex: "1 0 0% ",
            }}
          >
            <Info info={info} setInfo={setInfo} music={music} recent={recent} />
          </Col>
        ) : (
          <div></div>
        )}
        {music && (
          <MusicCard
            music={music}
            setInfo={setInfo}
            recent={recent}
            setRecent={setRecent}
            search={search}
            favorties={favorties}
            setFavorites={setFavorites}
          />
        )}
      </Row>
    </Container>
  );
};
