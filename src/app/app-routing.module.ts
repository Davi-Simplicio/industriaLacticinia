import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TelaColetaComponent } from "./tela-coleta/tela-coleta.component";
import { TelaEmTransitoComponent } from "./tela-em-transito/tela-em-transito.component";
import { TelaRecepcaoComponent } from "./tela-recepcao/tela-recepcao.component";


const rotas: Route[]=[
    {
        path:'tela-coleta',
        component: TelaColetaComponent,
    },
    {
        path:'tela-transito',
        component: TelaEmTransitoComponent,
    },
    {
        path:'tela-recepimento',
        component: TelaRecepcaoComponent,
    },
    
    
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})
export class AppRoutingModule{}