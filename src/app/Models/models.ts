export class user{
  
    id!:number;
    name:string;
    userCin:string;
    password!:string;
    email:string;
    roles:string;
    active:number;
    constructor()
    {   

        this.name="";
        this.roles="";
        this.email="";
        this.userCin="";
        this.active=0;
    }
}
export class userauth{
    userCin!:string;
    password!:string;
}
export class service{
    idService!:number;
    nomService:string;
    type:string;
    commentaireService:string;
    constructor(){
        this.nomService=''
        this.type=''
        this.commentaireService=''
    }
}
