import {createSlice} from '@reduxjs/toolkit'

const userData=createSlice({
    name:'userInfo',
    initialState:{
        personelData:[]
    },

    reducers:{
        addtoUser:(state,action)=>{
            console.log("action value",action);
state.personelData.push(action.payload)
        },

        logoutInfo:(state,action)=>{
            state.personelData=[]
        }
    }
})

export const {addtoUser,logoutInfo}=userData.actions
export default userData.reducer