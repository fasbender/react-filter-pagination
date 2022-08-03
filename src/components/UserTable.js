/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './style.css'

const UserTable = ({checked, users, offset, PER_PAGE}) => {


  return (
    <div>
          {
            checked === "male" ?

            <table id='users'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>Registration Date</th>
                        <th>Username</th>
                    </tr>
                </thead>
            {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                return(
                    <>
                        {
                            user.gender === "male" ?

                            <tbody key={index}>
                                <tr>
                                    <td>
                                        <div className='user-info'>
                                            <img src={user.picture.thumbnail} alt="user-picture" />
                                            <div>
                                                <p>{user.name.last}, {user.name.first}</p>
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.registered.date.substring(0,10)}</td>
                                    <td>{user.login.username}</td>
                                </tr>
                            </tbody>

                    :

                    ""
                        }
                    </>
                )
            })}
        </table>

        :

        checked === "female" ?

        <table id='users'>
        <thead>
            <tr>
                <th>NAME</th>
                <th>Registration Date</th>
                <th>Username</th>
            </tr>
        </thead>
            {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                return(
                    <>
                        {
                            user.gender === "female" ?

                            <tbody key={index}>
                                <tr>
                                    <td>
                                        <div>
                                            <img src={user.picture.thumbnail} alt="user-picture" />
                                        </div>
                                        <div>
                                            <p>{user.name.last}, {user.name.first}</p>
                                            <p>{user.email}</p>
                                        </div>
                                    </td>
                                    <td>{user.registered.date.substring(0,10)}</td>
                                    <td>{user.login.username}</td>
                                </tr>
                            </tbody>

                    :

                    ""
                        }
                    </>
                )
            })}
        </table>

        :

        checked === 'all' ?

        <table id='users'>
        <thead>
            <tr>
                <th>NAME</th>
                <th>Registration Date</th>
                <th>Username</th>
            </tr>
        </thead>
            {users && users.slice(offset, offset + PER_PAGE).map((user, index) => {
                return(
                    <tbody key={index}>
                        <tr>
                            <td>
                                <div>
                                    <img src={user.picture.thumbnail} alt="user-picture" />
                                </div>
                                <div>
                                    <p>{user.name.last}, {user.name.first}</p>
                                    <p>{user.email}</p>
                                </div>
                            </td>
                            <td>{user.registered.date.substring(0,10)}</td>
                            <td>{user.login.username}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>

        :

        ""
    
        }
    </div> 
  )
}

export default UserTable