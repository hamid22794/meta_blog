import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';

const storage = new GridFsStorage({
  url: `mongodb+srv://hamid22:mUJriZuUrF0oxOFw@cluster1.gzucmuu.mongodb.net/?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    }
  }
})

export default multer({ storage });
