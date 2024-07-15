import React from 'react'

const Hero = () => {
  return (
    <div>

<section className="bg-blue-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Your personal 
        <strong className="font-extrabold text-blue-700 sm:block">File Sharing Platform </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Our file sharing platform offers secure, easy-to-use file transfers with drag-and-drop functionality, real-time collaboration, and customizable access controls, <span className='text-blue-600 '>making it perfect</span> for individuals and businesses alike.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero