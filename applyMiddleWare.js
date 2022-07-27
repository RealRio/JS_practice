export function applyMiddleware(middleware) {
    return createStore => (...args) => {
      const store = createStore(...args)
      let dispatch = store.dispatch
  
      const midApi = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      dispatch = middleware(midApi)(store.dispatch)
  
      return {
        ...store,
        dispatch
      }
  
    } 
}
  //thunk
  function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }
  
      return next(action);
    };
  }
  
  const thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;
  
  export default thunk;
  //es5=>
  function createThunkMiddleware(extraArgument) {
    return function({ dispatch, getState }) {   //可以看到applyMiddleWare中这里传入midApi参数
        return function(next){                 // 这里传入dispatch，返回一个增强过功能，能处理action==='function'情况的func作为新的dispatch
            return function(action){
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }

                return next(action);
            };
        }
    }
}
