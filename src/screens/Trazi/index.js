import React from 'react'

const Trazi = () => {
  return (
    <>
        <div className='search'>
            <input type="text" placeholder='Naziv' />
            <input type="text" placeholder='Trajanje'/>
            <select name="" id="">
                <option value="">Direktni</option>
                <option value="">Indirektni</option>
                <option value="">Istrazivanje</option>
                <option value="">Zagovaranje</option>
            </select>
        </div>
        <div className='kartice'></div>
    </>
    )
}

export default Trazi