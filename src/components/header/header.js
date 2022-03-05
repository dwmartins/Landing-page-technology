import './header.css'

function Header () {

    return (
        <header>

            <nav>

                <div className='menu'>
                    <div className='div1'></div>
                    <div className='div2'></div>
                    <div className='div3'></div>
                </div>

                <div className='logo'>
                    <p>Logo</p>
                </div>

                <div className='nav-list'>
                    

                    <div className='links'>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Contato</a></li>
                            <li><a href='#'>Quem somos</a></li>
                        </ul>
                    </div>
                </div>

            </nav>

        </header>
    )
}

export default Header;