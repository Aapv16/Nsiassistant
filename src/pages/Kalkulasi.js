import { useState } from "react";

const Kalkulasi = () => {
  const [count, setCount] = useState(0);

  // let count = 0;

  const handleDecrement = () => {
    // alert("hallo");
    // count -= 1;
    setCount(count - 1);
  };
  const handleIncrement = () => {
    // alert("hallo viky");
    // count++;
    // count += 1;
    // count = count + 1
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto d-flex">
      <button onClick={handleDecrement} className="btn btn-primary">
        Kurang
      </button>

      <p className="text-center my-auto mx-5">{count}</p>

      <button onClick={handleIncrement} className="btn btn-primary">
        Tambah
      </button>
    </div>
  );
};

export default Kalkulasi;
