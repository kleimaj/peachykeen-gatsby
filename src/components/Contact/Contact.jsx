import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { navigate } from 'gatsby';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function encode(data) {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...name,
        ...email,
        ...subject,
        ...message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => {
        alert(error);
        navigate('/404');
      });
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to have us play? Awesome!'}
            </p>
            <Form
              className="form mb-5"
              method="post"
              action="/submit/"
              name="Contact Form"
              // data-netlify-recaptcha="true"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <FormGroup>
                <FormLabel lg="3">Name</FormLabel>
                <FormControl
                  size="lg"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  size="lg"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormControl
                  size="lg"
                  type="text"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormControl
                  size="lg"
                  as="textarea"
                  rows={5}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                />
              </FormGroup>
              {/* <FormGroup>
                <div data-netlify-recaptcha="true"></div>
              </FormGroup> */}
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
