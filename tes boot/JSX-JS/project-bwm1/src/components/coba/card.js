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
  });

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
