
import { IoGridOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { openSideMenu } from '../../../store/slices';
import { AppDispatch } from '../../../store/store';

export const MenuMobile = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className='w-full'>
      <button  onClick={() => dispatch(openSideMenu())} className='fixed lg:hidden p-8'>
        <IoGridOutline size={30}/>
      </button>
 
    </div> 
  )
}
