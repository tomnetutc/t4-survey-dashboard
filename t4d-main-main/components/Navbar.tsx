import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const NavBar = () => (
  <header className='w-full fixed top-0 left-0 z-10 bg-white shadow-md'>
    <nav className='w-full mx-auto flex justify-between items-center px-10 custom-height'>
      <Link href='/' className='flex items-center'>
        <Image
          src='/logo-black.png'
          alt='logo'
          width={40}
          height={10}
          title="T4 Survey Dashboard"
          className='object-contain'
        />
        <span className='ml-2 text-primary-black font-semibold'>T4 Survey Dashboard</span>
      </Link>
      <div className='flex space-x-4'>
        <Link href='/'>
          <CustomButton
            title='Home'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          /> 
        </Link>
        <Link href='/Univariate/'>
          <CustomButton
            title='Uni-variate Analysis'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          />
        </Link>
        <Link href='/Bivariate'>
          <CustomButton
            title='Bi-Variate Analysis'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          />
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
