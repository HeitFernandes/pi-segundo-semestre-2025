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

export const motosSchema = yup.object().shape({
  placa: yup.string().required('A placa é obrigatória'),

  modelo: yup.string().required('O modelo deve ser preenchido'),

  cpf: yup
    .string()
    .required('O CPF do cliente é obrigatório')
    .test('is-cpf', 'CPF inválido', (value) => {
      if (!value) return false;
      return cpf.isValid(value);
    }),
});

export const motosUpdateSchema = yup.object().shape({
  MOTO_PLACA: yup.string().required('A placa é obrigatória'),

  MODELO_NOME: yup.string().required('O modelo deve ser preenchido'),

  CLI_CPF: yup
    .string()
    .required('O CPF do cliente é obrigatório')
    .test('is-cpf', 'CPF inválido', (value) => {
      if (!value) return false;
      return cpf.isValid(value);
    }),

  MOTO_ANO: yup.string().nullable(),
  MARCA_NOME: yup.string().nullable(),
  COR_NOME: yup.string().nullable(),
  MOTO_OBSERVACAO: yup.string().nullable(),
  MOTO_ATIVO: yup.mixed().nullable(),
});

export const agendamentosSchema = yup.object().shape({
  placa: yup.string().required('A placa é obrigatória.'),

  funcionario: yup.string().required('O campo mecânico deve ser preenchido.'),

  cliente: yup
    .string()
    .required('O CPF do cliente é obrigatório.')
    .test('is-CPF', 'CPF inválido', (value) => {
      if (!value) return false;
      return cpf.isValid(value);
    }),
});

export const ordensSchema = yup.object().shape({
  placa: yup.string().required('A placa da moto é obrigatória'),

  valor: yup.number().required('O valor da ordem é obrigatório.'),

  funcionario: yup
    .string()
    .required('O campo mecânico é obrigatório ser preenchido.'),

  cliente: yup
    .string()
    .required('O CPF do cliente é obrigatório.')
    .test('is-CPF', 'CPF inválido', (value) => {
      if (!value) return false;
      return cpf.isValid(value);
    }),
});

export default clienteSchema;
