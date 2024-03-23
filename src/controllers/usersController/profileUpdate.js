const db = require('../../database/models');
const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require('fs');

module.exports = (req, res) => {
    const userImage = req.files.image;
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
        street,
        postalCode,
        city,
        province,
       } = req.body;

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        db.User.findByPk(req.params.id, {
            include: ['address']
        })
            .then(user => {
                
                return user.address.update({
                    street,
                    city : city.toString(),
                    province : province.toString(),
                    postalCode,
                });
            })
            .then(() => {
                
                return db.User.update(
                    {
                        firstName,
                        lastName,
                        email,
                        password,
                        phone,
                        image: userImage ? userImage.filename : null
                    },
                    {
                        where: {
                            id: req.params.id
                        }
                    }
                );
            })
            .then(() => {
                return res.redirect('/');
            })
            .catch(error => console.log(error))
    } else {
        db.User.findByPk(req.params.id, {
            include: ['address']
        })
        .then(user => {
            return res.render('users/profile', {
                errors: errors.mapped(),
                old: req.body,
                user,
            });
        })
        .catch(error => console.log(error))
    }
}