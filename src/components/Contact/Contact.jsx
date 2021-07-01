import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to have us play? Awesome!'}
            </p>
            <Form className="form mb-5" action="POST" data-netlify="true">
              <FormGroup>
                <FormLabel lg="3">Name</FormLabel>
                <FormControl size="lg" type="text" name="name" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl size="lg" type="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormControl size="lg" type="text" name="subject" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormControl size="lg" as="textarea" rows={5} name="message" required />
              </FormGroup>
              <FormGroup>
                <div data-netlify-recaptcha="true" />
              </FormGroup>
              <input
                className="input-btn cta-btn cta-btn--resume"
                type="submit"
                value="Send Message"
              />
            </Form>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
