const express = require("express");
const router = express.Router()
const bcrypt = require('bcrypt');
const FanModel = require("../Models/FanSchema");
const TalentModel = require("../Models/TalentSchema");

module.exports = {
    fanSignup: async (req, res) => {
        try {
            let { fanfirstname, fanlastname, fanusername, fanemail, fantimezone, fanpassword, fanterms } = req.body;
            if (fanfirstname && fanlastname && fanusername && fanemail && fantimezone && fanpassword) {
                fanpassword = await bcrypt.hash(fanpassword, 10);

                const fan = new FanModel({
                    firstname: fanfirstname,
                    lastname: fanlastname,
                    username: fanusername,
                    email: fanemail,
                    timezone: fantimezone,
                    password: fanpassword,
                    terms: fanterms,
                })
                await fan.save()
                console.log(fan, 'fannn');
                res.status(200).json({ data: fan })
            } else {
                res.json({ msg: 'Please fill the required fields' })
            }
        } catch (error) {
            res.status(500).json({ msg: "error occured" });
            console.log(error);
        }
    },

    talentSignup: async (req, res) => {
        try {
            let { firstname, lastname, username, email, timezone, password, terms } = req.body;
            if (firstname && lastname && username && email && timezone && password) {
                password = await bcrypt.hash(password, 10);

                const talent = new TalentModel({
                    firstname,
                    lastname,
                    username,
                    email,
                    timezone,
                    password,
                    terms,
                })
                await talent.save()
                console.log(talent, 'talent');
                res.status(200).json({ data: talent })
            } else {
                res.json({ msg: 'Please fill the required fields' })
            }
        } catch (error) {
            res.status(500).json({ msg: "error occured" });
            console.log(error);
        }
    }

}