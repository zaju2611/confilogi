import Logo from '../assets/images/logo-bookmark.svg'
import BurgerBtn from '../assets/images/icon-hamburger.svg'

export default function Nav(){
    return <div className='navigation'>
        <img src={Logo} alt="company logo"/>
        <img src={BurgerBtn} alt="menu button"/>   
    </div>
}