import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../Components/Crud.css'
import { addUser, deleteUser, updateUsername } from '../features/User'

const Crud = () => {

    const dispatch = useDispatch()

    const UserData = useSelector(state => state.user.value)
    // console.warn()
    const [modifyName, setModifyname] = useState('')
    const [name, setName] = useState()
    const [userName, setUserName] = useState()

    return (
        <>
            <div className="main">
                <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="username" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button onClick={() => {
                    dispatch(addUser({ id: UserData[UserData.length - 1].id + 1, name: name, username: userName }))
                    setName("")
                    setUserName("")
                }}>AddUser</button>
            </div>
            {
                UserData.map((d, i) => (
                    <div className="user">
                        <h2>{d.id}</h2>
                        <h2>{d.name}</h2>
                        <h3>{d.username}</h3>
                        <input type="text" name="username" placeholder="update-username" onChange={(e) => setModifyname(e.target.value)} />
                        <button onClick={() => {
                            dispatch(updateUsername({ id: d.id, username: modifyName }))
                            setModifyname("")
                        }}>Update</button>
                        <button onClick={() => dispatch(deleteUser({ id: d.id }))}>Delete</button>
                    </div>

                ))
            }
        </>
    )
}

export default Crud