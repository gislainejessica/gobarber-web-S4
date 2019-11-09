import { all, takeLatest, put, call } from 'redux-saga/effects'
import api from '~/services/api'
import { signSuccess } from './actions'

import history from '~/services/history'


export function* signIn({ payload }) {
  const { email, password } = payload

  const response = yield call(api.post, 'sessions', {
    email,
    password
  })

  const { token, user } = response.data

  if (!user.provider) {
    console.error('Usuario não é prestador')
    return
  }

  yield put(signSuccess(token, user))
  history.push('/dashboard')
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
