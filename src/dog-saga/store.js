import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import { watcherSaga } from './middlewares/sagas'

export default function () {  
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(watcherSaga)

  return store
}
