import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'

const AllLists = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.lists)
    const noLists = ( <span>No lists=( Create the first one!</span> )

    return (
        <div>
            { lists.map(list => {
                return (
                    <List key={list.id} list={list} />
                )
            }) }
            {
                lists.length < 1 ? noLists : null
                
            }
        </div>
    )
}

export default AllLists