import React from 'react'

import styles from './discord.module.scss'
import cn from 'classnames';
import cnBind from 'classnames/bind';
//import axios from 'axios';

//components
//import Navigation from '../../containers/discord/'

const cx = cnBind.bind(styles)

const discord = () => {
  const Navclassname = cn('Discord', cx('nav'))
  const MainSectionclassname = cn('Discord', cx('mainSec'))

  return (
    <div className={cx('general')}>
      <div className={Navclassname}>
       
      </div>
      <div className={MainSectionclassname}></div>
    </div>
  )
}

export default discord