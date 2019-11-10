import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga';
// { host: '192.168.15.9' }

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()
  console.tron = tron
  // tron.clear()
}