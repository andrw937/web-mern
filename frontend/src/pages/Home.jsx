import React from 'react'

const Home = () => {
  return (
    <>
    {/*=========== hero =========== */}
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between" >
        {/*=========== hero content =========== */}  
        <div>
          <div className="lg:w-[570px]">
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]'>
              Tu menu simple, casero y riquisimo!
            </h1>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora, est consequuntur, perspiciatis esse recusandae itaque exercitationem incidunt ipsam provident nisi at vero alias rerum eum fugit nostrum praesentium? Cumque obcaecati tempore dolorum nisi odit accusamus itaque consectetur sunt impedit nam odio nesciunt corporis pariatur eveniet ipsum delectus, labore assumenda.
            </p>
            <button className="btn">Solicita ayuda!</button>
          </div>
        </div>
        </div>    
      </div>
    </section>
    </>
  )
}

export default Home
