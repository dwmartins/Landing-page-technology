import './layout.css'
import imgLayout from '../img/layout.png'

function Layout () {
    return(
        
        <div className='contents'>

            <div className='text'>
                <h1>Graphic Designer</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare, dui ultrices lacinia rhoncus, est ligula fringilla arcu, nec blandit purus turpis a nibh. Sed nibh purus, placerat nec cursus sit amet, imperdiet vitae mi.</p>

                <a href='#'>Get Started</a>
            </div>

            <div className='img'>
                <img src={imgLayout}/>
            </div>

        </div>

    )
}

export default Layout;