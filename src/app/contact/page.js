import Head from "next/head";

export default function Contact() {
  return (
    <div className="container contact-container">
      <Head>
        <title>Contact Us - TMGS</title>
      </Head>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Please reach out using the form below:
      </p>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>
          <strong>Address:</strong> Muslim Town Karachi, Pakistan
        </p>
        <p>
          <strong>Phone:</strong> 0301-2440210
        </p>
        <p>
          <strong>Email:</strong> anam@themgschool.com
        </p>
      </div>
    </div>
  );
}
