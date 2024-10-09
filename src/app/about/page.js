import Head from "next/head";

export default function About() {
  return (
    <div className="container about-container">
      <Head>
        <title>About Us - TMGS</title>
      </Head>
      <h1>About The Muslim Generation School</h1>
      <p>
        With over <strong>23 years of excellence in education</strong>, The
        Muslim Generation School has been committed to providing quality
        education based on Islamic ideology. Our mission is to foster a
        nurturing environment where students can thrive academically while
        developing their moral character and spiritual values.
      </p>
      <p>
        We believe in holistic education, integrating both traditional academic
        subjects and Islamic teachings to shape well-rounded individuals ready
        to face the challenges of the modern world. Our dedicated faculty is
        passionate about guiding students to reach their full potential.
      </p>
      <p>
        Join us in our journey to empower the next generation with knowledge,
        faith, and integrity.
      </p>

      {/* Image Section */}
      <div className="about-images">
        <img src="/images/image1.jpg" alt="Classroom Activities" />
        <img src="/images/image2.jpg" alt="Community Service" />
        <img src="/images/image3.jpg" alt="School Events" />
      </div>
    </div>
  );
}
