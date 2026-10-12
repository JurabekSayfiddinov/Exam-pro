import React from 'react'
import { useDispatch } from 'react-redux'

const EditDialog = ({open,setOpen}) => {
    let dispatch=useDispatch()
    let editUser=(e)=>{
        e.preventDefault()
        let edit={
            
        }
    }
  return (
    <>
    <dialog>
        <form action="">
             <input type="text"  name='name' placeholder="Name..."/>
            <input type="text" name="surname" placeholder="Surname..."/>
            <input type="text"  name='age' placeholder="Age..."/>
            <input type="text" name="email" placeholder="Email..."/>
            <button type='submit'>Edit User</button>
            <button>Close</button>
        </form>
    </dialog>
    </>
  )
}

export default EditDialog