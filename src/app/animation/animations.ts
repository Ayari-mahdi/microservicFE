import { animate, style, transition, trigger } from '@angular/animations';
export let fade =
    trigger('fade',[
      transition('void => *',[
        style({
            transform:'translateY(12%)  translateX(0%)',
            opacity:0,
        }),
        animate('0.5s',style({transform:'translateY(0%)  ',opacity:1}))
      ]),
      transition('*=>void',[
        
        animate('2s',style({transform:'translateX(100%)'}))
      ])
    ])


    export let fadefromleft =
    trigger('fadefromleft',[
      transition('void => *',[
        style({
            transform:'translateX(-10%) translateY(0%) ',
            opacity:0.5,
        }),
        animate('0.4s',style({transform:'translateX(0%)  ',opacity:1}))
      ]),
      transition('*=>void',[
        
        animate('2s',style({transform:'translateX(100%)'}))
      ])
    ])   
    
    export let fadefromright =
    trigger('fadefromright',[
      transition('void => *',[
        style({
            transform:'translateX(10%) translateY(0%) ',
            opacity:0.5,
        }),
        animate('0.3s',style({transform:'translateX(0%)  ',opacity:1}))
      ]),
      transition('*=>void',[
        
        animate('2s',style({transform:'translateX(100%)'}))
      ])
    ])  
    
    export let fadefromtop =
    trigger('fadefromtop',[
      transition('void => *',[
        style({
            transform:'translateY(-10%) translateY(0%) ',
            opacity:0.5,
        }),
        animate('0.3s',style({transform:'translateX(0%)  ',opacity:1}))
      ]),
      transition('*=>void',[
        
        animate('2s',style({transform:'translateX(100%)'}))
      ])
    ])  