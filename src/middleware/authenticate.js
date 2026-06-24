import createHttpError from 'http-errors';
import { Session } from '../models/session.js';
import { User } from '../models/user.js';

export const authenticate = async (req, res, next) => {
  if (!req.cookies.accessToken || !req.cookies.sessionId) {
    throw createHttpError(401, 'Missing access token or session id');
  }

  const session = await Session.findOne({
    _id: req.cookies.sessionId, 
    accessToken: req.cookies.accessToken,
  });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);

  if (isAccessTokenExpired) {
    throw createHttpError(401, 'Access token expired');
  }

  const user = await User.findById(session.userId);

  if (!user) {
    throw createHttpError(401, 'User not found');
  }

  req.user = user;
  next();
};