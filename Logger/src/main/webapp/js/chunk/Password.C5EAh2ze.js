import{g as y,r as a,c as N,b as j,a as v,u as P,j as e,e as d,A as k,R as E}from"../index.DUkh4MdH.js";import L from"./logo_wh.CMQQTI3M.js";import T from"./fail.DjzYbg5u.js";function D(){const{state:{userId:m}}=y(),[r,p]=a.useState(""),[o,u]=a.useState(""),[l,n]=a.useState(""),[c,x]=a.useState(!1),[i,g]=a.useState(!1),{openAlert:f}=N(),{t}=j(),w=v(),b=P();a.useEffect(()=>(document.body.classList.remove(...document.body.classList),document.body.classList.add("password"),()=>{document.body.classList.remove(...document.body.classList)}),[]);async function h(){const{data:{result:s}}=await new b("/api/entity/user/password").create({param:{userId:m,password:d(r),newPassword:d(o)},isViewSpinner:!0,errorMsgCallback(){n(t("msg.error.contact.administrator"))},finallyCallback(){l||f({type:k.COMPLETE,message:`${t("msg.password.change.success")}`,callbackFunc:()=>{w(`${E}/login`)}})}});s==="error"&&n(t("msg.password.entered.incorrectly"))}return e.jsxs("div",{id:"password",className:"flex flex-row max-lg:flex-col w-screen h-screen",children:[e.jsx("header",{className:"lg:basis-2/5 lg:max-w-xl lg:justify-center max-lg:w-full max-lg:h-14 max-lg:p-4 bg-[#151826] flex items-center",children:e.jsx("img",{src:L,alt:"INZENT",className:"lg:h-12 max-lg:h-fit "})}),e.jsxs("div",{className:"flex-1 py-24 pl-10 pr-4 flex lg:items-center max-lg:justify-center",children:[e.jsxs("div",{className:"w-72",children:[e.jsx("div",{className:"h-10 mb-6 text-5xl font-black font-mono max-lg:text-center",children:"DASHBOARD"}),e.jsx("div",{className:"mb-3",children:t("msg.id.password.page")}),e.jsxs("div",{className:"relative",children:[e.jsx("i",{className:"icon-lock absolute top-4 left-4"}),e.jsx("input",{type:c?"text":"password",className:"form-password mb-3 h-12 pl-11",style:{paddingLeft:"2.75rem"},placeholder:t("label.user.originPassword"),value:r,onChange:s=>p(s.target.value),onKeyDown:s=>{s.code==="Enter"&&s.preventDefault()}}),e.jsx("i",{className:"icon-eye absolute top-4 right-4 cursor-pointer",style:{fontSize:"large"},onClick:()=>x(!c)})]}),e.jsxs("div",{className:"relative",children:[e.jsx("i",{className:"icon-lock absolute top-4 left-4"}),e.jsx("input",{type:i?"text":"password",className:"form-password mb-3 h-12 pl-11",style:{paddingLeft:"2.75rem"},placeholder:t("label.user.newPassword"),value:o,onChange:s=>u(s.target.value),onKeyDown:s=>{s.code==="Enter"&&s.preventDefault()}}),e.jsx("i",{className:"icon-eye absolute top-4 right-4 cursor-pointer",style:{fontSize:"large"},onClick:()=>g(!i)})]}),e.jsx("span",{className:"text-xs font-bold",children:t("label.user.validationPassCheck")}),l&&e.jsxs("div",{className:"bg-[#ffe5e8] text-[#ed3137] pl-8 pr-2 py-2 rounded text-xs my-3 font-light relative",children:[e.jsx("img",{className:"absolute left-2",src:T})," ",l]}),e.jsx("button",{type:"submit",className:"mt-5 bg-[#ed3137] border-[#ed3137] text-white py-4 px-3 rounded w-full font-bold",onClick:h,children:t("label.update")})]}),e.jsx("p",{className:"absolute bottom-8 text-xs font-black",children:"© 2024 INZENT. All rights reserved"})]})]})}export{D as default};
