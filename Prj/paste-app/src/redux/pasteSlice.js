import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
    name: "paste",
    initialState,
    reducers: {

        addToPastes: (state,action) =>{

        },
        updateToPastes:(state,action) =>{

        },
        resetAllPastes: (state,action) =>{

        },
        removeFromPaste:(state,action)=>{

        }
    }
})

export const {addToPastes, updateToPastes, removeFromPaste ,resetAllPastes } = pasteSlice.createSlice()

export default pasteSlice.reducer