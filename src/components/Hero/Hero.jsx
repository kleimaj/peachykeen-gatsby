import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import PeachLogo from '../../assets/peachlogo.svg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <PeachLogo id="logo" />
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <nobr>
              <span className="text-color-main">{name || 'Your Name'}</span>
            </nobr>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
          <div className="social-links flex-start">
            {networks &&
              networks.map((network) => {
                const { id, name: networkName, url } = network;
                return (
                  <a
                    className="black"
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={networkName}
                  >
                    <i className={`fa fa-${networkName || 'refresh'} fa`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
