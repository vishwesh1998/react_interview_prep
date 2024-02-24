import {useState, useEffect} from 'react'
import './main.css'

export default function Main(){
    const [data, setData] = useState('')

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

    return <div className="container-fluid main">
        <div className="row couresal container">
            <img src={data?data[0].thumbnail:''}/>
        </div>

        <div className='row brands'>
            <h2><b>MEDAL WORTHY BRANDS TO BAG</b></h2>
            <div className='col-lg-12 d-flex'>
                {data?data.slice(0,6).map(p=><div className='brandBox'><img src={p.thumbnail}/></div>):''}
                <div></div>
            </div>
        </div>

        
        <div className='row brands'>
            <h2><b>GRAND GLOBAL BRANDS</b></h2>
            <div className='col-lg-12 d-flex'>
                {data?data.slice(7,12).map(p=><div className='brandBox'><img src={p.thumbnail}/></div>):''}
                <div></div>
            </div>
        </div>

        <div className='row brands'>
        <h2><b>SHOP BY CATEGORY</b></h2>
        </div>

        <div className='row'>
                {data?data.slice(11,42).map(p=><div className='categoryBox col-lg-2'><img src={p.thumbnail}/></div>):''}
                {/* <div></div> */}
            {/* </div> */}
        </div>
    </div>
}