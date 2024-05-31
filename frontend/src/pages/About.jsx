import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 p-4'>
      <div className=' bg-white p-6 rounded-lg text-center'>
        
        <p className='text-lg text-gray-700 mb-6'>
          We are a dedicated team of web development professionals committed to delivering high-quality, user-friendly websites that meet the unique needs of our clients. Our expertise spans across various aspects of web development, ensuring that your online presence is both impactful and engaging.
        </p>
        <div className='text-left mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Our mission is to empower businesses with cutting-edge web solutions that drive growth and success. We strive to create websites that are not only visually appealing but also optimized for performance and user experience.
          </p>
        </div>
        <div className='text-left mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Meet the Team</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <img
                src='https://img.freepik.com/premium-photo/businessman-works-laptop-does-data-analysis-creative-designer-looks-camera-smiles-ecommerce-startup-project_61243-20031.jpg?w=1380'
                alt='Team Member'
                className='w-full h-auto rounded-full mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>John Doe</h3>
              <p className='text-gray-600'>Lead Developer</p>
            </div>
            <div className='text-center'>
              <img
                src='https://img.freepik.com/premium-photo/portrait-young-man-using-laptop-while-sitting-table_1048944-24064691.jpg?w=1060'
                alt='Team Member'
                className='w-full h-auto rounded-full mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>Jane Smith</h3>
              <p className='text-gray-600'>Project Manager</p>
            </div>
            <div className='text-center'>
              <img
                src='https://img.freepik.com/premium-photo/cheerful-programmer-man-working-with-computers-office-copy-space_873668-4016.jpg?w=1380'
                alt='Team Member'
                className='w-full h-auto rounded-full mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>Sam Brown</h3>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className='text-left'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Join Our Team</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Are you passionate about web development? We are always looking for talented individuals to join our team. Get in touch with us to learn more about current opportunities.
          </p>
        </div>
        <a href='/contact' className='inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300'>
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default About
