import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
require('../style/index.css');

import ProfesorList from './common/components/Profesor/ProfesorListContainer';
import ProfesorCrear from './common/components/Profesor/ProfesorCrearContainer';

import ProfesionContainer from './common/components/Profesion/ProfesionCrearContainer';
import ProfesionList from './common/components/Profesion/ProfesionListContainer';

import EstudianteCrear from './common/components/Estudiante/EstudianteCrearContainer';
import EstudianteList from './common/components/Estudiante/EstudianteListContainer';

import NivelCrear from './common/components/Nivel/NivelCrearContainer';
import NivelList from './common/components/Nivel/NivelListContainer';

import GradoCrear from './common/components/Grado/GradoCrearContainer';
import GradoList from './common/components/Grado/GradoListContainer';

import CursoCrear from './common/components/Curso/CursoCrearContainer';
import CursoList from './common/components/Curso/CursoListContainer';

import SeccionCrear from './common/components/Seccion/SeccionCrearContainer';
import SeccionList from './common/components/Seccion/SeccionListContainer';

import CicloCrear from './common/components/Ciclo/CicloCrearContainer';
import CicloList from './common/components/Ciclo/CicloListContainer';

import EventoCrear from './common/components/Evento/EventoCrearContainer';
import EventoList from './common/components/Evento/EventoListContainer';


module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />

                <ProtectedRoute exact path="/profesions" component={ProfesionList} />
                <ProtectedRoute exact path="/profesions/:id/ver" component={ProfesionContainer} />
                <ProtectedRoute exact path="/profesions/crear" component={ProfesionContainer} />
                <ProtectedRoute exact path="/profesions/:id/editar" component={ProfesionContainer} />


                <ProtectedRoute exact path="/profesor" component={ProfesorList} />
                <ProtectedRoute exact path="/profesor/crear" component={ProfesorCrear} />
                <ProtectedRoute exact path="/profesor/:id/ver" component={ProfesorCrear} />
                <ProtectedRoute exact path="/profesor/:id/editar" component={ProfesorCrear} />

                <ProtectedRoute exact path="/estudiante" component={EstudianteList} />
                <ProtectedRoute exact path="/estudiante/crear" component={EstudianteCrear} />
                <ProtectedRoute exact path="/estudiante/:id/ver" component={EstudianteCrear} />
                <ProtectedRoute exact path="/estudiante/:id/editar" component={EstudianteCrear} />

                <ProtectedRoute exact path="/nivel" component={NivelList} />
                <ProtectedRoute exact path="/nivel/crear" component={NivelCrear} />
                <ProtectedRoute exact path="/nivel/:id/ver" component={NivelCrear} />
                <ProtectedRoute exact path="/nivel/:id/editar" component={NivelCrear} />

                <ProtectedRoute exact path="/grado" component={GradoList} />
                <ProtectedRoute exact path="/grado/crear" component={GradoCrear} />
                <ProtectedRoute exact path="/grado/:id/ver" component={GradoCrear} />
                <ProtectedRoute exact path="/grado/:id/editar" component={GradoCrear} />

                <ProtectedRoute exact path="/curso" component={CursoList} />
                <ProtectedRoute exact path="/curso/crear" component={CursoCrear} />
                <ProtectedRoute exact path="/curso/:id/ver" component={CursoCrear} />
                <ProtectedRoute exact path="/curso/:id/editar" component={CursoCrear} />

                <ProtectedRoute exact path="/seccion" component={SeccionList} />
                <ProtectedRoute exact path="/seccion/crear" component={SeccionCrear} />
                <ProtectedRoute exact path="/seccion/:id/ver" component={SeccionCrear} />
                <ProtectedRoute exact path="/seccion/:id/editar" component={SeccionCrear} />

                <ProtectedRoute exact path="/ciclo" component={CicloList} />
                <ProtectedRoute exact path="/ciclo/crear" component={CicloCrear} />
                <ProtectedRoute exact path="/ciclo/:id/ver" component={CicloCrear} />
                <ProtectedRoute exact path="/ciclo/:id/editar" component={CicloCrear} />

                <ProtectedRoute exact path="/evento" component={EventoList} />
                <ProtectedRoute exact path="/evento/crear" component={EventoCrear} />
                <ProtectedRoute exact path="/evento/:id/ver" component={EventoCrear} />
                <ProtectedRoute exact path="/evento/:id/editar" component={EventoCrear} />

                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
