import multer from 'multer';
import createHttpError from 'http-errors';

const storage = multer.memoryStorage();


const fileFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image/')) {
    callback(null, true);
  } else {
    callback(createHttpError(400, 'Only images allowed'), false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, 
  },
  fileFilter,
});