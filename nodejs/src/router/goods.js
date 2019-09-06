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
    let { goodstitle, goodstitle2, goodsprice, saleprice, stock, kinds, nature, text, status } = req.body;
    console.log({ goodstitle, goodstitle2, goodsprice, saleprice, stock, kinds, nature, text, status })
    try {

        insert('M_goodslist', { goodstitle, goodstitle2, goodsprice, saleprice, stock, kinds, nature, text, status });
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

//--------------------------M_goodslist





// 查（获取 M_goodslist  所有商品数据）：get /user
Router.get('/mgoodslist', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('M_goodslist', {}, { skip, limit, sort });
    // console.log(data);

    res.send(formatData({ data }))
})

// 删 M_goodslist 的某条数据
Router.get('/mgoodslist/:id', (req, res) => {
    let { id } = req.params;
    let data
    try {
        remove('M_goodslist', { key: id })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})
//--------------------------M_goodslist

//M_goodskinds--------------------------
Router.get('/mgoodskinds', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('M_goodskinds', {}, { skip, limit, sort });
    res.send(formatData({ data }))
})

Router.get('/mgoodskinds/:id', (req, res) => {
    console.log(req.params);
    let { id } = req.params;
    console.log(id);

    let data
    try {
        remove('M_goodskinds', { key: id })
        // res.send(formatData())
        res.send("1")
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

//M_goodskinds--------------------------


//--------------------------M_userlist
Router.get('/muserlist', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('M_userlist', {}, { skip, limit, sort });
    res.send(formatData({ data }))
})

Router.get('/muserlist/:id', (req, res) => {
    console.log(req.params);
    let { id } = req.params;
    console.log(id);

    let data
    try {
        remove('M_userlist', { key: id })
        // res.send(formatData())
        res.send("1")
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

//--------------------------M_userlist





// Router.get('/:id', async (req, res) => {
//     let { id } = req.params;
//     let data = await find('user', { _id: id });
//     res.send(formatData({ data }))
// })

module.exports = Router;