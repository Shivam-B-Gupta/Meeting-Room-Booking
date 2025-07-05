import jwt from "jsonwebtoken";
const JWT_EMPLOYEE_PASSWORD = process.env.JWT_EMPLOYEE_PASSWORD;

function employeeAuthentication(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    res.status(403).json({
      mssg: "token missing",
    });
  }

  try {
    const decodedValue = jwt.verify(token, JWT_EMPLOYEE_PASSWORD);
    req.userId = decodedValue.id;
    next();
  } catch (err) {
    res.status(402).json({
      mssg: "You are not signed in",
    });
  }
}

module.exports = {
  employeeAuthentication: employeeAuthentication,
};
