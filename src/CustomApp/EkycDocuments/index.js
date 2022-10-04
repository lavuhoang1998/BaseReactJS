import { useEffect, useState } from "react";
import axios from "axios";
// const axios = require('axios').default;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://webcode.me")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>Ekyc Documents</div>
      <div>{data}</div>
    </div>
    );
};
export default App;
