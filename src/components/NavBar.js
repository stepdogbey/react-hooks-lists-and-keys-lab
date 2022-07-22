import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      <a href="#home" key={links["home"]}>
        home
      </a>
      <a href="#about" key={links["about"]}>
        about
      </a>
      <a href="#projects" key={links["projects"]}>
        projects
      </a>
    </nav>
  );
}

export default NavBar;
