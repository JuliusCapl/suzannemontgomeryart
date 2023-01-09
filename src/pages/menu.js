import Link from "next/link"

const menu = () => {
  return (
    <>
        <section className='main-view text-center'>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/mailer'}>Send an Email</Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/newPost'}>Upload a New painting</Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/newGalleryPocst'}>Upload something just to the gallery</Link>
                </div>
                <div className="col-12 col-sm-6">
                    <Link href={'/menu/other'}>Others</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default menu