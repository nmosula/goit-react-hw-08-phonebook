"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[316],{5316:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return D},default:function(){return K}});var r,i,a,o=t(9434),s=t(2791),c=t(3661),l=t(208),u=t(8402),d=t(168),x=t(6444),h=x.ZP.div(r||(r=(0,d.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n"]))),p=t(184),f=function(){return(0,p.jsx)(h,{children:(0,p.jsx)(u.s5,{strokeColor:"#ebebeb"})})},m=t(6895),j=x.ZP.label(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n"]))),v=x.ZP.input(a||(a=(0,d.Z)(["\n  width: 300px;\n"])));var Z,b,g=function(){var n=(0,o.I0)(),e=(0,o.v9)(m.Gd);return(0,p.jsxs)(j,{children:["Find contacts by name",(0,p.jsx)(v,{name:"filter",type:"text",value:e,onChange:function(e){return n((0,m.Tv)(e.currentTarget.value))}})]})},w=x.ZP.li(Z||(Z=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 300px;\n  height: 30px;\n  padding: 5px;\n  font-size: 16px;\n"]))),y=x.ZP.button(b||(b=(0,d.Z)(["\n  width: 70px;\n  cursor: pointer;\n"]))),C=t(1686),_=t.n(C);var k=function(n){var e=n.item,t=(0,o.I0)();return(0,p.jsxs)(w,{children:[e.name,": ",e.phone,(0,p.jsx)(y,{onClick:function(){t((0,l.GK)(e.id)),_().Notify.info("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(e.name," \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439 \u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"))},"aria-label":"Delete",children:"Delete"})]},e.id)};var P,F,z,I,N=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,o.v9)(c.BY),(0,o.v9)(m.Gd));return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:n.map((function(n){return(0,p.jsx)(k,{item:n},n.id)}))})})},q=t(6727),A=t(5705),B=(0,x.ZP)(A.l0)(P||(P=(0,d.Z)(["\n  width: 400px;\n  padding: 8px;\n  border: 1px solid #2a2a2a;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),L=x.ZP.label(F||(F=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=(0,x.ZP)(A.Bc)(z||(z=(0,d.Z)(["\n  color: tomato;\n"]))),G=x.ZP.button(I||(I=(0,d.Z)(["\n  width: 120px;\n  cursor: pointer;\n"]))),R=q.Ry().shape({name:q.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name"}).required("Required"),phone:q.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Invalid number. For example '123-45-67'"}).required("Required")}),Y=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.BY);return(0,p.jsx)(A.J9,{initialValues:{name:"",phone:""},validationSchema:R,onSubmit:function(t,r){if(e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return _().Notify.failure("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(t.name," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"));n((0,l.uK)(t)),_().Notify.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(t.name," \u0434\u043e\u0434\u0430\u043d\u0438\u0439 \u0434\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432")),r.resetForm()},children:(0,p.jsxs)(B,{children:[(0,p.jsxs)(L,{children:["Name",(0,p.jsx)(A.gN,{name:"name"}),(0,p.jsx)(T,{name:"name",component:"span"})]}),(0,p.jsxs)(L,{children:["Tel",(0,p.jsx)(A.gN,{name:"phone"}),(0,p.jsx)(T,{name:"phone",component:"span"})]}),(0,p.jsx)(G,{type:"submit",children:"Add Contact"})]})})},D=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.xU),t=(0,o.v9)(c.zh),r=(0,o.v9)(c.BY);return(0,s.useEffect)((function(){n((0,l.yF)())}),[n]),(0,p.jsxs)(p.Fragment,{children:[e&&!t&&(0,p.jsx)("b",{children:(0,p.jsx)(f,{})}),(0,p.jsx)(Y,{}),(0,p.jsx)("h2",{children:"Contacts"}),0!==r.length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{}),(0,p.jsx)(N,{})]}):(0,p.jsx)("h3",{children:"There are no contacts in your phonebook!"})]})},K=D}}]);
//# sourceMappingURL=316.60c992ab.chunk.js.map