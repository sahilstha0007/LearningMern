import React, { useContext } from 'react'
import { UserContext } from '../App'

function ChildC() {
    const user = useContext(UserContext)
    return (
        <div>
            Data as props:{user.name}
        </div>
    )
}

export default ChildC
