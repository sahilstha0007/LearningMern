import React from "react"


const ChildComponent = React.memo((props) => {
    console.log("Child Component go rerender again")
    return (
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
    )
}
)


export default ChildComponent