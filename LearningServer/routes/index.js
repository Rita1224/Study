var express = require('express');
var cors = require('cors')
var query = require("../db/db");
var router = express.Router();

/* Insert words. */
router.use('/test/insertWords', function(req, res, next) {
  let sql  ="INSERT INTO sentences (romaji,hiragana,chinese,group1,numberOfError) VALUES ?";
  let sqlParams = []
  req.body.forEach(item => {
    sqlParams.push([
      item.romaji,
      item.hiragana,
      item.chinese,
      item.group1,
      item.errorTimes
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
