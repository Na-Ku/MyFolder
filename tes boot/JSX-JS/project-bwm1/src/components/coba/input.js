import React from "react";

class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "Text",
    };
  }

  teks(t) {
    this.setState({ nama: t.target.value });
  }

  render() {
    return (
      <div>
        <h2>Tulis Pesan di bawah ini </h2>
        <p>Teks : {this.state.nama}</p>
        <input onChange={this.teks.bind(this)} />
      </div>
    );
  }
}

export default Inputs;
