import { knex } from "./dbstuff.js";

const retrieveAllRats = async (req, res) => {
  knex
    .select("*")
    .from("rats")
    .then((ratData) => {
      console.log(ratData);
      res.json({ msg: "This is CORS-enabled for all origins!" });
      //res.json(ratData);
    })
    .catch((err) => res.json({ message: `Error retrieving rats! ${err}` }));
};

const submitIncident = (req, res) => {
  console.log("we posted, here is, req");
  console.log(req.body);
  knex("rats")
    .insert({
      picLink: req.body.picLink,
      user: req.body.user,
    })
    .then(() => {
      res.json({
        message: `Incident successfully submitted. Thank you, citizen.`,
      });
    })
    .catch((err) => {
      res.json({ message: `Error submitting incident! ${err}` });
    });
};

const destroyAllRats = (req, res) => {
  knex
    .select("*")
    .from("rats")
    .truncate()
    .then(() => {
      res.json({ message: "Rats destroyed." });
    })
    .catch((err) => {
      res.json({ message: `Failed to destroy rats!! ${err}` });
    });
};

export { retrieveAllRats, submitIncident, destroyAllRats };
