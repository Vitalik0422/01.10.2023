
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
    const GeneralNavclassname = cn('general', cx('set'))
    const Channelclassname = cn('item', cx('channelList'))
    const UserListclassname = cn('item', cx('userList'))
    const InformPanelclassname = cn('item', cx('informPanel'))
    const ChanneTextlMenuclassname = cn('name', cx('textChat'))
    console.log(props);
  return (
    <div className={GeneralNavclassname}>
        <div className={Channelclassname}>
            <div className={ChanneTextlMenuclassname}>
                <div>ТЕКСТОВІ ЧАТИ</div>
                <div>+</div>
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