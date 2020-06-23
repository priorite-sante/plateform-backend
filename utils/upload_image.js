const express = require('express');
const multer = require('multer');


const router = express.Router();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/'+ req.query.type.toString() );
    },
    filename: function(req, file, cb) {
      cb(null,  new Date().toISOString().replace(/:/g, '_') + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, true);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


var uploadImage = router.post("/users/upload", upload.single('image'), (req, res)=>{
    console.log(req.file);
    if(req.file!= undefined) {
      res.json({
        "path": req.file.path.replace(/\\/g, "/")
      });
    } else{
      res.sendStatus(500);
    }
});

module.exports = [uploadImage]



