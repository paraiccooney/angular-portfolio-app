import { trigger, transition, state, animate, style} from '@angular/animations';

export let fade =
    trigger('enterTrigger', [
    transition('void => *', [style({opacity: '0'}), animate('1000ms')])
    ]);
    
export let slideIn =
trigger('slideTrigger', [
    transition(':enter', [style({transform:'translateX(-10px)'}), animate('1000ms')])
    ])