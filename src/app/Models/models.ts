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
export class citoyen{
    id!:number;
    nom:string;
    prenom:string;
    email:string;
    telephone:number;
    cin:string;
    municipName:string;
    constructor(){
        this.nom=''
        this.prenom=''
        this.email=''
        this.telephone=0
        this.cin=''
        this.municipName=''
    }

}
export class municipalite{
    id!:number;
    nom:string;

    email:string;
    telephone:number;
    adresse:string;
    constructor(){
        this.nom=''
        this.email=''
        this.telephone=0
        this.adresse=''
    }

}
export class reclamation{
    id!:number;
    nom:string;
    email:string;
    municipalite:string;
    title:string;
    description:string;
    constructor(){
        this.nom=''
        this.email=''
        this.municipalite=''
        this.title=''
        this.description=''
    }

}