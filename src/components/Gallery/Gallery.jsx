import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import GalleryImages from '../Image/GalleryImages';

const Gallery = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container fluid>
        <div className="project-wrapper">
          <Title title="Gallery" />
          <Row>
            <GalleryImages isDesktop={isDesktop} isMobile={isMobile} />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
