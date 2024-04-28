import jwt from "jsonwebtoken";

export const checkUserToken = (req, res, next) => {
    try {
        //extract the token
        const token = req.headers.authorization.split(" ")[1];
         // Check if bearer token exist
    if (!token) {
        return res
          .status(401)
          .json({ message: "Access token not found in headers!" });
      }
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //pass it on to the next middleware
        req.user=decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
        
    };
};