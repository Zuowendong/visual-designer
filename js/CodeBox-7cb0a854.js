import{k as V,h as _,r as B,w as C,a5 as k,u as t,q as v,v as x,B as d,A as n,b as m,a6 as y,J as E}from"./element-6bb4d13f.js";import{_ as g}from"./CodeEditor.vue_vue_type_script_setup_true_lang-8f6be08b.js";import"./lodashEs-e335b3ae.js";const S=V({__name:"CodeBox",props:{modelValue:{type:Boolean,default:!1},code:{type:String,default:""}},emits:["update:modelValue"],setup(r,{emit:p}){const u=r;let{modelValue:a,code:f}=_(u);const i=()=>{p("update:modelValue",!1),e.value=""};let e=B("");return C(()=>u.modelValue,s=>{s&&(e.value=f.value)}),(s,o)=>{const c=k;return t(a)?(v(),x(y,{key:0},{default:d(()=>[n(c,{modelValue:t(a),"onUpdate:modelValue":o[1]||(o[1]=l=>m(a)?a.value=l:a=l),title:"\u67E5\u770B\u4EE3\u7801","close-on-click-modal":!1,onClose:i},{default:d(()=>[n(g,{modelValue:t(e),"onUpdate:modelValue":o[0]||(o[0]=l=>m(e)?e.value=l:e=l),readonly:!0},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})):E("",!0)}}});export{S as default};
