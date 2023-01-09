const Bio = () => {
  return (
    <>
        <section className='main-view py-5 mt-5'>
            <div className='container'>
              <div className='row bio--row'>
                <div className='image--container col-12 col-md-6'>
                  <img className='image--bio' src="/img/bio--sm.jpg" alt="Image of my bio" />
                </div>
                <div className='text--bio col-12 col-md-6 py-5'>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam?</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam voluptas voluptatum quas quia architecto perferendis accusamus molestiae amet minus.</p>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at illum beatae molestiae minima reprehenderit officiis, autem obcaecati nulla delectus est repudiandae modi sequi!</p>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Bio