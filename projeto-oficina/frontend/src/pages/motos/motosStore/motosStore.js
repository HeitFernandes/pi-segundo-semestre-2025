import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCreditCardFill } from 'react-icons/bs';
import {
  FaCalendar,
  FaBookmark,
  FaAddressCard,
  FaArrowAltCircleLeft,
} from 'react-icons/fa';
import { FaMotorcycle } from 'react-icons/fa6';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as newMotos from './styled';
import { ArrowReturn } from '../../clientes/clientesStore/styled';
import axios from '../../../services/axios';
import { motosSchema } from '../../../services/validator';

export default function MotosStore() {
  const navigate = useNavigate();

  const handleArrowReturn = () => {
    navigate('/motos');
  };

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(motosSchema),
  });

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/motos/store.php', data);

      toast.success(response.data.message);
      navigate('/motos');
      reset();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível se conectar com o servidor.');
      }
    }
  };

  const onInvalid = (validationErrors) => {
    Object.values(validationErrors).forEach((e) => {
      toast.error(e.message);
    });
  };

  return (
    <>
      <newMotos.DivTitle>
        <newMotos.TitleTop>Cadastro de Motos</newMotos.TitleTop>
      </newMotos.DivTitle>

      <newMotos.Container>
        <newMotos.DivImg />
        <ArrowReturn className="ArrowReturnMotos">
          <FaArrowAltCircleLeft onClick={handleArrowReturn} />
        </ArrowReturn>

        <newMotos.Form
          method="POST"
          action=""
          onSubmit={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <newMotos.PlacaAno>
            <newMotos.DivLabel>
              <newMotos.InputPlaca
                type="text"
                {...register('placa')}
                placeholder=""
              />
              <newMotos.Label>
                <BsCreditCardFill />
                Placa
              </newMotos.Label>
            </newMotos.DivLabel>
            <newMotos.DivLabel>
              <newMotos.InputAno
                type="text"
                {...register('ano')}
                placeholder=""
              />
              <newMotos.Label>
                <FaCalendar />
                Ano
              </newMotos.Label>
            </newMotos.DivLabel>
          </newMotos.PlacaAno>

          <newMotos.MarcaCor>
            <newMotos.DivLabel>
              <newMotos.InputMarca
                type="text"
                {...register('marca')}
                placeholder=""
              />
              <newMotos.Label>
                <FaBookmark />
                Marca
              </newMotos.Label>
            </newMotos.DivLabel>

            <newMotos.DivLabel>
              <newMotos.InputCor
                type="text"
                {...register('cor')}
                placeholder=""
              />
              <newMotos.Label>
                <IoColorPaletteOutline />
                Cor
              </newMotos.Label>
            </newMotos.DivLabel>
          </newMotos.MarcaCor>

          <newMotos.ModeloCpf>
            <newMotos.DivLabel>
              <newMotos.InputModelo
                type="text"
                {...register('modelo')}
                placeholder=""
              />
              <newMotos.Label>
                <FaMotorcycle />
                Modelo
              </newMotos.Label>
            </newMotos.DivLabel>

            <newMotos.DivLabel>
              <newMotos.InputCPF
                type="text"
                {...register('cpf')}
                placeholder=""
              />
              <newMotos.Label>
                <FaAddressCard />
                CPF
              </newMotos.Label>
            </newMotos.DivLabel>
          </newMotos.ModeloCpf>

          <newMotos.InputOBS
            placeholder="Observação"
            {...register('observacao')}
          />

          <newMotos.DivButtons>
            <newMotos.ButtonSubmit type="submit">Salvar</newMotos.ButtonSubmit>
            <newMotos.ButtonClear
              onClick={(e) => {
                e.preventDefault();
                reset();
              }}
            >
              <MdOutlineClear className="Clear" />
              Limpar
            </newMotos.ButtonClear>
          </newMotos.DivButtons>
        </newMotos.Form>
      </newMotos.Container>
    </>
  );
}
