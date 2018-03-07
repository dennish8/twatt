const express = require('express');
const router = express.Router();
const OAuth = require('oauth').OAuth;

const consumer_key = `UV2dfuLTRrw6IGrBP4qjiruv0`;
const consumer_secret = `YQiRGibmOtFgsJJAPR7JrNBwoZO7kZuxLaDujaAXufnauj4R12`;

const user_token = `971257855746740224-0Fn4fJEmJ1flpVGt20XAb9Ws1oMfG3C`;
const user_secret = `AnNXsfPWqink2xhWC57rk9QbrTbf7XVbdHPH7T4etUhiT`;

const twatt = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  consumer_key, //application consumer key
  consumer_secret,       //application secret key
  '1.0A',
   null,
  'HMAC-SHA1'
);


//GET TIMELINE
router.get('/', function(req, res, next) {
  twatt.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
     user_token, //test user token 
     user_secret, //test user secret             
    (e, data, res2)=>{
      if (e) res.status(500).json(e)
      else{
        res.status(200).json({
          message:'Timeline',
          data:JSON.parse(data)
        })
      }    
    });    
});
//POST TWEET
router.post('/', function(req, res, next) {
  twatt.post(
    'https://api.twitter.com/1.1/statuses/update.json',
     user_token, //test user token 
     user_secret, //test user secret 
     {status:req.body.status} ,           
    (e, data, res2)=>{
      if (e) res.status(500).json(e)
      else{
        res.status(200).json({
          message:'New Tweet',
          data:JSON.parse(data)
        })
      }    
    });    
});
// SEARCH TWEET
router.post('/search', function(req, res, next) {
  twatt.get(
    'https://api.twitter.com/1.1/search/tweets.json',
     user_token, //test user token 
     user_secret, //test user secret 
     {q:req.body.q} ,           
    (e, data, res2)=>{
      if (e) res.status(500).json(e)
      else{
        res.status(200).json({
          message:'New Tweet',
          data:JSON.parse(data)
        })
      }    
    });    
});


module.exports = router;
