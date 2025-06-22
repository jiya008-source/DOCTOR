import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // ✅ required if using .env

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    const token = authHeader.split(" ")[1]; // ✅ gets the real token
    console.log("🔐 Token received:", authHeader);
console.log("🔐 JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = decoded.id; // ✅ token must have .id
    next();

  } catch (error) {
    console.log("❌ JWT verification error:", error.message);

    console.log("JWT error:", error);
    res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authUser;
