import React, { lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Albums = lazy(() => import('./components/Albums'));
const Photos = lazy(()=> import("./components/Photos"))

const Router = () => (
  <Suspense fallback={<h2>loading..</h2>}>
      <Routes>
          <Route path='*' exact={true} element={<Albums />} />
          <Route path='/photos' exact={true} element={<Photos />}/>
      </Routes>
  </Suspense>
);

export default Router;