module.exports = (req,res,next) => {
    if(req.cookies.Granod3Oro_user){
        req.session.userLogin = req.cookies.Granod3Oro_user
    }

    next()
}