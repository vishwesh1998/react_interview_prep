import Header from './components/HeaderComponent/header'
import Main from './components/MainComponent/main'
import Footer from './components/FooterComponent/footer'
import Cart from './components/CartComponent/cart'
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

export default function App(){
    const [value, setValue] = useState([])

    let cartValue = (d) =>{
        // console.log(d)
        setValue([...value,d])
        
            setTimeout(()=>{
                console.log(value)
            },10000)
    }

    let deleteCart = (p) =>{
        setValue(value.filter(e=>e.id!==p.id))
    }

    return (<div className='container-fluid App'>
        <Header value={value}/>
        <Routes>
            <Route path='/' element={<Main cartValue={cartValue} value={value}/>}/>
            <Route path='/cart' element={<Cart value={value} deleteCart={deleteCart}/>}/>
        </Routes>
        <Footer/>
        </div>)
}