import style from './Header.module.css'

import HeaderLogo from '../assets/IgniteLogo.svg'

export function Header(){
    return(
        <header className={style.header}>

            <img src={HeaderLogo} alt="Logotipo do cabeçalho da aplicação" />

            <strong>Ignite Feed</strong>
        </header>
    )
}