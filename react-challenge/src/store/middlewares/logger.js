const logger = store => next => action => {
    console.log('dispatch action', action);
    console.log('state before action', store.getState());
    next(action)
    console.log('state after action', store.getState());
}

export default logger