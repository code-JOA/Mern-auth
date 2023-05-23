// @desc Auth user/ set token
// route POST /api/users/auth
// access Public
import 


const authUser = async (req, res) => {

    res.status(200).json({ message : 'User Authenticated'})
}

export { authUser } ;