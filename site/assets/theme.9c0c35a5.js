import{d as t,h as o,w as c,r as l,o as p,a as s,e}from"./index.8df9d64b.js";const i=s("div",{class:"markdown-body"},[s("h1",{id:"themes",tabindex:"-1"},"Themes"),s("br"),s("div",{class:"bg-error-200/10 rounded-$rounded-btn p-5 text-error-200"}," Themes are not defined yet, existing themes are for testing purposes only, they will be changed in the next versions. "),s("br"),s("h2",{id:"list-of-themes",tabindex:"-1"},"List of Themes"),s("p",null,"Blue, teal, rose, violet and orange."),s("br"),s("p",null,[s("br"),e(),s("br")]),s("h2",{id:"import-themes",tabindex:"-1"},"Import themes"),s("p",null,[e("To import themes you need to add the code bellow in "),s("code",null,"windi.config.js"),e(" file.")]),s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[s("span",{class:"token keyword"},"import"),e(" sectionTheme "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'./src/plugin'"),s("span",{class:"token punctuation"},";")]),e(`
`),s("code",{class:"code-line even line-2"}),e(`
`),s("code",{class:"code-line odd line-3"},[s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token punctuation"},"{")]),e(`
`),s("code",{class:"code-line even line-4"},[e("  plugins"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e("sectionTheme"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-5"}),e(`
`),s("code",{class:"code-line even line-6"},[e("  sectionThemes"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{")]),e(`
`),s("code",{class:"code-line odd line-7"},[e("    themes"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'blue'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"'teal'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"'rose'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"'violet'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"'orange'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-8"},[e("  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd last-row line-9"},[s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";")])])])]),s("p",null,"When there are no themes imported, Section UI will use the default theme (blue)."),s("br"),s("h2",{id:"customize-an-existing-theme",tabindex:"-1"},"Customize an existing theme"),s("p",null,"To customize an existing theme, you can pass an object to section.themes and replace existing variables."),s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[s("span",{class:"token keyword"},"import"),e("  sectionTheme  "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'./src/plugin'"),s("span",{class:"token punctuation"},";")]),e(`
`),s("code",{class:"code-line even line-2"}),e(`
`),s("code",{class:"code-line odd line-3"},[s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token punctuation"},"{")]),e(`
`),s("code",{class:"code-line even line-4"},[e("  plugins"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e("sectionTheme"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-5"}),e(`
`),s("code",{class:"code-line even line-6"},[e("  sectionThemes"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{")]),e(`
`),s("code",{class:"code-line odd line-7"},[e("     "),s("span",{class:"token punctuation"},"{")]),e(`
`),s("code",{class:"code-line even line-8"},[e("        "),s("span",{class:"token string-property property"},"'primary-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#2563eb'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-9"},[e("        "),s("span",{class:"token string-property property"},"'primary-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1d4ed8'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-10"},[e("        "),s("span",{class:"token string-property property"},"'primary-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1e40af'")]),e(`
`),s("code",{class:"code-line odd line-11"},[e("      "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-12"},[e("    themes"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e(),s("span",{class:"token string"},"'teal'"),s("span",{class:"token punctuation"},"]")]),e(`
`),s("code",{class:"code-line odd line-13"},[e("  "),s("span",{class:"token punctuation"},"}")]),e(`
`),s("code",{class:"code-line even last-row line-14"},[s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";")])])])]),s("h2",{id:"section-ui-css-variables",tabindex:"-1"},"Section UI CSS variables"),s("div",{class:"code-wrapper"},[s("div",{class:"heading-row no-heading show-lang"},[s("span",{class:"lang-display"},"ts")]),s("div",{class:"code-block language-typescript no-line-numbers","data-lang":"ts","data-modifiers":""},[s("pre",{class:"language-typescript","data-lang":"ts"},[e(""),s("code",{class:"code-line odd first-row line-1"},[e("    "),s("span",{class:"token string-property property"},"'primary-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#2563eb'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-2"},[e("    "),s("span",{class:"token string-property property"},"'primary-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1d4ed8'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-3"},[e("    "),s("span",{class:"token string-property property"},"'primary-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1e40af'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-4"}),e(`
`),s("code",{class:"code-line odd line-5"},[e("    "),s("span",{class:"token string-property property"},"'secondary-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#4b5563'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-6"},[e("    "),s("span",{class:"token string-property property"},"'secondary-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#374151'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-7"},[e("    "),s("span",{class:"token string-property property"},"'secondary-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1f2937'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-8"}),e(`
`),s("code",{class:"code-line odd line-9"},[e("    "),s("span",{class:"token string-property property"},"'success-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#16a34a'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-10"},[e("    "),s("span",{class:"token string-property property"},"'success-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#15803d'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-11"},[e("    "),s("span",{class:"token string-property property"},"'success-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#166534'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-12"}),e(`
`),s("code",{class:"code-line odd line-13"},[e("    "),s("span",{class:"token string-property property"},"'error-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#dc2626'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-14"},[e("    "),s("span",{class:"token string-property property"},"'error-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#b91c1c'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-15"},[e("    "),s("span",{class:"token string-property property"},"'error-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#991b1b'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-16"}),e(`
`),s("code",{class:"code-line odd line-17"},[e("    "),s("span",{class:"token string-property property"},"'warning-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#ca8a04'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-18"},[e("    "),s("span",{class:"token string-property property"},"'warning-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#a16207'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-19"},[e("    "),s("span",{class:"token string-property property"},"'warning-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#854d0e'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-20"}),e(`
`),s("code",{class:"code-line odd line-21"},[e("    "),s("span",{class:"token string-property property"},"'base-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#fcfcfc'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-22"},[e("    "),s("span",{class:"token string-property property"},"'base-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#fafafa'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-23"},[e("    "),s("span",{class:"token string-property property"},"'base-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#f8f9fa'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-24"}),e(`
`),s("code",{class:"code-line odd line-25"},[e("    "),s("span",{class:"token string-property property"},"'dark-base-100'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#181818'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-26"},[e("    "),s("span",{class:"token string-property property"},"'dark-base-200'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#151414'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-27"},[e("    "),s("span",{class:"token string-property property"},"'dark-base-300'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#0f0f0f'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-28"}),e(`
`),s("code",{class:"code-line odd line-29"},[e("    "),s("span",{class:"token string-property property"},"'base-text'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#1f2937'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even line-30"},[e("    "),s("span",{class:"token string-property property"},"'dark-base-text'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'#f3f4f6'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-31"}),e(`
`),s("code",{class:"code-line even line-32"},[e("    "),s("span",{class:"token string-property property"},"'rounded-box'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'1rem'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line odd line-33"},[e("    "),s("span",{class:"token string-property property"},"'rounded-btn'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'0.5rem'"),s("span",{class:"token punctuation"},",")]),e(`
`),s("code",{class:"code-line even last-row line-34"},[e("    "),s("span",{class:"token string-property property"},"'rounded-badge'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'1.9rem'"),s("span",{class:"token punctuation"},",")])])])])],-1),r={toc:[{level:2,title:"List of Themes",slug:"list-of-themes",link:"#list-of-themes",children:[]},{level:2,title:"Import themes",slug:"import-themes",link:"#import-themes",children:[]},{level:2,title:"Customize an existing theme",slug:"customize-an-existing-theme",link:"#customize-an-existing-theme",children:[]},{level:2,title:"Section UI  CSS variables",slug:"section-ui-css-variables",link:"#section-ui-css-variables",children:[]}]},m="",y=t({__name:"theme",setup(d,{expose:n}){return n({frontmatter:{toc:[{level:2,title:"List of Themes",slug:"list-of-themes",link:"#list-of-themes",children:[]},{level:2,title:"Import themes",slug:"import-themes",link:"#import-themes",children:[]},{level:2,title:"Customize an existing theme",slug:"customize-an-existing-theme",link:"#customize-an-existing-theme",children:[]},{level:2,title:"Section UI  CSS variables",slug:"section-ui-css-variables",link:"#section-ui-css-variables",children:[]}]},excerpt:void 0}),(k,u)=>{const a=l("markdown");return p(),o(a,{frontmatter:r},{default:c(()=>[i]),_:1})}}});export{y as default,m as excerpt,r as frontmatter};
