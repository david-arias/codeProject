"use strict";

const User = require("../models/users");

// contoller to CRUD

let controller = {
    getUsers: (req, res) => {
        Clan.find({})
            .exec()
            .then((data) => {
                // if send success
                return res.status(200).send({
                    status: "success",
                    message: "Data save successfully",
                    data,
                });
            })
            .catch((error) => {
                return res.status(500).send({
                    status: "error",
                    message: "Cant get Clan data",
                    error,
                });
            });
    },

    // saveClan: (req, res) => {
    //     let params = req.body;
    //     let clans = new Clan();

    //     clans.disciplineExtra = params.disciplineExtra;
    //     clans.disciplines = params.disciplines;
    //     clans.name = params.name;
    //     clans.nickname = params.nickname;
    //     clans.quote = params.quote;
    //     clans.sect = params.sect;
    //     clans.type = params.type;

    //     clans.save().then((clanStored) => {
    //         return res.status(200).send({
    //             status: "success",
    //             message: "Data save successfully",
    //             clanStored
    //         })
    //     }).catch((error) => {
    //         return res.status(404).send({
    //             status: "error",
    //             message: "Cant save Clan data",
    //             error
    //         })
    //     })
    // },

    // deleteClan: ((req, res) => {

    //     let clanId = req.params.id;

    //     Clan.findOneAndDelete({ _id: clanId }).then((data) => {
    //         return res.status(200).send({
    //             status: "success",
    //             message: "Data delete successcfully",
    //             data
    //         })
    //     }).catch((error) => {
    //         return res.status(500).send({
    //             status: "error",
    //             message: "Cant delete Clan data",
    //             error
    //         })

    //     })
    // }),

    // updateClan: ((req, res) => {

    //     let clanId = req.params.id;
    //     let params = req.body;

    //     console.log(req);
    //     console.log(params);

    //     let disciplineExtra = params.disciplineExtra;
    //     let disciplines = params.disciplines;
    //     let name = params.name;
    //     let nickname = params.nickname;
    //     let quote = params.quote;
    //     let sect = params.sect;
    //     let type = params.type;

    //     Clan.findOneAndUpdate({ _id: clanId }, {
    //         disciplineExtra,
    //         disciplines,
    //         name,
    //         nickname,
    //         quote,
    //         sect,
    //         type,
    //     }, {
    //         new: true
    //     }).then((data) => {
    //         return res.status(200).send({
    //             status: "success",
    //             message: "Data update successcfully",
    //             data
    //         })
    //     }).catch((error) => {
    //         return res.status(500).send({
    //             status: "error",
    //             message: "Cant update Clan data",
    //             error
    //         })

    //     })

    // })
};

module.exports = controller;
