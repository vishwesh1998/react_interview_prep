import './cart.css'

export default function Cart(props){
    return <div className="container-fluid cart">
        {/* <h1 className="text-center">Welcome to your cart !!</h1> */}
        <div className="row">
            <div className="col-lg-12">
        <h1 className="text-center">Welcome to your cart !!</h1>
            <table className="table table-striped table-responsive-lg table-dark">
                <thead>
                    <tr className='text-center'>
                        <th>title</th>
                        <th>image</th>
                        <th>Brand</th>
                        <th>price</th>
                        <th>Discount</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {props.value?props.value.map(p=><tr className='text-center'>
                        <td>{p.title}</td>
                        <td><img src={p.thumbnail} width={60} height={60}/></td>
                        <td>{p.brand}</td>
                        <td>{p.price}/- Rs</td>
                        <td>{p.discountPercentage}%</td>
                        <td><button className='btn-sm' onClick={()=>props.deleteCart(p)}>Delete</button></td>
                    </tr>):''}
                </tbody>
            </table>
            </div>
        {/* <h1 className="text-center">Welcome to your cart !!</h1> */}
        </div>
    </div>
}