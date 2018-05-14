module.exports = function(app) {
  app.get('/', function(req, res) {
      res.render('./screens/homepage/homepage.ejs', {
          title: 'T-Rx App - Homepage',
          style: 'homepage.css',
          logic: 'homepage.js'
      });
  });
}
