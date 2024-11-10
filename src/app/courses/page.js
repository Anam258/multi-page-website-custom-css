import Head from "next/head";
import Image from "next/image";

export default function Courses() {
  return (
    <div className="container courses-container">
      <Head>
        <title>Our Courses - TMGS</title>
      </Head>
      <h1>Our Courses</h1>
      <p>
        We offer a variety of courses designed for different age groups and
        levels of education.
      </p>

      <div className="course-section">
        <h2>Pre-School</h2>
        <Image
          src="/images/pre-school.jpg"
          alt="Pre-School"
          width={400}
          height={250}
        />
        <ul>
          <li>Play Group</li>
          <li>Kindergarten 1</li>
          <li>Kindergarten 2</li>
        </ul>
      </div>

      <div className="course-section">
        <h2>Primary Education</h2>
        <Image
          src="/images/primary-education.jpg"
          alt="Primary Education"
          width={400}
          height={250}
        />
        <ul>
          <li>Grade 1</li>
          <li>Grade 2</li>
          <li>Grade 3</li>
          <li>Grade 4</li>
          <li>Grade 5</li>
        </ul>
      </div>

      <div className="course-section">
        <h2>Secondary Education</h2>
        <Image
          src="/images/secondary-education.jpg"
          alt="Secondary Education"
          width={400}
          height={250}
        />
        <ul>
          <li>Grade 6</li>
          <li>Grade 7</li>
          <li>Grade 8</li>
        </ul>
      </div>

      <div className="course-section">
        <h2>Board Classes</h2>
        <Image
          src="/images/board-classes.jpg"
          alt="Board Classes"
          width={400}
          height={250}
        />
        <ul>
          <li>Grade 9</li>
          <li>Grade 10</li>
        </ul>
      </div>
    </div>
  );
}
