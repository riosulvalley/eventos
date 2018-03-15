'use strict'

import React from 'react'
import SvgIcon from '../../components/svg-icon'

// const footerLinks = [{
//   href: 'https://github.com/frontendbr/forum',
//   title: 'Acesso nosso fórum',
//   content: 'Fórum'
// }, {
//   href: 'https://github.com/frontendbr/vagas',
//   title: 'Publique ou encontre uma vaga',
//   content: 'Vagas'
// }]

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
        {/* <ul className='footer-inner--nav'>
          {footerLinks.map(({ href, title, content }, index) => (
            <li key={index}>
              <a className='btn-link' href={href} title={title}>
                {content}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>

    {/* <div className='footer-hold'>
      <div className='container'>
        <p>
          &copy; 2018 {' '}
          <a href='http://riosulvalley.com.br'>
            RioSulValley
          </a>
        </p>
      </div>
    </div> */}
  </footer>

)

export default MainFooter
