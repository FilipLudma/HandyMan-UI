import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from 'app/components/user/login/social-login/social-login.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [SocialLoginComponent],
    exports: [SocialLoginComponent]
})

export class SocialLoginModule { }
