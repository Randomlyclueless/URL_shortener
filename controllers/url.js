const { nanoid } = require('nanoid');
const URL = require('../models/url');
async function handlegenerateNewShortURL(req,res){
    const ShortID = nanoid(8);
    const body = req.body;
    if(!body.url) return res.status(400).json({error : 'URL is required'})
    
        await URL.create({
         shortId : ShortID,
         redirectUrl : body.url,
         visitHistory : [],
        });
        return response.jsoon({id:shortId})
}
module.exports={
    handlegenerateNewShortURL,
}