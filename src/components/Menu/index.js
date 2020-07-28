import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink'

import Button from '../Button'

function Menu (){
    
    return (
        <nav className="Menu">
            
            <a href="#">
                <img src={Logo} className="Logo" alt="DEFLIX"/>
            </a>

            <Button as="a" className="ButtonLink" href="#">
                Novo vídeo
            </Button>

        </nav>
    )
    
}

export default Menu;