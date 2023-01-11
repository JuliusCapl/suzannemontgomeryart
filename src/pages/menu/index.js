import Link from "next/link"

const menu = () => {
  return (
    <>
        <section className='main-view text-center container'>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/mailer'} className='mx-2' style={{textDecoration:'none',color:'#181925'}}><h5>Send an Email</h5></Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/newPost'} className='mx-2' style={{textDecoration:'none',color:'#181925'}}><h5>Upload a New painting</h5></Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/newGalleryPost'} className='mx-2' style={{textDecoration:'none',color:'#181925'}}><h5>Upload something just to the gallery</h5></Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/other'} className='mx-2' style={{textDecoration:'none',color:'#181925'}}><h5>Others</h5></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default menu