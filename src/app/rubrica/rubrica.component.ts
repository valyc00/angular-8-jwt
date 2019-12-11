import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Rubrica } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'rubrica.component.html' })
export class RubricaComponent {
    loading = false;
    rubricas: Rubrica[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getRubricas().pipe(first()).subscribe(rubricas => {
          //  this.userService.getRubricas().pipe().subscribe(rubricas => {
            this.loading = false;
            this.rubricas = rubricas;
        });
    }
}