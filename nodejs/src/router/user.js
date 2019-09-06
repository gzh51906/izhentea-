const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');
const { formatData } = require('../utils')

// 增：注册用户
Router.post('/reg', async (req, res) => {
    let { user, name, password, phone, sex, brit, mail, text } = req.body;
    // let data
    try {
        insert('M_userlist', { user, name, password, phone, sex, brit, mail, text });//{username,password,age,gender}
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})


module.exports = Router;