import{_ as c,s as p,l as v,m as g,u as i,o as l,c as a,a as e,t as o,e as t,g as r}from"./index-B6hkcEek.js";import{u as d}from"./MovieStore-CXBLRn5i.js";const b={key:0,class:"movie-container"},h={class:"movie-header"},S=["src","alt"],y={class:"movie-details"},w=["innerHTML"],k={class:"movie-meta"},M={class:"movie-info"},C={class:"movie-info-list"},T={key:0},V=["href"],x={key:1},j=["href"],B={__name:"MovieView",setup(L){const f=g(),{movie:s}=p(d()),{getMovie:_}=d();return v(()=>_(f.params.id)),(N,n)=>{var u,m;return i(s)?(l(),a("div",b,[e("div",h,[e("img",{src:`${((u=i(s).image)==null?void 0:u.original)??"../../public/no-img.jpg"}`,alt:i(s).original_title,class:"movie-img"},null,8,S),e("div",y,[e("h2",null,o(i(s).name),1),e("p",{class:"movie-summary",innerHTML:i(s).summary},null,8,w),e("div",k,[e("span",null,[n[0]||(n[0]=e("b",null,"Status:",-1)),t(" "+o(i(s).status),1)]),e("span",null,[n[1]||(n[1]=e("b",null,"Language:",-1)),t(" "+o(i(s).language),1)]),e("span",null,[n[2]||(n[2]=e("b",null,"Genres:",-1)),t(" "+o(i(s).genres.join(" | ")),1)])])])]),e("div",M,[n[7]||(n[7]=e("h3",null,"Show Info",-1)),e("ul",C,[i(s).webChannel?(l(),a("li",T,[n[3]||(n[3]=e("b",null,"Web channel:",-1)),t(" "+o(i(s).webChannel.country.name)+", ",1),e("a",{target:"_blank",href:`${i(s).webChannel.officialSite??i(s).officialSite}`},o(i(s).webChannel.name),9,V),t(" ("+o(i(s).premiered.slice(0,7))+" — "+o(i(s).ended.slice(0,7))+") ",1)])):r("",!0),e("li",null,[n[4]||(n[4]=e("b",null,"Schedule:",-1)),t(" "+o((m=i(s).schedule)==null?void 0:m.days.join(", "))+" (~ "+o(i(s).averageRuntime)+" min)",1)]),e("li",null,[n[5]||(n[5]=e("b",null,"Show Type:",-1)),t(" "+o(i(s).type),1)]),i(s).officialSite?(l(),a("li",x,[n[6]||(n[6]=e("b",null,"Official site:",-1)),e("a",{href:`${i(s).officialSite}`,target:"_blank"},o(i(s).officialSite),9,j)])):r("",!0)])])])):r("",!0)}}},H=c(B,[["__scopeId","data-v-469693a8"]]);export{H as default};