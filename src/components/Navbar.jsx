

import { logoImg, bagImg, locationImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-center items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={logoImg}  alt='logo' width={30} height={35}/>

            <div className='flex flex-1 justify-center items-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 text-sm cursor-pointer text-gray-200 hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <div className='flex items-center border border-gray-600 hover:border-white rounded-full px-3 py-1 transition-all'>
                    <img src={locationImg}  alt='location' width={20} height={20}/>
                    <p className='px-5 text-sm cursor-pointer text-gray-200 hover:text-white transition-all'>Händler wählen</p>
                </div>
                
                <img className='cursor-pointer' src={searchImg} alt='search' width={18} height={18}/>
                <img className='cursor-pointer' src={bagImg} alt='bag' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar