import '../css/Contact.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Drop me a message.</p>

      <div className="contact-body">
        <ContactForm />
        <p className="contact-alt">
          Prefer LinkedIn?{' '}
          <a
            href="https://www.linkedin.com/in/bedirhan-aktas-7614ab423/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me there
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Contact;
