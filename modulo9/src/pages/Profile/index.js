import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions'

import AvatarInput from './AvatarInput'

export default function Profile() {
  const profile = useSelector(state => state.user.profile)
  const dispatch = useDispatch()

  function handleSubmit(data){
    dispatch(updateProfileRequest(data))
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name='name' placeholder='Nome completo' />
        <Input 
          name='email' 
          type='email' 
          placeholder="Seu E-mail" 
        />
        
        <hr />

        <Input 
          name='current-password' 
          type='password' 
          placeholder='Sua senha atual'
        />
        <Input 
          name='new-password' 
          type='password' 
          placeholder='Nova senha' 
        />
        <Input 
          name='confirmPassword' 
          type='password' 
          placeholder='Confirme a senha' 
        />

        <button type='submit'> Atualizar Perfil </button>
      </Form>
      <button type='button'> Sair do Gobaber </button>
    </Container>
  );
}
