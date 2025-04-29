"use strict";

const express = require("express");
const Users = require("../controllers/users");

let router = express.Router();

// GET CLAN
router.get("", Users.getUsers);
// // POST CLAN
// router.post('/save', Clans.saveClan);
// // DELETE CLAN
// router.delete('/delete/:id', Clans.deleteClan);
// // UPDATE CLAN
// router.put('/update/:id', Clans.updateClan);

module.exports = router;
