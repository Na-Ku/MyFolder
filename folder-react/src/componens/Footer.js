import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h4>License</h4>
        <marquee>percobaan pertama</marquee>
        {this.props.Paraf()}
      </footer>
    );
  }
}

export default Footer;
