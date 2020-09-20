// vue.config.js
module.exports = {
    devServer: {

        before: function(app) {
            app.get('/.auth/me', function(req, res) {
      
                /*res.json({
                    clientPrincipal: null
                  });*/
                res.json({
                    clientPrincipal: {
                      identityProvider: "aad",
                      userId: "abc123testuser",
                      userDetails: "test.user@flipgroup.com.au",
                      userRoles: [
                        "anonymous",
                        "authenticated"
                      ]
                    }
                  });
            });
          },

        proxy: {

          '^/api': {
            target: 'http://localhost:7071',
          }
        }   
    }
}