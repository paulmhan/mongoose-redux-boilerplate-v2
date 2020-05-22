Actions
- payloads of info that send data from app to store
- the only source of info for the store
- send using "store.dispatch()"
- must have a type property


Reducers
- in redux, the application state is stored in a single object
- reducer is a pure function that takes the previous state and an action, and returns the next state
- reducer needs to stay pure, so you would never 
    a) mutate its arguments
    b) perform side effects like API calls and routing transitions
    c) call non pure functions like Date.now() or Math.random()