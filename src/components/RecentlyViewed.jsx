import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

export const RecentlyViewed = ({ recent, setInfo, music }) => {
  const handleClick = (recentArtist) => {
    music.feed.entry.forEach((art) => {
      if (art["im:image"][2].label === recentArtist) {
        setInfo(art);
      }
    });
  };

  return (
    <Container className="recent">
      <h4>Recently Viewed</h4>
      <div className="d-flex flex-wrap">
        <Row xs={3} md={3}>
          {recent
            .filter((a, pos, arr) => arr.indexOf(a) == pos)
            .slice(0, 6)
            .map((art, i) => (
              <Col>
                <Card key={i} style={{ width: "8rem" }}>
                  <Card.Img
                    onClick={() => handleClick(art)}
                    variant="top"
                    src={art}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  );
};
