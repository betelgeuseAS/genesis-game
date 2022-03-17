import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Start } from '../pages/Start';
import { Questions } from '../pages/Questions';
import { Result } from '../pages/Result';
import { NotFound } from '../pages/NotFound';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={ <Start /> } />
      <Route path="/questions" element={ <Questions /> } />
      <Route path="/result" element={ <Result /> } />
      <Route path="*" element={ <NotFound /> } />
    </Switch>
  );
};
