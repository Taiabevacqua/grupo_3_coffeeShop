module.exports = (req,res,next) => {
    if(req.cookies.GranodeOro_user){
        req.session.userLogin = req.cookies.GranodeOro_user
    }

    next()
}