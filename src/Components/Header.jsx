import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <div className='py-4'> <img className='w-[400px]' src={logo} alt="" /></div>
           <p className='text-gray-400'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-gray-600'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;