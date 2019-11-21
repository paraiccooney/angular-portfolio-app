import { trigger, transition, state, animate, animation, style, keyframes, 
useAnimation, query, group, animateChild} from '@angular/animations';


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
    transition(':enter', [style({transform:'translateX(100%)'}), animate('500ms')]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
    ]);



/* ROUTER ANIMATIONS */
export const slideInAnimation =
   trigger('routeAnimations', [
       
    /* CUSTOM ANIAMTIONS BETWEEN CERTAIN COMPONENTS */ 
        transition('About => Tech-Stack', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        
        transition('About => Portfolio', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        
        transition('About => Contact', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        
        transition('Tech-Stack => Portfolio', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        
        transition('Tech-Stack => Contact', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        
        transition('Portfolio => Contact', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),


    /* ANIMATIONS FOR EACH COMPONENT BETWEEN VOID & CREATED STATE */ 
    /* Home */
        transition('Home => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed',  width: '100%', height: '100%' }), 
                  { optional: true }),
             group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }), 
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateY(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateY(-100%)' }))
                      ], { optional: true }),
              ])
        ]),
    
    /* About */  
        transition('About => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
    
    /* Contact */    
        transition('Contact => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        
    /* Tech-Stack */    
        transition('Tech-Stack => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        
    /* Portfolio */    
        transition('Portfolio => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        
    /* Not-Found */    
        transition('Not-Found => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        
        
]);
