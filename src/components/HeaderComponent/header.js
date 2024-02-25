import './header.css'
// import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
// import { RiContactsLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Header(props){
    return <div className="container-fluid header">
        <div className='row'>
        <div className='col-lg-12 leftHeader'>
            <ul>
                <li><img src='./img/myntra.jpg'/></li>
                <li className='name'>MEN</li>
                <li className='name'>WOMEN</li>
                <li className='name'>KIDS</li>
                <li className='name'>HOME & LIVING</li>
                <li className='name'>BEAUTY</li>
                <li className='name'>STUDIO</li>
            </ul>
        </div>    
        <div className='col-lg-12'>
        <ul className='ul'>
                <li><input type='text' placeholder='Search for product, brand and more' className='form-control'/></li>
                <li className='headerFont'><Link to={'/'} style={{color:'black', textDecoration:'none'}}><RiHome2Line/> Home</Link> </li>
                <li className='headerFont'><Link to={'/cart'} style={{color:'black', textDecoration:'none'}}><LuShoppingCart/> Cart {props.value.length==0?"":props.value.length}</Link></li>
                {/* <li className='headerFont'>Bag</li> */}
        </ul>
        </div>
        </div>
    </div>
}