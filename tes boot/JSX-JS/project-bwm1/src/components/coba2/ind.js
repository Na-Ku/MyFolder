import React, { Component } from 'react'
import LCF from './LCF'

export default class Ind extends Component {

    constructor(p) {
        super(p)

        this.state = {
            isi: false
        }
    }

  render() {
    const {isi} = this.state
    return (
      <div>
        <h2>Contoh</h2>
        <hr/>
        <button onClick={ () => this.state({ isi : !isi }) }>
            {isi ? "Tampilkan" : "Sembunyikan"}
        </button>
        {isi && <LCF/>}
      </div>
    )
  }
}
