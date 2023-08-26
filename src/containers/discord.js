import React from 'react'

import styles from './discord.module.scss'
import cn from 'classnames';
import cnBind from 'classnames/bind';

//components
import Navigation from '../components/discord/Navigation'

const cx = cnBind.bind(styles)

const discord = () => {
  const Navclassname = cn('Discord', cx('nav'))
  const MainSectionclassname = cn('Discord', cx('mainSec'))

  return (
    <div className={cx('general')}>
      <div className={Navclassname}>
        <Navigation/>
      </div>
      <div className={MainSectionclassname}></div>
    </div>
  )
}

export default discord