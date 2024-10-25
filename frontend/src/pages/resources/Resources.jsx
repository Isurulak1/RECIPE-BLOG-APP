import React from 'react'
const blogData = [
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 1, 2020",
      views: "2.1K views",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 2, 2020",
      views: "2.2K views",
      imgSrc: "https://c8.alamy.com/comp/2NHT359/serious-photographer-and-man-on-camera-in-studio-for-shoot-magazine-project-or-online-content-backstage-or-male-thinking-for-digital-profession-2NHT359.jpg",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 3, 2020",
      views: "2.3K views",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnx-lFuSjR3GAOMlT4uZ8Mei96wpSPeg2PMwVr6GLVLbRE01GvLD5xu0I7Au7QpnwZZI&usqp=CAU",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 4, 2020",
      views: "2.4K views",
      imgSrc: "https://media.istockphoto.com/id/1184374800/photo/happy-girl-is-shooting-a-video-for-her-boyfriend-on-his-birthday.jpg?s=612x612&w=is&k=20&c=Zq3knMccw6Y_Kk4jCghpPl9Vdt5EN_sySXZTs0_sgGw=",
      category: "Convenire",
    },
  ];

const Resources = () => {
    return (
        <section className='px-6 lg:px-12 py-20'>
            <h1 className='text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Resources</h1>

            <article className='py-6 sm:py-12'>
                <div className='container p-6 mx-auto space-y-8'>
                    <div className='space-y-2 text-center'>
                        <h2 className='text-3xl font-bold'>A physical material</h2>
                        <p className='text-sm mb-16'>
                            A resource is a physical material that humans need and value such as land, air, and water.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-1 lg:grid-cols-4'>
                        {
                            blogData.map((blog, index) => (
                                <div key={index} className='flex flex-col items-center'>
                                    <img src={blog.imgSrc} alt={blog.title} />
                                    <h3 className='text-2xl font-semibold'>{blog.title}</h3>
                                    <p className='text-sm'>{blog.date}</p>
                                    <p className='text-sm'>{blog.views}</p>
                                    <p className='text-sm'>{blog.category}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Resources