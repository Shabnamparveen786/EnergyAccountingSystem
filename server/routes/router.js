const express = require("express");
const Circle = require("../models/circleSchema");
const router = express.Router();
const users = require("../models/userSchema");
const conn = require("../db/conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const {
    user_id,
    name,
    email,
    password,
    mobile,
    designation,
    division_id,
    subdivision_id,
    role,
    user_type,
    posting_location,
  } = req.body;

  if (
    !user_id ||
    !name ||
    !email ||
    !password ||
    !mobile ||
    !designation ||
    !division_id ||
    !subdivision_id ||
    !role ||
    !user_type ||
    !posting_location
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
      if (result.length) {
        res.status(422).json("This user is Already Exists");
      } else {
        conn.query(
          "INSERT INTO users SET ?",
          {
            user_id,
            name,
            email,
            password,
            mobile,
            designation,
            division_id,
            subdivision_id,
            role,
            user_type,
            posting_location,
          },
          (err, result) => {
            if (err) {
              console.log("err" + err);
            } else {
              res.status(201).json(req.body);
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(422).json(error);
  }
});

// router.post("/circle", async (req, res) => {
//   // console.log(req.body);
//   const { circleId, circlename } = req.body;
//   if (!circleId || !circlename) {
//     res.status(404).json("plz fill the data");
//   }
//   try {
//     const addCircle = new Circle({
//       circleId,
//       circlename,
//     });
//     await addCircle.save();
//     res.status(201).json(addCircle);
//     console.log(addCircle);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });
// router.post("/login", async (req, res) => {
//   console.log(req.body);

//   // const { user_id, password } = req.body;
//   // if (!user_id || !password)
//   //   return res.json({
//   //     status: "error",
//   //     error: "Please enter your user id and password ",
//   //   });

//   const user_id = req.body.user_id;
//   const password = req.body.password;

//   conn.query(
//     "SELECT * FROM users WHERE user_id = ? AND password =? ",
//     [user_id, password],
//     async (err, result) => {
//       if (result) console.log(result);
//       if (!result[0] || !(await bcrypt.compare(password, result[0].password)))
//         return res.json({
//           status: "error",
//           error: "Incorrect userid or password",
//         });
//       else {
//         const token = jwt.sign(
//           { user_id: result[0].user_id },
//           process.env.JWT_SECRET,
//           {
//             expiresIn: process.env.JWT_EXPIRES,
//             httpOnly: true,
//           }
//         );
//         const cookieOptions = {
//           expiresIn: new Date(
//             date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//           ),
//           httpOnly: true,
//         };
//         res.cookie("userRegistered", token, cookieOptions);
//         return res.json({
//           status: "success",
//           success: "User has been logged In",
//         });
//       }
//     }
//   );
// });

router.post("/login", async (req, res) => {
  const user_id = req.body.user_id;
  const password = req.body.password;

  conn.query(
    "SELECT * FROM users WHERE user_id = ? AND password =? ",
    [user_id, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length === 0) {
        return res.status(404).json("User not found");
      }
      //Check password
      const isPasswordCorrect = bcrypt.compare(
        req.body.password,
        result[0].password
      );

      if (!isPasswordCorrect)
        return res.status(400).json("Wrong userid and password");

      const token = jwt.sign({ user_id: result[0].user_id }, "jwtkey");
      const { password, ...other } = result[0];
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    }
  );
});

router.get("/register/", async (req, res) => {
  conn.query("SELECT * FROM users ", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
      // console.log(result[0].division_id);
      // const divisionId = result[0].division_id;
    }
  });
});

