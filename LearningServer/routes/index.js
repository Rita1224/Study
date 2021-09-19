var express = require('express');
var cors = require('cors')
var query = require("../db/db");
var router = express.Router();

/* Insert words. */
router.use('/test/insertWords', function(req, res, next) {
  let sql  ="INSERT INTO sentences (romaji,hiragana,chinese,groupName,numberOfError,sentencesFlag) VALUES ?";
  let sqlParams = []
  req.body.forEach(item => {
    sqlParams.push([
      item.romaji,
      item.hiragana,
      item.chinese,
      item.group,
      item.errorTimes,
      0
    ]);
  });

  query(sql,[sqlParams],function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'Create failed！'
      })
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'Create successfully!'
      })
    }
    res.end();
  })
});

/* Insert Sentences. */
router.use('/test/insertSentences', function(req, res, next) {
  let sql  ="INSERT INTO sentences (romaji,hiragana,chinese,sentencesFlag) VALUES ?";
  let sqlParams = []
  req.body.forEach(item => {
    sqlParams.push([
      item.romaji,
      item.hiragana,
      item.chinese,
      true
    ]);
  });

  query(sql,[sqlParams],function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'Create failed！'
      })
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'Create successfully!'
      })
    }
    res.end();
  })
});

/* Query Words. */
router.use('/test/queryWords', function(req, res, next) {
  let sql  ="SELECT * from sentences where sentences.groupName is not NULL";

  query(sql, null, function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'Create failed！'
      })
    }else{
      res.json({
        ok:true,
        result:result,
        message:'Query successfully!'
      })
    }
    res.end();
  })
});

/* Query Sentences. */
router.use('/test/querySentences', function(req, res, next) {
  let sql  ="SELECT * from sentences where sentences.sentencesFlag = 1";

  query(sql, null, function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'Create failed！'
      })
    }else{
      res.json({
        ok:true,
        result:result,
        message:'Query successfully!'
      })
    }
    res.end();
  })
});

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// });

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// });

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// });

module.exports = router;
