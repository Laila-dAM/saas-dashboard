import { Request, Response, NextFunction } from "express"

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({
      error: "Unauthorized"
    })
  }

  const [type, token] = authorization.split(" ")

  if (type !== "Bearer" || token !== "fake-jwt-token") {
    return res.status(401).json({
      error: "Invalid token"
    })
  }

  next()
}

export default authMiddleware