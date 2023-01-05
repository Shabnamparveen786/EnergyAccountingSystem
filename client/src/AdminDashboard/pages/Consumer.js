import React, { useContext, useEffect } from "react";
import { useState } from "react";

const Consumer = () => {
  const [getconsumer, setConsumer] = useState([]);
  useEffect(() => {
    const getconsumerData = async () => {
      const res = await fetch("/consumer", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        setConsumer(data);
        console.log("get data");
      }
    };

    getconsumerData();
  }, []);
};

export default Consumer;
