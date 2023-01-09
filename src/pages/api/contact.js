import { mailOptions, transporter } from "../../utils/nodemailer"

const contact = async (req, res) => {
    if(req.method === 'POST'){
        const data = JSON.parse(req.body)
        if(!data.name || !data.email || !data.subject || !data.message){
            return res.status(400).json({message: 'bad request'})
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: `<<${data.name} -- ${data.email}>> sent you a message`,
                html: `<h1>New Message from ${data.name}</h1>
                <h2>Reply to "${data.email}"</h2> <p>Subject: ${data.subject}</p><p>Message: ${data.message}</p>`
            })
            return res.status(200).json({success: true})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: error.message})
        }
    }
    console.log(req.body)
    return res.status(400).json({message: 'bad request'})
}

export default contact