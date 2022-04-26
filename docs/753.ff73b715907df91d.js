"use strict";(self.webpackChunkarticles=self.webpackChunkarticles||[]).push([[753],{9753:(M,o,n)=>{n.r(o),n.d(o,{ArticleDetailModule:()=>D});var a=n(9808),m=n(5601),c=n(293),d=n(3726),t=n(5e3),g=n(9633),p=n(7511),u=n(8348),A=n(2313);let h=(()=>{class e{constructor(i){this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(A.H7,16))},e.\u0275pipe=t.Yjl({name:"safeHtml",type:e,pure:!0}),e})();function f(e,l){if(1&e){const i=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).deleteArticle()}),t._uU(1,"Delete Article"),t.qZA()}}function v(e,l){1&e&&(t.TgZ(0,"div",15),t._UZ(1,"span",16),t.qZA())}function Z(e,l){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.TgZ(3,"div",5),t._UZ(4,"img",6),t.qZA(),t.TgZ(5,"div",7),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.ALo(10,"amDateFormat"),t.ALo(11,"amLocale"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"h1"),t._uU(14),t.qZA(),t.YNc(15,f,2,0,"button",9),t.qZA(),t.qZA(),t._UZ(16,"hr",10),t.TgZ(17,"div",11),t.TgZ(18,"div",10),t._UZ(19,"div",12),t.ALo(20,"safeHtml"),t.qZA(),t.qZA(),t.YNc(21,v,2,0,"div",13),t.qZA()),2&e){const i=t.oxw();t.xp6(4),t.Q6J("src",i.selectedArticle.userImage,t.LSH),t.xp6(3),t.hij(" ",i.selectedArticle.excerpt,""),t.xp6(2),t.Oqu(t.xi3(10,7,t.xi3(11,10,i.selectedArticle.dtPublished,i.getUserLocale()),"MMM d, y")),t.xp6(5),t.Oqu(i.selectedArticle.title),t.xp6(1),t.Q6J("ngIf",i.haveDeleteAccess),t.xp6(4),t.Q6J("innerHTML",t.lcZ(20,13,i.selectedArticle.content),t.oJD),t.xp6(2),t.Q6J("ngIf",i.loading)}}const x=[{path:"",component:(()=>{class e{constructor(i,r,s,y){this.store=i,this.route=r,this.router=s,this.authService=y,this.articles=[],this.haveDeleteAccess=!1,this.loading=!1,this.store.select(d.Zz).subscribe(C=>{this.articles=C.articles})}ngOnInit(){const i=this.route.snapshot.params.id;this.selectedArticle=this.articles.find(s=>s.id===Number(i));const r=this.authService.getUser();this.haveDeleteAccess=r&&1===r.role}deleteArticle(){this.loading=!0,this.store.dispatch((0,d.RJ)(this.selectedArticle)),setTimeout(()=>{this.loading=!1,this.router.navigate(["/home"])},1500)}getUserLocale(){return navigator.languages[0]}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(g.yh),t.Y36(c.gz),t.Y36(c.F0),t.Y36(p.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-article-detail"]],decls:2,vars:1,consts:[[1,"article-detail-page"],["class","content",4,"ngIf"],[1,"content"],[1,"header","d-flex","justify-content-between"],[1,"d-flex"],[1,"user-img"],["alt","",3,"src"],[1,"user-info"],[1,"article-title"],["class","btn btn-sm btn-primary-c",3,"click",4,"ngIf"],[1,"text-dark"],[1,"article-detail","mt-5"],[3,"innerHTML"],["class","spinner-grow text-primary","role","status",4,"ngIf"],[1,"btn","btn-sm","btn-primary-c",3,"click"],["role","status",1,"spinner-grow","text-primary"],[1,"sr-only"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.YNc(1,Z,22,15,"div",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",r.selectedArticle))},directives:[a.O5],pipes:[u.Ek,u.Ue,h],styles:[".content[_ngcontent-%COMP%]{margin-top:100px}.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;object-fit:cover}.user-info[_ngcontent-%COMP%]{margin-left:10px}.article-title[_ngcontent-%COMP%]{text-align:right}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(x)],c.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,T,m.m]]}),e})()}}]);