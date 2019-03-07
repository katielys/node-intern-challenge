module.exports = function (req, res, next) {
    let date = new Date().toISOString()
    let fullUrl = {
        date: date,
        protocol: req.protocol,
        method: req.method,
        host: req.get('host'),
        path: req.originalUrl,
        body: req.body
    }

    console.log( 'Date: '+date +' host: '+fullUrl.host + ' protocol: '+ fullUrl.protocol+ ' path: '+ fullUrl.path)
    next()
}