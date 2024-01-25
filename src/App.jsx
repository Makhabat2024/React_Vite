import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("10");

  console.log(input);
  const getData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const responseData = await response.json();

      const filterData = await responseData.results.filter(
        (item) => item.id <= input
      );
      console.log(responseData);
      console.log(filterData);
      setData(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, [input]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        onClick={() => {
          getData();
        }}
      >
        update
      </button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <p>{item.gender}</p>
            <img src={item.image} alt="" style={{ width: "200px" }} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
