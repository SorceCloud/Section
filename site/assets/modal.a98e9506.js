import{d as b,h,w as t,r as o,o as v,a as s,b as a,e}from"./index.8df9d64b.js";const _={class:"markdown-body"},f=s("h1",{id:"modal-component",tabindex:"-1"},"Modal component",-1),w=s("h2",{id:"basic-usage",tabindex:"-1"},"Basic usage",-1),y=s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[s("span",{class:"token keyword"},"import"),e(" Modal "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'sectionui'")])])])],-1),B=s("h2",{id:"sizes",tabindex:"-1"},"Sizes",-1),x=s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[s("span",{class:"token operator"},"<"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-2"},[e("  "),s("span",{class:"token operator"},"<"),e("div "),s("span",{class:"token keyword"},"class"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"flex flex-wrap items-center gap-3"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-3"},[e("    "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.small = true"'),s("span",{class:"token operator"},">"),e("Modal sm"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-4"},[e("    "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.medium = true"'),s("span",{class:"token operator"},">"),e("Modal md"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-5"},[e("    "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.large = true"'),s("span",{class:"token operator"},">"),e("Modal lg"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-6"},[e("    "),s("span",{class:"token operator"},"<"),e("Modal v"),s("span",{class:"token operator"},"-"),e("model"),s("span",{class:"token operator"},":"),e("active"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.small"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-7"},[e("      "),s("span",{class:"token operator"},"<"),e("template #header"),s("span",{class:"token operator"},">"),e(" The important modal header "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-8"},[e("      "),s("span",{class:"token operator"},"<"),e("template #body"),s("span",{class:"token operator"},">"),e(" The modal body "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-9"},[e("      "),s("span",{class:"token operator"},"<"),e("template #footer"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"footerProps"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-10"},[e("        "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.small = false"'),s("span",{class:"token operator"},">"),e("Dismiss"),s("span",{class:"token operator"},"!"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-11"},[e("      "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-12"},[e("    "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("Modal"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-13"},[e("    "),s("span",{class:"token operator"},"<"),e("Modal v"),s("span",{class:"token operator"},"-"),e("model"),s("span",{class:"token operator"},":"),e("active"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.medium"'),e(" size"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"md"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-14"},[e("      "),s("span",{class:"token operator"},"<"),e("template #header"),s("span",{class:"token operator"},">"),e(" The important modal header "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-15"},[e("      "),s("span",{class:"token operator"},"<"),e("template #body"),s("span",{class:"token operator"},">"),e(" The modal body "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-16"},[e("      "),s("span",{class:"token operator"},"<"),e("template #footer"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"footerProps"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-17"},[e("        "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.medium = false"'),s("span",{class:"token operator"},">"),e("Dismiss"),s("span",{class:"token operator"},"!"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-18"},[e("      "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-19"},[e("    "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("Modal"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-20"},[e("    "),s("span",{class:"token operator"},"<"),e("Modal v"),s("span",{class:"token operator"},"-"),e("model"),s("span",{class:"token operator"},":"),e("active"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.large"'),e(" size"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"lg"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-21"},[e("      "),s("span",{class:"token operator"},"<"),e("template #header"),s("span",{class:"token operator"},">"),e(" The important modal header "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-22"},[e("      "),s("span",{class:"token operator"},"<"),e("template #body"),s("span",{class:"token operator"},">"),e(" The modal body"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-23"},[e("      "),s("span",{class:"token operator"},"<"),e("template #footer"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"footerProps"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-24"},[e("        "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.large = false"'),s("span",{class:"token operator"},">"),e("Dismiss"),s("span",{class:"token operator"},"!"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-25"},[e("      "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-26"},[e("    "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("Modal"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-27"},[e("  "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("div"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even last-row line-28"},[s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")])])])],-1),M=s("h2",{id:"close-button",tabindex:"-1"},"Close Button",-1),z={class:"flex flex-wrap items-center gap-3"},C=s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[s("span",{class:"token operator"},"<"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-2"},[e("  "),s("span",{class:"token operator"},"<"),e("div "),s("span",{class:"token keyword"},"class"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"flex flex-wrap items-center gap-3"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-3"},[e("    "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.closeBtn = true"'),s("span",{class:"token operator"},">"),e("Close btn"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-4"},[e("    "),s("span",{class:"token operator"},"<"),e("Modal v"),s("span",{class:"token operator"},"-"),e("model"),s("span",{class:"token operator"},":"),e("active"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.closeBtn"'),e(" close"),s("span",{class:"token operator"},"-"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-5"},[e("      "),s("span",{class:"token operator"},"<"),e("template #header"),s("span",{class:"token operator"},">"),e(" The important modal header "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-6"},[e("      "),s("span",{class:"token operator"},"<"),e("template #body"),s("span",{class:"token operator"},">"),e(" The modal body "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-7"},[e("      "),s("span",{class:"token operator"},"<"),e("template #footer"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"footerProps"'),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-8"},[e("        "),s("span",{class:"token operator"},"<"),e("btn "),s("span",{class:"token decorator"},[s("span",{class:"token at operator"},"@"),s("span",{class:"token function"},"click")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"modal.closeBtn = false"'),s("span",{class:"token operator"},">"),e("Dismiss"),s("span",{class:"token operator"},"!"),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("btn"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-9"},[e("      "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even line-10"},[e("    "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("Modal"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line odd line-11"},[e("  "),s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("div"),s("span",{class:"token operator"},">")]),e(`
`),s("code",{class:"code-line even last-row line-12"},[s("span",{class:"token operator"},"<"),s("span",{class:"token operator"},"/"),e("template"),s("span",{class:"token operator"},">")])])])],-1),N=s("h2",{id:"no-outside",tabindex:"-1"},"No outside",-1),T=s("h2",{id:"no-backdrop",tabindex:"-1"},"No Backdrop",-1),S=s("h2",{id:"headless",tabindex:"-1"},"Headless",-1),D=s("h2",{id:"backdrop-blur",tabindex:"-1"},"Backdrop Blur",-1),P={class:"hover:underline text-primary-200"},H=s("a",{href:"https://windicss.org/utilities/filters/backdrop-filter.html"},"WindiCSS",-1),V=s("code",null,null,-1),I={toc:[{level:2,title:"Basic usage",slug:"basic-usage",link:"#basic-usage",children:[]},{level:2,title:"Sizes",slug:"sizes",link:"#sizes",children:[]},{level:2,title:"Close Button",slug:"close-button",link:"#close-button",children:[]},{level:2,title:"No outside",slug:"no-outside",link:"#no-outside",children:[]},{level:2,title:"No Backdrop",slug:"no-backdrop",link:"#no-backdrop",children:[]},{level:2,title:"Headless",slug:"headless",link:"#headless",children:[]},{level:2,title:"Backdrop Blur",slug:"backdrop-blur",link:"#backdrop-blur",children:[]}]},q="",A=b({__name:"modal",setup(W,{expose:l}){return l({frontmatter:{toc:[{level:2,title:"Basic usage",slug:"basic-usage",link:"#basic-usage",children:[]},{level:2,title:"Sizes",slug:"sizes",link:"#sizes",children:[]},{level:2,title:"Close Button",slug:"close-button",link:"#close-button",children:[]},{level:2,title:"No outside",slug:"no-outside",link:"#no-outside",children:[]},{level:2,title:"No Backdrop",slug:"no-backdrop",link:"#no-backdrop",children:[]},{level:2,title:"Headless",slug:"headless",link:"#headless",children:[]},{level:2,title:"Backdrop Blur",slug:"backdrop-blur",link:"#backdrop-blur",children:[]}]},excerpt:void 0}),(r,n)=>{const c=o("demosizes"),p=o("btn"),d=o("democlosebutton"),i=o("demonooutside"),k=o("demonobackdrop"),m=o("demoheadless"),u=o("demobackdropblur"),g=o("markdown");return v(),h(g,{frontmatter:I},{default:t(()=>[s("div",_,[f,w,y,B,a(c),x,M,s("div",z,[a(p,{onClick:n[0]||(n[0]=$=>r.modal.closeBtn=!0)},{default:t(()=>[e("Close btn")]),_:1})]),a(d),C,N,a(i),T,a(k),S,a(m),D,s("p",null,[e("It is possible to use windiCSS backdrop classes "),s("code",null,[s("span",P,[H,s("span",null,[V,a(u)])])])])])]),_:1})}}});export{A as default,q as excerpt,I as frontmatter};
