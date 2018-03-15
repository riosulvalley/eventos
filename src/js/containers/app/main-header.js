'use strict'

import React from 'react'

const MainHeader = () => (
  <header className='header' role='banner'>
    <a className='logo' href='./' role='logo'>
      <img src='img/logo-riosulvalley.png' />
    </a>
    <a
      className='btn-link'
      href='https://github.com/frontendbr/eventos'
      title='Anuncie seu evento'>
        Anunciar Evento
    </a>
  </header>
)

export default MainHeader
