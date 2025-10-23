import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

const clienteSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),

  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),

  telefone: yup.string().min(10, 'Telefone inválido'),

  cpf: yup
    .string()
    .required('O CPF é obrigatório')
    .test('is-cpf', 'CPF inválido', (value) => {
      if (!value) return false;
      return cpf.isValid(value);
    }),
});

export default clienteSchema;
