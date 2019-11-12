import { toast } from 'react-toastify'
import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import { updateProfileSuccess, updateProfileFailure } from './actions'

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data
    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile)

    toast.success('Sucesso!', 'Perfil Atualizado')

    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    toast.error(
      'Falha na atualização',
      'Erro na atualização do perfil, verifique seus dados'
    )
    yield put(updateProfileFailure())
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])
