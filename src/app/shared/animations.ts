import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const slideInTrigger: AnimationTriggerMetadata =
  trigger('slideIn', [
    state('', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate('300ms 0ms ease-out')
    ]),
    transition(':leave', [
      animate('300ms 0ms ease-in', style({
        opacity: 0,
        transform: 'translateX(100px)'
      }))
    ])
  ]);
