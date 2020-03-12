let initState = {
    
}

let actionsFn = {
    ADD_COUNT(state, action){
        state.count += action.num;
    }
}

export default function (state = initState, action) {
  
    let newState = JSON.parse(JSON.stringify(state));
    actionsFn[action.type] && actionsFn[action.type](newState, action)
    return newState
}

