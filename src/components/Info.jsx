import React from "react";
import { Container, Card, Link } from "react-bootstrap";
import { RecentlyViewed } from "./RecentlyViewed";

export const Info = ({ info, recent, setInfo, music }) => {
  console.log(info);
  return (
    <Container className="col">
      <Card className="info-card" key={info.id} style={{ width: "30rem" }}>
        <Card.Img variant="top" src={info["im:image"][2].label} />

        <Card.Body>
          <div
            className="d-flex flex-row justify-content-between"
            style={{ margin: "0 1rem" }}
          >
            <div className="info-title">
              <h6>Album</h6>
              <Card.Title>{info["im:name"].label}</Card.Title>
            </div>
            <div className="info-title">
              <h6>Artist</h6>
              <Card.Text>{info["im:artist"].label}</Card.Text>
            </div>
          </div>
          <div
            className="d-flex flex-row justify-content-between"
            style={{ margin: "0 1rem" }}
          >
            <div className="info-title">
              <h6>Released</h6>
              <Card.Text>{info["im:releaseDate"].attributes.label}</Card.Text>
            </div>
            <div className="info-title">
              <h6>Price</h6>
              <Card.Text className="rights">
                {info["im:price"].attributes.currency === "USD" ? "$" : ""}{" "}
                {info["im:price"].attributes.amount}
              </Card.Text>
            </div>
          </div>
          <div
            className="d-flex flex-row justify-content-between"
            style={{ margin: "0 1rem" }}
          >
            <div className="info-title">
              <h6>Rights</h6>
              <Card.Text className="rights">{info.rights.label}</Card.Text>
            </div>

            <a
              href={info.link.attributes.href}
              target="_blank"
              rel="noreferrer"
            >
              Listen Now
            </a>
          </div>
        </Card.Body>
      </Card>
      {recent && (
        <RecentlyViewed
          info={info}
          setInfo={setInfo}
          music={music}
          recent={recent}
        />
      )}
    </Container>
  );
};
