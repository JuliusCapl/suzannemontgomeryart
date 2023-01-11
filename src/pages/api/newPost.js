import connectDB from "../../lib/dbConnect";
import multer from "multer";
import nc from 'next-connect'
import Painting from "../../models/Painting";

export const config = {
    api: {
        bodyParser: false
    }
}
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb){
            cb(null, path.join(process.cwd(), 'public', 'uploads'))
        },
        filename: function (req, file, cb){
            cb(null, new Date().getTime()+'-'+file.originalname)
        }
    })
})

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end('Something broke!')
    },
    onNoMatch: (req, res, next) => {
        res.status(404).end('Page is not found')
    }
})
.use(upload.single('image'))
.post(async (req, res) => {
    try {
        const session = await getSession({req})
        if(!session){
            errorHandler('Access denied', res)
        }else {
            await connectDB()
            const painting = new Painting({
                ...req.body,
                name: req.body.name,
                dimensions: req.body.dimensions,
                description: req.body.description,
                image: `/${req.file.filename}`
            })

            const savePainting = await Painting.save()
            if(savePainting){
                console.log('algo lindo')
                //handler(savePainting, res)
            }else {
                errorHandler(savePainting, res)
            }

            //res.status(201).json({body: req.body, file: req.file})
        }
    } catch (err) {
        errorHandler(err, res)
    }
})

export default handler 
