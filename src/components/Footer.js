import React, { Component } from "react";
import LeftItems from "./LeftItems";
import Filters from "./Filters";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <LeftItems />
        <Filters />
      </footer>
    );
  }
}

export default Footer;
