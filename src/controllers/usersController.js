const { validationResult } = require("express-validator");
const User = require("../data/User");
//const { leerJSON, escribirJSON } = require("../data");
const { hashSync } = require("bcryptjs");

module.exports={
    login: (req,res) =>{
        return res.render('users/login')
    },
    register: (req,res) =>{
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);
        const {firstname, surname = lastname, email, password} = req.body;
        if(errors.isEmpty()){

            db.Address.create()
                .then(address =>{
                    db.User.create({
                        firstname,
                        lastname,
                        email,
                        password : bcryptjs.hashSync(password.trim(),10),
                        roleId : 2,
                        addressId : address.id
                    })
                    .then(user => {
                        console.log(user);
                        return res.redirect('/')
                    })
                })
                .catch(error => console.log(MediaError))
            
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