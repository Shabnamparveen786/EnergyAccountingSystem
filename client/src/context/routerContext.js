import { createContext } from "react";

// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const [totalsupply, setTotalSupply] = useState(
    JSON.parse(localStorage.getItem("totalsupply")) || null
  );
  const [readingdata, setReadingData] = useState(
    JSON.parse(localStorage.getItem("reedingdata")) || null
  );

  const [feederreadingdata, setFeederReadingData] = useState(
    JSON.parse(localStorage.getItem("feederreadingdata")) || null
  );

  const [invoicefeederreading, setInvoiceFeederReading] = useState(
    JSON.parse(localStorage.getItem("invoicefeederreading")) || null
  );
  const [transformerreadingdata, setTransformerReadingData] = useState(
    JSON.parse(localStorage.getItem("transformerreadingdata")) || null
  );
  const [invoicetransformerreading, setInvoiceTransformerReading] = useState(
    JSON.parse(localStorage.getItem("invoicetransformerreading")) || null
  );

  const [monthlysubstation, setMonthlySubstation] = useState(
    JSON.parse(localStorage.getItem("monthlysubstation")) || null
  );

  const [invoicemonthlysubstation, setInvoiceMonthlySubstation] = useState(
    JSON.parse(localStorage.getItem("invoicemonthlysubstation")) || null
  );

  const [monthlyfeeder, setMonthlyFeeder] = useState(
    JSON.parse(localStorage.getItem("monthlyfeeder")) || null
  );

  const [invoicemonthlyfeeder, setInvoiceMonthlyFeeder] = useState(
    JSON.parse(localStorage.getItem("invoicemonthlyfeeder")) || null
  );

  const [monthlytransformer, setMonthlyTransformer] = useState(
    JSON.parse(localStorage.getItem("monthlytransformer")) || null
  );

  const [invoicemonthlytransformer, setInvoiceMonthlyTransformer] = useState(
    JSON.parse(localStorage.getItem("invoicemonthlytransformer")) || null
  );
  const login = async (user_id, password) => {
    const res = await axios.post(
      "/login",
      JSON.stringify({ user_id, password }),
      {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }
    );

    setCurrentUser(res.data);
    console.log(currentUser);
  };
  const substationreading = async (substation_id, year) => {
    const res = await axios.get(
      "/substationReading/ " + substation_id + "/" + year,
      JSON.stringify({ substation_id, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setTotalSupply(res.data);
    console.log(totalsupply);
  };

  const feederreading = async (feeder_id, year) => {
    const res = await axios.get(
      "/feederReading/ " + feeder_id + "/" + year,
      JSON.stringify({ feeder_id, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setFeederReadingData(res.data);
    console.log(feederreading);
  };

  const transformerreading = async (Dt_no, year) => {
    const res = await axios.get(
      "/transformerReading/ " + Dt_no + "/" + year,
      JSON.stringify({ Dt_no, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setTransformerReadingData(res.data);
    console.log(transformerreadingdata);
  };

  const invoicedata = async (substation_id, year) => {
    const res = await axios.get(
      "/invoiceSubstation/ " + substation_id + "/" + year,
      JSON.stringify({ substation_id, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setReadingData(res.data);
    console.log(readingdata);
  };

  const invoicefeederdata = async (feeder_id, year) => {
    const res = await axios.get(
      "/invoiceFeeder/ " + feeder_id + "/" + year,
      JSON.stringify({ feeder_id, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setInvoiceFeederReading(res.data);
    console.log(invoicefeederreading);
  };

  const invoicetransformerdata = async (Dt_no, year) => {
    const res = await axios.get(
      "/invoiceTransformer/ " + Dt_no + "/" + year,
      JSON.stringify({ Dt_no, year }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    setInvoiceTransformerReading(res.data);
    console.log(invoicetransformerreading);
  };
  //Monthly report

  const substationMonth = async (substation_id, month) => {
    const res = await axios.get(
      "/substationMonth/ " + substation_id + "/" + month,
      JSON.stringify({ substation_id, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setMonthlySubstation(res.data);
    console.log(monthlysubstation);
  };

  const feederMonth = async (feeder_id, month) => {
    const res = await axios.get(
      "/FeederMonth/ " + feeder_id + "/" + month,
      JSON.stringify({ feeder_id, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setMonthlyFeeder(res.data);
    console.log(monthlyfeeder);
  };

  const transformerMonth = async (Dt_no, month) => {
    const res = await axios.get(
      "/TransformerMonth/ " + Dt_no + "/" + month,
      JSON.stringify({ Dt_no, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setMonthlyTransformer(res.data);
    console.log(monthlytransformer);
  };
  const invoicesubstationMonth = async (substation_id, month) => {
    const res = await axios.get(
      "/invoiceMonthlySubstation/ " + substation_id + "/" + month,
      JSON.stringify({ substation_id, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setInvoiceMonthlySubstation(res.data);
    console.log(invoicemonthlysubstation);
  };

  const invoicefeederMonth = async (feeder_id, month) => {
    const res = await axios.get(
      "/invoiceMonthlyFeeder/ " + feeder_id + "/" + month,
      JSON.stringify({ feeder_id, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setInvoiceMonthlyFeeder(res.data);
    console.log(invoicemonthlyfeeder);
  };

  const invoicetransformerMonth = async (Dt_no, month) => {
    const res = await axios.get(
      "/invoiceMonthlyTransformer/ " + Dt_no + "/" + month,
      JSON.stringify({ Dt_no, month }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setInvoiceMonthlyTransformer(res.data);
    console.log(invoicemonthlytransformer);
  };
  const logout = async (user_id, password) => {
    // await axios.post("/logout");
    await axios.post("/logout", JSON.stringify({}), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("totalsupply", JSON.stringify(totalsupply));
  }, [totalsupply]);
  useEffect(() => {
    localStorage.setItem("readingdata", JSON.stringify(readingdata));
  }, [readingdata]);

  useEffect(() => {
    localStorage.setItem(
      "feederreadingdata",
      JSON.stringify(feederreadingdata)
    );
  }, [feederreadingdata]);
  useEffect(() => {
    localStorage.setItem(
      "invoicefeederreading",
      JSON.stringify(invoicefeederreading)
    );
  }, [invoicefeederreading]);

  useEffect(() => {
    localStorage.setItem(
      "transformerreadingdata",
      JSON.stringify(transformerreadingdata)
    );
  }, [transformerreadingdata]);

  useEffect(() => {
    localStorage.setItem(
      "invoicetransformerreading",
      JSON.stringify(invoicetransformerreading)
    );
  }, [invoicetransformerreading]);

  useEffect(() => {
    localStorage.setItem(
      "monthlysubstation",
      JSON.stringify(monthlysubstation)
    );
  }, [monthlysubstation]);

  useEffect(() => {
    localStorage.setItem(
      "invoicemonthlysubstation",
      JSON.stringify(invoicemonthlysubstation)
    );
  }, [invoicemonthlysubstation]);
  useEffect(() => {
    localStorage.setItem("monthlyfeeder", JSON.stringify(monthlyfeeder));
  }, [monthlyfeeder]);
  useEffect(() => {
    localStorage.setItem(
      "invoicemonthlyfeeder",
      JSON.stringify(invoicemonthlyfeeder)
    );
  }, [invoicemonthlyfeeder]);

  useEffect(() => {
    localStorage.setItem(
      "monthlytransformer",
      JSON.stringify(monthlytransformer)
    );
  }, [monthlytransformer]);

  useEffect(() => {
    localStorage.setItem(
      "invoicemonthlytransformer",
      JSON.stringify(invoicemonthlytransformer)
    );
  }, [invoicemonthlytransformer]);
  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser,
          login,
          logout,
          totalsupply,
          substationreading,
          readingdata,
          invoicedata,
          feederreadingdata,
          feederreading,
          invoicefeederreading,
          invoicefeederdata,
          transformerreadingdata,
          transformerreading,
          invoicetransformerreading,
          invoicetransformerdata,
          monthlysubstation,
          substationMonth,
          invoicemonthlysubstation,
          invoicesubstationMonth,
          monthlyfeeder,
          feederMonth,
          invoicemonthlyfeeder,
          invoicefeederMonth,
          monthlytransformer,
          transformerMonth,
          invoicemonthlytransformer,
          invoicetransformerMonth,
        }}
      >
        {children}
      </AuthContext.Provider>
      {/* <AuthContext.Provider value={{ totalsupply, substationreading }}>
      {children}
    </AuthContext.Provider> */}
    </>
  );
};
