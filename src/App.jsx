import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './Menu';

import Accueil from './Accueil';
import FriseChronologique from './FriseChronologique';
import SimpleMap from './SimpleMap';
import PersonnagesHistoriques from './PersonnagesHistoriques';
import EvenementsHistoriques from './EvenementsHistoriques';
import QuizzJeuxEducatifs from './QuizzJeuxEducatifs';
import ActualitesHistoriques from './ActualitesHistoriques';
import RessourcesPedagogiques from './RessourcesPedagogiques';
import Discussions from './Discussions';
import APropos from './APropos';
import Connexion from './Connexion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/frise-chronologique" element={<FriseChronologique />} />
          <Route path="/carte-interactive" element={<SimpleMap />} />
          <Route path="/personnages-historiques" element={<PersonnagesHistoriques />} />
          <Route path="/evenements-historiques" element={<EvenementsHistoriques />} />
          <Route path="/quizz-jeux-educatifs" element={<QuizzJeuxEducatifs />} />
          <Route path="/actualites-historiques" element={<ActualitesHistoriques />} />
          <Route path="/ressources-pedagogiques" element={<RessourcesPedagogiques />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
