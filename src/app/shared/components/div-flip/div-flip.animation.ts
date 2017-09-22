import {trigger, state, style, transition, animate } from '@angular/core';

export const animation = trigger('flipState', [
    state('active', style({
        transform: 'rotateY(179.9deg)'
    })),
    state('inactive', style({
        transform: 'rotateY(0)'
    })),
    transition('active => inactive', animate('750ms ease-out')),
    transition('inactive => active', animate('750ms ease-in'))
]) 