router.get("/login/:id", async (req, res) => {
  console.log("SELECT * FROM users where user_id=" + req.params.id);

  conn.query(
    "SELECT * FROM users where user_id='" + req.params.id + "'",
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/logout", async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
});

router.get("/division/", async (req, res) => {
  conn.query("SELECT * FROM division ", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/subdivision", async (req, res) => {
  conn.query("SELECT * FROM subdivision", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/subdivision/:id", async (req, res) => {
  console.log("SELECT * FROM subdivision where division_id=" + req.params.id);
  conn.query(
    "SELECT * FROM subdivision where div_id=" + req.params.id,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/substation", async (req, res) => {
  console.log(req.body);
  const { sub_div_id, substation_name, location, capacity } = req.body;

  if (!sub_div_id || !substation_name || !location || !capacity) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query(
      "INSERT INTO substation SET ?",
      {
        sub_div_id,
        substation_name,
        location,
        capacity,
      },
      (err, result) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/substation/:id", async (req, res) => {
  conn.query(
    "SELECT * FROM substation where sub_div_id=" + req.params.id,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/substationReading", async (req, res) => {
  // console.log(req.body);
  const {
    substationid,
    reading,
    sub_divId,
    month,
    year,
    created_date,
    createdby,
  } = req.body;

  console.log(req.body);
  // console.log(substation_id);

  if (
    !substationid ||
    !reading ||
    !sub_divId ||
    !month ||
    !year ||
    !created_date ||
    !createdby
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    query = `INSERT INTO substation_reading VALUES(${substationid}, ${reading}, ${sub_divId}, '${month}', '${year}','${created_date}', '${createdby}')`;
    console.log(query);
    conn.query(query, null, (err, result) => {
      if (err) {
        console.log("err" + err);
      } else {
        res.status(201).json(req.body);
      }
    });
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/substation/", async (req, res) => {
  conn.query("SELECT * FROM substation ", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/substationReading/", async (req, res) => {
  conn.query("SELECT * FROM substation_reading", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/substationReading/:id/:year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(reading) AS total_supplied FROM substation_reading WHERE substation_id=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year
  );
  conn.query(
    "SELECT SUM(reading) AS total_supplied FROM substation_reading WHERE substation_id=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/substationMonth/:substation_id/:month", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT * FROM substation_reading WHERE substation_id=" +
      req.params.substation_id +
      " " +
      "AND" +
      " " +
      "month=" +
      req.params.month
  );
  conn.query(
    "SELECT * FROM substation_reading WHERE substation_id=" +
      req.params.substation_id +
      " " +
      "AND" +
      " " +
      " " +
      "month=" +
      req.params.month,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

// router.get("/substationReading/:substation_id/:year", async (req, res) => {
//   console.log(typeof req.params.id);
//   console.log(req.params.id);

//   console.log(
//     "SELECT * FROM substation_reading WHERE substation_id=" +
//       req.params.substation_id +
//       " " +
//       "AND" +
//       " " +
//       "year=" +
//       req.params.year
//   );
//   conn.query(
//     "SELECT * FROM substation_reading WHERE substation_id=" +
//       req.params.substation_id +
//       " " +
//       "AND" +
//       " " +
//       "year=" +
//       req.params.year,

//     (err, result) => {
//       if (err) {
//         res.status(422).json("no data available");
//       } else {
//         res.status(201).json(result);
//       }
//     }
//   );
// });
// router.get("/substationReading/:month", async (req, res) => {
//   console.log(
//     "SELECT * FROM substation_reading WHERE month=" + req.params.month
//   );
//   conn.query(
//     "SELECT * FROM substation_reading WHERE month=" + req.params.month,

//     (err, result) => {
//       if (err) {
//         res.status(422).json("no data available");
//       } else {
//         res.status(201).json(result);
//       }
//     }
//   );
// });

router.post("/feeder", async (req, res) => {
  console.log(req.body);
  const { sub_div_id, substation_id, location, capacity } = req.body;

  if (!sub_div_id || !substation_id || !location || !capacity) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query(
      "INSERT INTO feeder SET ?",
      {
        sub_div_id,
        substation_id,
        location,
        capacity,
      },
      (err, result) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/feeder", async (req, res) => {
  conn.query("SELECT * FROM feeder", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/feeder/:id", async (req, res) => {
  conn.query(
    "SELECT * FROM feeder where sub_div_id=" + req.params.id,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/feederReading", async (req, res) => {
  // console.log(req.body);
  const {
    feeder_id,
    reading,
    sub_divId,
    location,
    month,
    year,
    createdby,
    created_date,
  } = req.body;

  console.log(req.body);
  // console.log(feeder_id);

  if (
    !feeder_id ||
    !reading ||
    !sub_divId ||
    !location ||
    !month ||
    !year ||
    !createdby ||
    !created_date
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    query = `INSERT INTO feeder_reading VALUES(${feeder_id}, ${reading}, ${sub_divId}, '${location}', '${month}', '${year}', '${createdby}','${created_date}')`;
    console.log(query);
    conn.query(query, null, (err, result) => {
      if (err) {
        console.log("err" + err);
      } else {
        res.status(201).json(req.body);
      }
    });
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/feederReading/:id/:year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(reading) AS total_supplied FROM feeder_reading WHERE feeder_id=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year
  );
  conn.query(
    "SELECT SUM(reading) AS total_supplied FROM feeder_reading WHERE feeder_id=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/FeederMonth/:feeder_id/:month", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT * FROM feeder_reading WHERE feeder_id=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "month=" +
      req.params.month
  );
  conn.query(
    "SELECT * FROM feeder_reading WHERE feeder_id=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "month=" +
      req.params.month,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/transformer", async (req, res) => {
  console.log(req.body);
  const { sub_div_id, feeder_id, location } = req.body;

  if (!sub_div_id || !feeder_id || !location) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query(
      "INSERT INTO transformer SET ?",
      {
        sub_div_id,
        feeder_id,
        location,
      },
      (err, result) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/transformer", async (req, res) => {
  conn.query("SELECT * FROM transformer", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/transformer/:id", async (req, res) => {
  console.log("SELECT * FROM transformer where sub_div_id=" + req.params.id);
  conn.query(
    "SELECT * FROM transformer where sub_div_id=" + req.params.id,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/transformerReading", async (req, res) => {
  console.log(req.body);
  const { dt_no, reading, subdiv_id, month, year, created_by, created_date } =
    req.body;

  if (
    !dt_no ||
    !reading ||
    !subdiv_id ||
    !month ||
    !year ||
    !created_by ||
    !created_date
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query(
      "INSERT INTO dt_reading SET ?",
      {
        dt_no,
        reading,
        subdiv_id,
        month,
        year,
        created_by,
        created_date,
      },
      (err, result) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/transformerReading/", async (req, res) => {
  conn.query("SELECT * FROM dt_reading", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

router.get("/transformerReading/:id/:year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(reading) AS total_supplied FROM dt_reading WHERE dt_no=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year
  );
  conn.query(
    "SELECT SUM(reading) AS total_supplied FROM dt_reading WHERE dt_no=" +
      req.params.id +
      " " +
      "AND" +
      " " +
      "year=" +
      req.params.year,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/TransformerMonth/:Dt_id/:month", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT * FROM dt_reading WHERE dt_no=" +
      req.params.Dt_id +
      " " +
      "AND" +
      " " +
      "month=" +
      req.params.month
  );
  conn.query(
    "SELECT * FROM dt_reading WHERE dt_no=" +
      req.params.Dt_id +
      " " +
      "AND" +
      " " +
      "month=" +
      req.params.month,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.post("/consumer/", async (req, res) => {
  console.log(req.body);
  const {
    consumer_id,
    acc_no,
    subdivision_id,
    division_id,
    section,
    dt_code,
    feeder_code,
    substation_code,
    consumer_name,
    address,
    mobile,
    email,
    tariff,
    load,
  } = req.body;
  try {
    conn.query(
      "INSERT INTO consumer SET ?",
      {
        consumer_id,
        acc_no,
        subdivision_id,
        division_id,
        section,
        dt_code,
        feeder_code,
        substation_code,
        consumer_name,
        address,
        mobile,
        email,
        tariff,
        load,
      },
      (err, res) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/consumer/", async (req, res) => {
  conn.query("SELECT * FROM consumer ", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
      // console.log(result[0].division_id);
      // const divisionId = result[0].division_id;
    }
  });
});

router.post("/invoice", async (req, res) => {
  console.log(req.body);
  const {
    invoice_no,
    consumer_id,
    sub_div_id,
    substationId,
    feederId,
    Dt_Id,
    bill_month,
    bill_year,
    bill_date,
    unit_consumed,
    prev_unit,
    current_unit,
    gross_amount,
    net_amount,
    tariff,
  } = req.body;

  if (
    !invoice_no ||
    !consumer_id ||
    !sub_div_id ||
    !substationId ||
    !feederId ||
    !Dt_Id ||
    !bill_month ||
    !bill_year ||
    !bill_date ||
    !unit_consumed ||
    !prev_unit ||
    !current_unit ||
    !gross_amount ||
    !net_amount ||
    !tariff
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    conn.query(
      "INSERT INTO invoice SET ?",
      {
        invoice_no,
        consumer_id,
        sub_div_id,
        substationId,
        feederId,
        Dt_Id,
        bill_month,
        bill_year,
        bill_date,
        unit_consumed,
        prev_unit,
        current_unit,
        gross_amount,
        net_amount,
        tariff,
      },
      (err, result) => {
        if (err) {
          console.log("err" + err);
        } else {
          res.status(201).json(req.body);
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/invoice/", async (req, res) => {
  conn.query("SELECT * FROM invoice ", (err, result) => {
    if (err) {
      res.status(422).json("no data available");
    } else {
      res.status(201).json(result);
    }
  });
});

// router.get(
//   "/invoice/:feeder_id/:substation_id/:bill_year",
//   async (req, res) => {
//     console.log(typeof req.params.id);
//     console.log(req.params.id);

//     console.log(
//       "SELECT SUM(unit_consumed) AS total_unit FROM invoice WHERE feederId=" +
//         req.params.feeder_id +
//         "IN (SELECT feeder_id from feeder where substation_id =" +
//         req.params.substation_id +
//         ") AND bill_year=" +
//         req.params.bill_year
//     );
//     conn.query(
//       "SELECT SUM(unit_consumed) AS total_unit FROM invoice WHERE feederId=" +
//         " " +
//         req.params.feeder_id +
//         " " +
//         "IN (SELECT feeder_id from feeder where substation_id =" +
//         req.params.substation_id +
//         ") AND bill_year=" +
//         req.params.bill_year,

//       (err, result) => {
//         if (err) {
//           res.status(422).json("no data available");
//         } else {
//           console.log(result);
//           res.status(201).json(result);
//         }
//       }
//     );
//   }
// );
router.get("/invoiceTransformer/:Dt_Id/:bill_year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(unit_consumed) AS total_unit1, Dt_Id,substationId, bill_year, feederId FROM invoice WHERE Dt_Id=" +
      req.params.Dt_Id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year
  );
  conn.query(
    "SELECT SUM(unit_consumed) AS total_unit1, substationId, bill_year, feederId, Dt_Id FROM invoice WHERE Dt_Id=" +
      req.params.Dt_Id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/invoiceSubstation/:substation_id/:bill_year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(unit_consumed) AS total_unit1, substationId, bill_year, feederId FROM invoice WHERE substation_id=" +
      req.params.substation_id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year
  );
  conn.query(
    "SELECT SUM(unit_consumed) AS total_unit1, substationId, bill_year, feederId FROM invoice WHERE substationId=" +
      req.params.substation_id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/invoiceFeeder/:feeder_id/:bill_year", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT SUM(unit_consumed) AS total_unit1, substationId, bill_year, feederId FROM invoice WHERE feederId=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year
  );
  conn.query(
    "SELECT SUM(unit_consumed) AS total_unit1, substationId, bill_year, feederId FROM invoice WHERE feederId=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "bill_year=" +
      req.params.bill_year,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});
// monthly report api

router.get(
  "/invoiceMonthlySubstation/:substation_id/:month",
  async (req, res) => {
    console.log(typeof req.params.id);
    console.log(req.params.id);

    console.log(
      "SELECT unit_consumed FROM invoice WHERE substationId=" +
        req.params.substation_id +
        " " +
        "AND" +
        " " +
        "bill_month=" +
        req.params.month
    );
    conn.query(
      "SELECT unit_consumed FROM invoice WHERE substationId=" +
        req.params.substation_id +
        " " +
        "AND" +
        " " +
        "bill_month=" +
        req.params.month,

      (err, result) => {
        if (err) {
          res.status(422).json("no data available");
        } else {
          res.status(201).json(result);
        }
      }
    );
  }
);

router.get("/invoiceMonthlyFeeder/:feeder_id/:month", async (req, res) => {
  console.log(typeof req.params.id);
  console.log(req.params.id);

  console.log(
    "SELECT unit_consumed FROM invoice WHERE feederId=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "bill_month=" +
      req.params.month
  );
  conn.query(
    "SELECT unit_consumed FROM invoice WHERE feederId=" +
      req.params.feeder_id +
      " " +
      "AND" +
      " " +
      "bill_month=" +
      req.params.month,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.get("/invoiceMonthlyTransformer/:Dt_id/:month", async (req, res) => {
  console.log(typeof req.params.Dt_id);
  console.log(req.params.id);

  console.log(
    "SELECT unit_consumed FROM invoice WHERE Dt_Id=" +
      req.params.Dt_id +
      " " +
      "AND" +
      " " +
      "bill_month=" +
      req.params.month
  );
  conn.query(
    "SELECT unit_consumed FROM invoice WHERE Dt_Id=" +
      req.params.Dt_id +
      " " +
      "AND" +
      " " +
      "bill_month=" +
      req.params.month,

    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

//api for updating the user password
router.put("/register/:password/:u_id", async (req, res) => {
  console.log(
    "UPDATE users SET password =" +
      req.params.password +
      " " +
      "where user_id=" +
      req.params.u_id
  );
  conn.query(
    "UPDATE users SET password =" +
      req.params.password +
      " " +
      "where user_id=" +
      req.params.u_id,
    (err, result) => {
      if (err) {
        res.status(422).json("no data available");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

module.exports = router;
