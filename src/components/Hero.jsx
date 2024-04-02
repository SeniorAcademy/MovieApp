import React from 'react'
import Batman from "../assets/img/Batman.jpg"

const Hero = () => {
    return (
        <>
            <section className='h-96 lg:h-myHeight group relative'>
                <img src={Batman} alt="Batman" className='h-full w-full object-cover' />
                <div className='absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gega-red'>
                    <div className='container pl-10 lg:pl-0'>
                        <h3 className='text-red-200 trackin-wider group-hover:mb-1 duration-500 text-semibold capitalize'>
                            Action , Drama , Thriller , Horror
                        </h3>
                        <h1 className='text-4xl lg:text-6xl text-blue-200 group-hover:mb1 duration-500 '>
                            Join Us
                        </h1>
                        <p className='my-6 text-sky-200 group-hover:mb-4 duration-500 w-full lg:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore sapiente atque. Animi corporis tempore quas nobis dignissimos soluta, velit nesciunt assumenda illum, ea excepturi facilis dolore incidunt quam eius consectetur recusandae blanditiis! Ad qui molestias, asperiores ratione quo delectus est possimus, assumenda magni fugit voluptas harum? Laudantium, iusto nihil.
                        </p>


                    </div>
                </div>



            </section>
        </>
    )
}

export default Hero