import React from 'react'
import cn from 'classnames'
import cnBind from 'classnames/bind'
import styles from './UserList.module.scss'
import Item from './Item'

const cx = cnBind.bind(styles)

const index = (props) => {
    const ListClassnames = cn('discord', cx('list'))
    const {userList} = props
    console.log('props',props);

  return (
    <div className={ListClassnames}>
        {userList.map((item)=> {
            const { id } = item
            console.log(userList);
        return <Item 
        uId = {id}
        {...item}/>
        })}
    </div>
  )
}

export default index