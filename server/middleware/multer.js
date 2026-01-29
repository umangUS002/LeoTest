import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(), // or diskStorage()
  limits: {
    fileSize: 10 * 1024 * 1024, // 5 MB limit
  },
});

export default upload;