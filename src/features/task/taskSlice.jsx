import React from 'react'
import { createSlice, nanoid } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items:[],
        filters:'all'
    },
    reducers: {
        addTask: {
            reducer:(state, action) =>{
                state.items.push(action.payload)
            },
            prepare:(text) =>{
                return {
                    payload:{
                        id:nanoid(),
                        text,
                        completed:false
                    }
                }
            }
        },
        toggleTask:(state, action) =>{
            const task=state.items.find(task => task.id === action.payload)
            if(task){
                task.completed = !task.completed
            }
        } ,
        deleteTask:(state, action) =>{
            state.items = state.items.filter(task => task.id !== action.payload)
        },
        setFilter:(state, action) =>{
            state.filters = action.payload
        }
    }
})

export const {addTask,toggleTask,deleteTask,setFilter} = taskSlice.actions
export default taskSlice.reducer
