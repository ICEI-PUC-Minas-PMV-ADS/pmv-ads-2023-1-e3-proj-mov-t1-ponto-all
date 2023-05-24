import React from 'react';

import { useUser } from '../contexts/UserContext';

import Main from './Auth';
import Auth from './Main';

const Route = () => {
  const { signed } = useUser();

  return <>{signed ? <Main /> : <Auth />}</>;
};

export default Route;