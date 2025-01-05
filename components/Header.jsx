import React from 'react'

const Header = () => {
  return (
    <header className=' flex justify-between items-center px-7 py-5 md:px-16 shadow-md'>
        <h1 className=' font-bold text-2xl'><em><strong className='text-[#c85103]'>Q</strong></em>uery <em>V</em>ault</h1>
        <div><button className='flex font-medium px-4 py-1 rounded-md hover:bg-[#c85103] transition-all'>Login</button></div>
    </header>
)
}

export default Header