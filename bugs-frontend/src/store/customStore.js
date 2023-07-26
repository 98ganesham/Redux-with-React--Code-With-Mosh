import reducer from './reducer';


function customStore(reducer){
    let state;
    let listeners = [];
    

    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener)
    }
    function dispatch(action){
        state = reducer(state, action);
        for (let i = 0; i < listeners; i ++)
        {
            listeners[i]();
        }
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}

export default customStore(reducer);