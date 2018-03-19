'use strict'

import React from 'react'
import SvgIcon from '../../components/svg-icon'

const MainFooter = () => (
  <footer className='footer' role='contentinfo'>
    <div className='footer-inner'>
      <div className='container-flex'>
        <div className='footer-inner--main'>
          <p>Criado com{' '}
            <SvgIcon id='heart' label='amor' />{' '}
             no {' '}
            <a href='http://riosulvalley.com.br'>
              Rio Sul Valley {' '}
            </a>
            e baseado no projeto de eventos do {' '}
            <a href='https://github.com/frontendbr/eventos'>
              Front-End BR.
            </a>
            <span className='right'>
              &copy; 2018 {' '}
              <a href='http://riosulvalley.com.br'>
                RioSulValley
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>

)

export default MainFooter
