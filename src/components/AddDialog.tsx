import { useDispatch } from "react-redux"
import { addUser } from "../app/counterSlice"


const AddDialog = ({open,setOpen}) => {
    let dispatch=useDispatch()
    let addNewUser=(e)=>{
        e.preventDefault()
        let newUser={
            name:e.target.name.value,
            surname:e.target.surname.value,
            email:e.target.email.value,
            age:e.target.age.value,
            id: Date.now()
        }
        dispatch(addUser(newUser))
        setOpen(!open)
    }
  return (
    <dialog open={open} onClose={()=>setOpen(!open)}>
        <form onSubmit={(e)=>addNewUser(e)}>
            <input type="text"  name='name' placeholder="Name..."/>
            <input type="text" name="surname" placeholder="Surname..."/>
            <input type="text"  name='age' placeholder="Age..."/>
            <input type="text" name="email" placeholder="Email..."/>
            <button type='submit'>Add User</button>
            <button>Close</button>
        </form>
    </dialog>
  )
}

export default AddDialog