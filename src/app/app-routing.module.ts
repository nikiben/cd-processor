import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessorComponent } from './pages/processor/processor.component';

const routes: Routes = [
    { path: '', component: ProcessorComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
