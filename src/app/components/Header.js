import Link from "next/link";

export default function Header() {
  return (
    <header>
       <div className="logo-container">
      <img src="logo.png" alt="School Logo" />
      <h1>TMGS</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
