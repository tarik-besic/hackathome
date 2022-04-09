import React from 'react'
import Logo from "../../assets/images/Logo.png"

const Home = () => {
  return (
    <>
        <div className='homeScreen'>
            <div className='Screen'>
                <div className='top'>
                    <div className='logo'><img src={Logo} alt="" /></div>
                    <div className='link'>
                    <a href='#'>Volontiraj</a>
                    <a href='#'>Projekti</a>
                    <a href='#'>Login</a>
                    </div>
                </div>
                <div className='title'>
                    <h1> 
                        Šta je DKU?
                    </h1>
                </div>
                <div className='text'>
                    <h2>
                        Društveno korisno učenje (eng. service learning) predstavlja snažan oblik pedagogije
                        koji učeniku pruža mogućnost za povezivanje iskustava kroz pružanje usluga u
                        zajednici sa intelektualnim kontekstom svog obrazovanja.
                    </h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home