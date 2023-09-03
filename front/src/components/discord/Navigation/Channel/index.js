import React from 'react'
import cn from 'classnames'
import cnBind from 'classnames/bind'
//scss
import styles from './Channel.module.scss'

const cx = cnBind.bind(styles)

const index = () => {
    const ChnListclassname = cn('item', cx('item'))
  return (
    <div>
        <div className={ChnListclassname}># чат</div>
        <div className={ChnListclassname}># матеріали</div>
        <div className={ChnListclassname}># домашки</div>
        <div className={ChnListclassname}># відвідування</div>
        <div className={ChnListclassname}># інформація</div>
    </div>
  )
}

export default index