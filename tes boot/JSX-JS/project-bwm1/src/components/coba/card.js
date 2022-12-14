import { useState } from "react";

const Cards = () => {
  let [getMtr, setMtr] = useState({
    // Object dalam bentuk Property
    makan: "belum",
    minum: "belum",
    energi: 50,

    // Object dalam bentuk Function
    tambah: () => {
      setMtr((data) => {
        return {
          ...data,
          makan: "sudah",
          energi: data.energi + 25,
        };
      });
    },
    reset: () => {
      setMtr((data) => {
        return {
          ...data,
          makan: "belum",
          energi: 50,
        };
      });
    },
  });

  return (
    <div className="row">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Ini adalah contoh</p>
            <ul>
              <li>Makan : {getMtr.makan}</li>
              <li>Minum : {getMtr.minum}</li>
              <li>Energi : {getMtr.energi}</li>
            </ul>
            <button onClick={() => getMtr.tambah()} type="button" className="btn btn-outline-warning">
              Tambah Energi
            </button>
            <button onClick={() => getMtr.reset()} type="button" className="btn btn-outline-warning">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
