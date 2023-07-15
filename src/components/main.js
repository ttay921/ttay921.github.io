import React from 'react';
import { Switch, Route } from 'react-router-dom';




import Landing from './landingpage';
import About from './about';
import UNCGlobal from './projects/uncglobal';
import WXYC from './projects/wxyc';
import Som from './projects/uncsom';
import Panopli from './projects/panopli';
import Hospital from './projects/hospital';
import Delta from './projects/deltapsi';
import FPG from './projects/fpg';
import Natural from './projects/natural';
import LogoAnimation from './projects/logo';
import Fun from './projects/fun';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/uncglobal" component={UNCGlobal} />
        <Route exact path="/wxyc" component={WXYC} />
        <Route exact path="/uncsom" component={Som} />
        <Route exact path="/panopli" component={Panopli} />
        <Route exact path="/hospitaldata" component={Hospital} />
        <Route exact path="/deltapsi" component={Delta} />
        <Route exact path="/fpg" component={FPG} />
        <Route exact path="/logoanimation" component={LogoAnimation} />
        <Route exact path="/wildfire" component={Natural} />
        <Route exact path="/fun" component={Fun} />
    </Switch>
)

export default Main;