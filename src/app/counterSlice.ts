import { createSlice } from "@reduxjs/toolkit"


export type dataSlice={
    id:number,
    name:string,
    age:number,
    image:string,
    surname:string,
    email:string,
    status:boolean
}

export type InitialState={
    data:[]
}

const initialState:InitialState={
    data:[
        {
            id:1,
            name:"Farhod",
            surname:"Nurullozoda",
            email:"nurullozodaf@gmail.com",
            image:"https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            age:21,
            status:true
        },
        {
            id:2,
            name:"Jurabek",
            surname:"Sayfiddinov",
            email:"jurabektj@icloud.com",
            image:"https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            age:20,
             status:false,
        },
        {
            id:3,
            name:"Mehrob",
            surname:"Rahmonov",
            email:"rahmonov1m@gmail.com",
            image:"https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            age:20,
            status:true
        },
    ]
}


export const counterSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
          delUser:(state,{payload})=>{
        state.data=state.data.filter(el=>el.id!=payload)
    },
    addUser:(state,{payload})=>{
        state.data=[...state.data,payload]
    },
    editUser:(state,{payload})=>{
        state.data=state.data.map(e=>{
          return e.id==payload.id?payload:e
        })
    }}
})

export const { delUser,addUser,editUser } = counterSlice.actions



export default counterSlice.reducer


