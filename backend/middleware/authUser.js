// import jwt from 'jsonwebtoken'

// // user authentication middleware
// const authUser = async (req, res, next) => {
//     const { token } = req.headers
//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// export default authUser;
import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
  const { token } = req.headers
  if (!token) {
    return res.json({ success: false, message: 'Not Authorized Login Again' })
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    
    // ✅ Ensure req.body exists before setting a property
    req.body = { ...req.body, userId: token_decode.id }

    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authUser;
