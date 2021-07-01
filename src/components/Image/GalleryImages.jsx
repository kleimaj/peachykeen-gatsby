import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GalleryImages = ({ isDesktop, isMobile }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "gallery" }
          }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      //   const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      //   if (!image) return null;
      return data.images.edges
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .map((image) => {
          const imageFluid = image.node.childImageSharp.fluid;
          const { src } = imageFluid;
          return (
            <Col lg={4} sm={6} xs={12} key={image.id} style={{ paddingTop: 25, paddingBottom: 25 }}>
              <Fade bottom={isDesktop || isMobile} duration={1000} delay={1000} distance="30px">
                <div className="project-wrapper__image">
                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <div data-tilt className="thumbnail rounded" />
                    <a href={src}>
                      <Img alt="Gallery Photo" fluid={imageFluid} />
                    </a>
                  </Tilt>
                </div>
              </Fade>
            </Col>
          );
        });
    }}
  />
);

GalleryImages.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
};

export default GalleryImages;
