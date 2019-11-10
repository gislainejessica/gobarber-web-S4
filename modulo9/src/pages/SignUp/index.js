import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'

import { signUpRequest } from '~/store/modules/auth/actions'


import logo from '~/assets/logo.svg'
// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um email válido').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória').min(6, 'No mínimo 6 caracteres')
})

export default function SigUp() {

  const dispatch = useDispatch()

  function handleSubmit({name, email, password}){
    dispatch(signUpRequest(name, email, password))
  }
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo"/>

        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua senha secreta"/>

        <button type="submit"> Criar Conta </button>
        <Link to="/"> Já tenho Login </Link>
      </Form>
    </>
  );
}
