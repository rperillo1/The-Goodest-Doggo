const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

module.exports = upload



























// For Future use of adding a buffer image to app

// const create = async function (req, res) {
//   const imagePath = path.join(process.cwd(), '/public/images');
//   const fileUpload = new Resize(imagePath);
//   if (!req.file) {
//     res.status(401).alert({error: 'Please provide an image'});
//   }
//   const filename = await fileUpload.save(req.file.buffer);
//   console.log(filename)
//   console.log(req.file.buffer)
//   req.body.URL = filename;
//   req.body.ImgBuffer = req.file.buffer
//   req.user.dog.push(req.body);
//   console.log(req.body)
//   console.log(req.user.dog[0])
//   if (req.user.dog[0]) {
//     req.user.dog.shift()
//   }
//   req.user.dog.push(req.body);
//   const user = new User(req.user);
//   user.save(function(err){
//       if (err) return res.redirect('profile/');
//           res.redirect(`/profile/${req.user._id}`);   
//   })
// };