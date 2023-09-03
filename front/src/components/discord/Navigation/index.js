import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import cn from 'classnames'
import cnBind from 'classnames/bind'

//storage
import data from '../../../data'
//scss
import styles from './navigation.module.scss'

//components
import Channel from './Channel'
import UserList from './UserList'
import InformPanel from './InformPanel'

const cx = cnBind.bind(styles)

const index = (props) => {
    const UserListclassname = cn('item', cx('userList'))
    const InformPanelclassname = cn('item', cx('informPanel'))
    const ChanneTextlMenuclassname = cn('name', cx('textChat'))
    const AddChnBtnclassname = cn('elem', cx('addBtn'))
    const TextNameChnclassname = cn('title', cx('text-chat'))

  return (
    <div className={cx('set')}>
        <div className={cn(styles['channelList'])}>
            <div className={ChanneTextlMenuclassname}>
                <div>ТЕКСТОВІ ЧАТИ</div>
                <div className={AddChnBtnclassname}>+</div>
            </div>
            <Channel/>
        </div>
        <div className={UserListclassname}>
            ГОЛОСОВІ КАНАЛИ
            <UserList
            userList = {data}/>
        </div>
        <div className={InformPanelclassname}>
            <InformPanel/>
        </div>
    </div>
  )
}

export default index