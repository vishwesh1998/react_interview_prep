import {useState, useEffect} from 'react'
import './main.css'

export default function Main(props){
    const [data, setData] = useState('')
    const [btn, setBtn] = useState(false)

    let fetchApi = async () =>{
        const value = await fetch('https://dummyjson.com/products')
        const d = await value.json()
        console.log(d.products)
        if(d.products)
        setData(d.products)
    }

    useEffect(()=>{
        fetchApi()
    },[])

    let addToCart = (p) =>{
        if(window.confirm("You want to add it to cart !"))
            props.cartValue(p)    
        }

    return <div className="container-fluid main">
        <div className="row couresal container">
            <img src={data?data[0].thumbnail:''}/>
        </div>

        <h2 className='headings'><b>MEDAL WORTHY BRANDS TO BAG</b></h2>
        <div className='row brands'>
            <div className='col-lg-12 d-flex box'>
                {data?data.slice(0,6).map(p=><div className='brandBox'>
                    <img src={p.thumbnail}/>
                    <b>{p.price}/- Rs</b>
                    <br/>
                    <button className='btn-sm crt' onClick={()=>addToCart(p)}>Add To Cart</button>
                    </div>):''}
                <div></div>
                            </div>
        </div>

        
            <h2 className='Headings'><b>GRAND GLOBAL BRANDS</b></h2>
        <div className='row brands'>
            <div className='col-lg-12 d-flex box'>
                {data?data.slice(7,13).map(p=><div className='brandBox'>
                    <img src={p.thumbnail}/>
                    {/* <br/> */}
                    {/* <b>{p.brand}</b> */}
                    <b>{p.price}/- Rs</b>
                    <br/>
                    <button className='btn-sm' onClick={()=>addToCart(p)}>Add To Cart</button>
                    </div>):''}
                <div></div>
            </div>
        </div>

        <h2 id='h2'><b>SHOP BY MORE BRANDS</b></h2>
        <div className='row brands'>
        </div>

        <div className='row'>
                {data?data.slice(14,22).map(p=><div className='categoryBox col-lg-2'>
                    <img src={p.thumbnail}/>
                    <b>{p.price}/- Rs</b>
                    {/* <br/> */}
                    <button className='btn-sm' onClick={()=>addToCart(p)}>Add To Cart</button>
                    </div>):''}
        </div>
    </div>
}