import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let referrals = [
  {
    id: 1,
    firstName: "John",
    surname: "Johnson",
    email: "jh@email121.com",
    phone: "0453-283-283",
    homeName: "12A",
    street: "Main St",
    suburb: "Central",
    state: "NSW",
    postcode: "2000",
    country: "Australia",
  },
  {
    id: 2,
    firstName: "Matthew",
    surname: "Lombard",
    email: "mat197501@gmail.com",
    phone: "0453-283-283",
    homeName: "22B",
    street: "King St",
    suburb: "Westside",
    state: "VIC",
    postcode: "3000",
    country: "Australia",
  },
  {
    id: 3,
    firstName: "Joe",
    surname: "Dickson",
    email: "joe@dickson.com",
    phone: "0453-283-283",
    homeName: "7",
    street: "Queen St",
    suburb: "Northville",
    state: "QLD",
    postcode: "4000",
    country: "Australia",
  },
  {
    id: 4,
    firstName: "Scarlet",
    surname: "Johnson",
    email: "scarlet@johnson.com",
    phone: "0453-283-283",
    homeName: "15C",
    street: "George St",
    suburb: "Eastend",
    state: "SA",
    postcode: "5000",
    country: "Australia",
  },
  {
    id: 5,
    firstName: "Peter",
    surname: "Rhonda",
    email: "peter101@yahoo.com",
    phone: "0453-283-283",
    homeName: "9",
    street: "Elizabeth St",
    suburb: "Southtown",
    state: "WA",
    postcode: "6000",
    country: "Australia",
  },
];

app.get("/api/referrals", (req, res) => {
  res.json(referrals);
});

app.post("/api/referrals", (req, res) => {
  const payload = req.body || {};
  const record = { id: referrals[referrals.length - 1]["id"] + 1, ...payload };
  referrals.push(record);
  res.status(201).json({
    success: true,
    message: "Referral created successfully",
  });
});

app.put("/api/referrals/:id", (req, res) => {
  const { id } = req.params;
  const payload = req.body || {};

  const index = referrals.findIndex((r) => r.id === parseInt(id, 10));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Referral not found",
    });
  }

  referrals[index] = { ...referrals[index], ...payload };

  res.json(referrals);
});

app.delete("/api/referrals/:id", (req, res) => {
  const { id } = req.params;
  const index = referrals.findIndex((r) => r.id === parseInt(id));

  if (index !== -1) {
    referrals.splice(index, 1);
    res.json(referrals);
  } else {
    res.status(404).json({ success: false, message: "Referral not found" });
  }
});


app.listen(PORT, () => console.log("Server listening on", PORT));
