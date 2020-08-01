import React from "react";

import bioImage from "../images/bio2.jpg";

function Header() {
  return (
    <div className="background mx-auto text-center">
      <img
        src={bioImage}
        className="logo mx-auto"
        alt="Jason Mangin kayaking with his kids"
      />
      <h1 className="mx-auto">jason mangin</h1>
    </div>
  );
}

export default Header;