import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';

const routes: Routes = [{
  path:"",component: HomePageComponent
},
{
  path:"about",component: AboutPageComponent
},
{
  path:"java",component: JavaComponent
},
{
  path:"html",component: HtmlComponent
},
{
  path:"fullStack",component: FullStackComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
