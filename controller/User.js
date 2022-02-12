const User = require("../Models/User")


exports.Register = async (req, res) => {

    try {
        const signeduser = await User.findOne({username:req.body.username})
        signeduser&&res.status(405).json({data:"user already exit"}) 
        const user = await User.create(req.body)
        res.status(200).json({ data: user })
    } catch (error) {
console.log(error)
    }
}

exports.SignIn = async (req, res) => {

    try {
        console.log("signin  hh")
        const signeduser = await User.findOne({username:req.body.username})
        res.status(200).json({ data: signeduser })
    } catch (error) {
        res.status(200).json({ data:"not signed" })

    }

}