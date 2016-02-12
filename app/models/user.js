// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        picks        : [{
          id         : Number,
          team       : String,
          score      : Number
        }]
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        picks        : [{
          id         : Number,
          team       : String,
          score      : Number
        }]
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String,
        picks        : [{
          id         : Number,
          team       : String,
          score      : Number
        }]
    }


});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
