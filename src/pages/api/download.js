const fs = require('fs');
const ytdl = require('ytdl-core');

export default async function handler(req, res) {
    if(req.query.url){
      const filename = (await ytdl.getBasicInfo(req.query.url)).videoDetails.title;
      res.setHeader('Content-Disposition', `attachmentt; filename=${filename}.mp4`)
      return ytdl(req.query.url).pipe(res);
    }

    return res.status(200).send();
}
