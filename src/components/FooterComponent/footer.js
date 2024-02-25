import './footer.css'

export default function Footer(){
    return <div className="container-fluid footer">
        <div className='row'>
            <div className='col-lg-6 leftFooter'>
                <input type='text' className='form-control' placeholder='We Will Get Back To You !'/>
                <button className='btn-sm'>Click Me</button>
                <br/><br/>
                <b>All copyrights reserverd !</b>
            </div>
            <div className='col-lg-6 rightFooter text-center'>
                <p>MEN</p>
                <p>WOMEN</p>
                <p>KIDS</p>
                <p>HOME & LIVING</p>
                <p>BEAUTY</p>
                <p>STUDIO</p>
                </div>
        </div>
    </div>
}