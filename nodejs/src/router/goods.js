const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');

const { formatData } = require('../utils');



// 增：商品数量
Router.post('/plus', async (req, res) => {
    let { username, password, age, gender } = req.body;
    let data
    try {
        //两个参数（colname/数据库名，data/传入的数据）
        insert('goods', { id });//{username,password,age,gender}
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 增加商品
Router.post('/addgoods', async (req, res) => {
    let { goodstitle, goodstitle2, goodsprice, saleprice, num, value, nature, text, putaway } = req.body;

    try {

        insert('M_goodslist', { goodstitle, goodstitle2, goodsprice, saleprice, num, value, nature, text, putaway });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 查（）：orderlist
Router.get('/orderlist', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('M_orderlist', {}, { skip, limit, sort });
    // console.log(data);

    res.send(formatData({ data }))
})


// 删（）：orderlist
Router.delete('/orderdel', async (req, res) => {
    let { _id } = req.body;
    // console.log({ _id }, req.body)
    let data = await remove('M_orderlist', { _id });
    // console.log(data);

    res.send(formatData({ data }))
})



// 查（获取所有商品数据）：get /user
Router.get('/', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('goods', {}, { skip, limit, sort });
    // console.log(data);

    res.send(formatData({ data }))
})


Router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let data = await find('user', { _id: id });
    res.send(formatData({ data }))
})

module.exports = Router;