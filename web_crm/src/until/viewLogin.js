import React from 'react'
export default (Com) => {
    return props=> {
            if (!localStorage.user) {
                props.history.push('/login')
                return 
            }
            return (
                <Com {...props}/>
            );
    }
}