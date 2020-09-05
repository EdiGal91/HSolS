exports.logRequest = function (req, res, next) {
  const isGet = req.method === 'GET'
  const body = isGet ? '' : `${JSON.stringify(req.body)}` ;
  console.log(`${req.method}: ${req.url} ${body} `);
  next();
};
