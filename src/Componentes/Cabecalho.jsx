import HorizontalMenu from './HorizontalMenu'
import './Cabecalho.css'

export default function Cabecalho() {
    return(
        <>
            
                <div className='logo-area'>
                    <a id='link_logo' href="../index.html"><img src="/Logo-da-MICROEDI-INFORMÁTICA.ico" alt="" /></a>
                </div>
                <HorizontalMenu />
        </>
    );
}