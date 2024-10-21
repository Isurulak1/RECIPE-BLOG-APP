import React from 'react'
import AboutImg from '../../assets/about-image.jpg'

const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10 '>
   
    <div className='text-start sm:w-1/2'>
        <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Our Culinary Journey</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>Welcome to [App Name], where food lovers come together to discover and share the joy of cooking! Our blog is all about celebrating the art of creating delicious dishes, from tried-and-true family recipes to new, exciting flavors from around the world. Whether you're a seasoned chef or a home cook looking for inspiration, you'll find a variety of recipes, cooking tips, and meal ideas that suit every taste.<br /> <br />  Join us as we explore the rich diversity of cuisines, one recipe at a time, making cooking fun, easy, and accessible for everyone.</p>
        <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-12 inline-flex'>
                <button className='py-4 px-8 bg-btnColor text-white hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
            </div>
        </div>
    </div>

    <div className='relative'>
        <img src={AboutImg} alt="Featured image" className='rounded-md'/>
    </div>
</div>
  )
}

export default AboutSection