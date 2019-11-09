import Reactotron from 'reactotron-react-js'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.15.9' })
    .connect()
  console.tron = tron
  // tron.clear()
}