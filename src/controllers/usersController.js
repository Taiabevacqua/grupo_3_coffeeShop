const { validationResult } = require("express-validator");
const User = require("../data/User");
const { leerJSON, escribirJSON } = require("../data");

module.exports={
    login: (req,res) =>{
        return res.render('users/login')
    },
    register: (req,res) =>{
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        

        const errors = validationResult(req);

        if(errors.isEmpty()){
            
            const {name, surname, email, password, userCategory} = req.body;
        
            const {userImage} = req.files;
        
            const newUser = new User(name, surname, email, password, userCategory, userImage);
            const users = leerJSON('users');
        
            users.push(newUser);
        
            escribirJSON(users, 'users')
    
            return res.redirect('/')
        
        }else{

        if(req.files.userImage){
            fs.existsSync(`./public/img/users/${req.files.userImage[0].filename}`) &&
            fs.unlinkSync(`./public/img/users/${req.files.userImage[0].filename}`)
        }


        return res.render('users/register', {
            old : req.body,
            errors : errors.mapped()
        })
    }

    },
    logout : (req,res) => {
        
        req.session.destroy();

        return res.redirect('/')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);
        const {email} = req.body;

        if(errors.isEmpty()){

        const {id, name, role} = leerJSON('users').find(user => user.email === email)

            req.session.userLogin = {
                id,
                name,
                role
            }
            remember && res.cookie('GranoDeOro_user', req.session.userLogin, {
                maxAge : 1000 * 60 * 2
            })

            return res.redirect('/')

        }else {
            return res.render('users/login',{
                errors : errors.mapped()
            })
        }
    },
    profile : (req,res) => {
        const {id} = req.session.userLogin;

    const users = leerJSON('users');

    const user = users.find(user => user.id == id)

    return res.render('users/profile', {
        ...user
    })},
   
}