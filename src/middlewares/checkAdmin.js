module.exports = (req,res, next) => {
    if(req.session.userLogin && req.session.userLogin.role === 'dashboard'){
        return next()
    }

    return res.redirect('/')
}