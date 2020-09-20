// vue.config.js
module.exports = {
    devServer: {

        before: function(app) {
            app.get('/.auth/me', function(req, res) {
      
                //res.json({});
                res.json({
                    identityProvider: "facebook",
                    userId: "d75b260a64504067bfc5b2905e3b8182",
                    userDetails: "user@example.com",
                    userRoles: [ "anonymous", "authenticated" ]
                  });
            });
          },

        proxy: {

          '^/api': {
            target: 'http://localhost:7071',
            //ws: true,
            //changeOrigin: true
          },
          '^/.auth/me': {
            target: '<other_url>'
          }     
        }   
    }
}