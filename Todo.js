
import React, { Component, useContext, useReducer, useState } from 'react'


const TodoContext = React.createContext({
    todo: [
        { task: "eat right", completed: false }
    ]
})


const Todo = () => {
    return (
            <TodoContext.Consumer>
                {
                    ({todo}) => (<div>{JSON.stringify(todo)}</div>)                    
                }
            </TodoContext.Consumer>
    )
}

export default Todo;    