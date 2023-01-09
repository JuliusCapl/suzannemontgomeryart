// export default function newPostApi(req, res) {
//     res.status(200).json('holas')
//   try {
//     let { target_file } = req.files;
//     let ext = "jpg";
//     let ruta = `${__dirname}/public/shop/${paintingsname}}.${ext}`;
//     target_file.mv(ruta, (error) => {
//       if (error) {
//         res.send("error saving the image");
//       } else {
//         res.redirect("/menu/newPost");
//       }
//     });
//   } catch (error) {
//     res.status(500).send("ups something went wrong");
//   }
// }
