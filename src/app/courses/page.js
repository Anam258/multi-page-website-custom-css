import Head from "next/head";

export default function Courses() {
  return (
    <div className="container courses-container">
      <Head>
        <title>Our Courses - TMGS</title>
      </Head>
      <h1>Our Courses</h1>
      <p>
        At The Muslim Generation School, we offer a comprehensive range of
        courses designed to cater to different age groups and educational needs.
      </p>

      <div className="course-section">
        <h2>Pre-School</h2>
        <ul>
          <li>Play Group</li>
          <li>Kindergarten 1</li>
          <li>Kindergarten 2</li>
        </ul>
      </div>

      <div className="course-section">
        <h2>Primary Education</h2>
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
        <ul>
          <li>Grade 6</li>
          <li>Grade 7</li>
          <li>Grade 8</li>
        </ul>
      </div>

      <div className="course-section">
        <h2>Board Classes</h2>
        <ul>
          <li>Grade 9</li>
          <li>Grade 10</li>
        </ul>
      </div>
    </div>
  );
}
