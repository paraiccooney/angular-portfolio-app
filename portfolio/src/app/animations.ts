import { trigger, transition, state, animate, animation, style, keyframes, useAnimation} from '@angular/animations';

export let fade =
    trigger('enterTrigger', [
    transition('void => *', [style({opacity: '0'}), animate('1000ms')])
    ]);
    

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
        offset: .2,
        opacity: 1,
        transform: 'translateX(20px)'
        }),
        style({
            offset:1,
            opacity:0,
            transform: 'translateX(-100%)'
        })
        ]))
    )
    

export let slide =
trigger('slideTrigger', [
    transition(':enter', [style({transform:'translateX(100%)'}), animate('1000ms')]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
    ]);
    
