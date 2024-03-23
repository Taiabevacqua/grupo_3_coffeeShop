const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const db = require('../database/models')

module.exports={
    login: (req,res) =>{
        return res.render('users/login')
    },
    register: (req,res) =>{
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);
        const {firstName, lastName, email, password} = req.body;
        if(errors.isEmpty()){

            db.Address.create()
                .then(address =>{
                    db.Users.create({
                        firstName,
                        lastName,
                        email,
                        password : hashSync(password.trim(),10),
                        rolesId : 2,
                        addressId : address.id
                    })
                    .then(user => {
                        console.log(user);
                        return res.redirect('/')
                    })
                })
                .catch(error => console.log(error))
            
            }else{

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
        const {email, remember} = req.body;
        console.log(errors)
        if(errors.isEmpty()){
    
            db.Users.findOne({
                where : {
                    email
                }
            }).then(({id, firstName, rolesId}) => {
                req.session.userLogin = {
                    id,
                    name : firstName,
                    role : rolesId
                }
                remember && res.cookie('GranoDeOro_user', req.session.userLogin, {
                    maxAge : 1000 * 60 * 2
                })
    
                return res.redirect('/')
            })
            .catch(error => console.log(error))
          

        }else {
            return res.render('users/login',{
                errors : errors.mapped()
            })
        }
    },
    profile : (req,res) => {
        const {id} = req.session.userLogin;

        db.Users.findByPk(id)
            .then(user => {
                return res.render('users/profile', {
                    ...user.dataValues
                })
            })   
            .catch(error => console.log(error))

  },
   
}