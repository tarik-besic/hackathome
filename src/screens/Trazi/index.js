import React from 'react'

const Trazi = () => {
  return (
    <>
        <div className='search'>
            <div className='top'>
            <label htmlFor="name">Naziv:</label>
            <input type="text" name='name' placeholder='Naziv'/>
            <label htmlFor="trajanje">Trajanje:</label>
            <input type="text" name='trajanje' placeholder='Trajanje'/>
            </div>
            <div className='bot'>
            <label htmlFor="DKU">Vrsta DKU-a:</label>
            <select name="DKU" id="">
                <option value="">Direktni</option>
                <option value="">Indirektni</option>
                <option value="">Istrazivanje</option>
                <option value="">Zagovaranje</option>
            </select>
            <label htmlFor="Active">Stanje:</label>
            <select name="Active" id="">
                <option value="">Aktivni</option>
                <option value="">Zavrseni</option>
            </select>
            </div>
            <div className='dugme'>
            <button className='button'>Traži</button>
            </div>
        </div>
        <div className='kartice'>
            
        </div>
    </>
    )
}

export default Trazi