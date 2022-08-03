/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const UserTile = ({checked, users, offset, PER_PAGE}) => {
  return (
    <div className='tile'>
        {
            checked === "male" ?

            <>
                {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                    return(
                        <>
                            {
                                user.gender === "male" ?

                                <div className='card' key={index}>
                                    <div className='user-info'>
                                        <img src={user.picture.thumbnail} alt="user-picture" />
                                        <div>
                                            <h3 style={{fontSize: '18px'}}>{user.name.last}, {user.name.first}</h3>
                                            <p style={{fontSize: '12px'}}>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className='card-bottom'>
                                        <p>{user.registered.date.substring(0,10)}</p>
                                        <p>{user.login.username}</p>
                                    </div>
                                </div>

                        :

                        ""
                            }
                        </>
                    )
                })}
            </>

            :

            checked === "female" ?
                
            <>
                {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                    return(
                        <>
                            {
                                user.gender === "female" ?

                                <div className='card' key={index}>
                                    <div className='user-info'>
                                        <img src={user.picture.thumbnail} alt="user-picture" />
                                        <div>
                                            <h3 style={{fontSize: '18px'}}>{user.name.last}, {user.name.first}</h3>
                                            <p style={{fontSize: '12px'}}>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className='card-bottom'>
                                        <p>{user.registered.date.substring(0,10)}</p>
                                        <p>{user.login.username}</p>
                                    </div>
                                </div>

                        :

                        ""
                            }
                        </>
                    )
                })}
            </>

            :

            checked === "all" ?

            <>
                {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                    return(
                        <div className='card' key={index}>
                            <div className='user-info'>
                                <img src={user.picture.thumbnail} alt="user-picture" />
                                <div>
                                    <h3 style={{fontSize: '18px'}}>{user.name.last}, {user.name.first}</h3>
                                    <p style={{fontSize: '12px'}}>{user.email}</p>
                                </div>
                            </div>
                            <div className='card-bottom'>
                                <p>{user.registered.date.substring(0,10)}</p>
                                <p>{user.login.username}</p>
                            </div>
                        </div>
                    )
                })}
            </>

            :

            ""

        }
    </div>
  )
}

export default UserTile