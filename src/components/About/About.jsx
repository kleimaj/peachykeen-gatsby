import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

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
    <section id="about">
      <Container>
        <Title title="About Us" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="band profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Once upon a time in a desert in Northern Los Angeles lived four funky heebs and one guinea. They participated in high school choir, where they went on to find their passion in music. Years after graduating, studying music, computer science, nannying (among other things), they reconnected to create a special sound.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "These characters weren't your average band, they found influence in R&B, funk, soul music, especially the sound of Motown music. They released their self-entitled EP during the start of quarantine, and they're ready to share all of their new music with you today."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'They stand out from your average band, because they are friends, family, they are Peachy Keen.'}
                </p>

                <span className="d-flex mt-3">
                  <Link smooth duration={1000} className="cta-btn cta-btn--resume" to="contact">
                    Contact Us!
                  </Link>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
