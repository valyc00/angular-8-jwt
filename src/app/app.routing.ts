import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RubricaComponent } from './rubrica';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'rubrica', component: RubricaComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);