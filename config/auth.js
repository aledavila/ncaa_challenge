// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1719789364905726', // your App ID
        'clientSecret'  : '887ef6818168ac05f0858f921d1bad95', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'ZkX7SetnnnEj9ea1WpirKS38h',
        'consumerSecret'    : 'P4sboRU2gquC1LTVE82oNsiJfPVxfoSYwEsroTHf5jF0ZXKlNa',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    }

};
