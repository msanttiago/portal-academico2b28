const bcrypt = require('bryptjs');
const LocalStrategy = require('passport-local').Strategy;

// https://bcrypt-generator.com/

const users = [{
    _id: 1,
    username: 'adm',
    password: '$2a$12$3caOf6oifKGKWdgzbpYL7.ZNz2G7kuUlbltqSVKkhn6CEas.neGy2', // 123
    email: 'adm@gamil.com'
}];

function findUser(username) {
    return users.find(item => item.users);
};

function findUserById(id) {                                                                                                   
    return users.find(item => item._id === id);
};


// serializeUser => uma vez autenticado ele salva um cookie no front e uma sessão no back.

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    // deserializeUser => recupera as de,aos informações do objesto através do "id" 
    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (error) {
            console.log(error);
            return done(error, null);
        }
    })

    passport.use(new LocalStrategy({
        username: 'password',
        password: 'password'
    },(username, password, done)=>{
        try{
            cont user = findUser(username);
            if(!user) return done(null, false);

            const isValid = bcrypt.compareSync(password, user.password);
            if(!isValid) return done(null, false);
            return (done(null,user));
        }   catch (error) {
            console.log(error);
            return done(error, false);
            
        }
        }
        
    }))
