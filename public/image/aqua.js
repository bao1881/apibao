exports.name = '/images/aqua';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        let dirPath = __dirname + `/data/txt/aqua.txt`;
        var imageList = (fs.readFileSync(dirPath, "utf-8").split(/\r?\n/));
        var randomImage = imageList[Math.floor(Math.random() * imageList.length)].trim();
        res.jsonp({
            data: randomImage,
            count: imageList.length,
            author: 'Bao Nguyen'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}