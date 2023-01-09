import connectDB from "../../lib/dbConnect";
import Email from '../../models/Email'

export default async function apiEmailList (req,res){
    await connectDB()
    const {method} = req
    switch (method) {
        case 'POST':
            try {
                const email = new Email(req.body)
                await email.save()
                res.status(200).json({success: true, email})
            } catch (error) {
                console.log(error)
                res.status(400).json({success: false, error: 'Falla de servidor'})
            }
            break;
    
        default:
            res.status(500).json({success: false, error: 'Falla de servidor'})
    }
}