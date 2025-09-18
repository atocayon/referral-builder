import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let referrals = [
    {
        id: 1, firstName: "John", surname: "Johnson", email: "jh@email121.com", phone: "0453-283-283"
    },
    {
        id: 2, firstName: "Matthew", surname: "Lombard", email: "mat197501@gmail.com", phone: "0453-283-283"
    },
    {
        id: 3, firstName: "Joe", surname: "Dickson", email: "joe@dickson.com", phone: "0453-283-283"
    },
    {
        id: 4, firstName: "Scarlet", surname: "Johnson", email: "scarlet@johnson.com", phone: "0453-283-283"
    },
    {
        id: 5, firstName: "Peter", surname: "Rhonda", email: "peter101@yahoo.com", phone: "0453-283-283"
    }
];


app.get("/api/referrals", (req, res) => {
  res.json(referrals);
});

app.post("/api/referrals", (req, res) => {
  const payload = req.body || {};
  const record = { id: referrals[referrals.length - 1]["id"] + 1, ...payload };
  referrals.push(record);
  res.status(201).json(record);
});

app.listen(PORT, () => console.log("Server listening on", PORT));
