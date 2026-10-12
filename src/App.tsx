import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delUser, editUser } from './app/counterSlice'
import AddDialog from './components/AddDialog'

const App = () => {
  let {data}=useSelector((state)=>state.data)
  let dispatch=useDispatch()
  let[open,setOpen]=useState(false)
  return (
    <>
      <div>
         <button onClick={() => setOpen(true)}>Add</button>
        <AddDialog open={open} setOpen={setOpen}/>
        {data && data.map((e)=>(
          <div className='boxcha' key={e.id}>
            <img style={{width:"100px"}} src={e.image} alt="" />
            <h2>{e.name}</h2>
            <h2>{e.surname}</h2>
            <p>{e.age}</p>
            <p>{e.email}</p>
            <p>{e.status?"Online":"Offline"}</p>
            <button onClick={()=>dispatch(delUser(e.id))}>Delete</button>
            <button onClick={()=>dispatch(editUser)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App