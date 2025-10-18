import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { NotFound, TitleOne, Footer404 } from './styled';

export default function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <NotFound>
      <TitleOne>
        <h1 className="Ops">Ooops!</h1>
        <h1 className="MiniTitle">Essa página fugiu da oficina!</h1>
      </TitleOne>
      <h1 className="p404">404</h1>
      <Footer404>
        <h1>Você será redirecionado para a home em 5 segundos...</h1>
      </Footer404>
    </NotFound>
  );
}
