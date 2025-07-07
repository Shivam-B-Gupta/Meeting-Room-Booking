import jwt from "jsonwebtoken";
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

function adminAuthentication(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    res.status(403).json({
      mssg: "token missing",
    });
  }

  try {
    const decodedValue = jwt.verify(token, JWT_ADMIN_PASSWORD);
    req.adminId = decodedValue.id;
    next();
  } catch (err) {
    res.status(402).json({
      mssg: "You are not signed in",
    });
  }
}

export default adminAuthentication;
