(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[11],{455:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(8),c=t(9),o=t(12),i=t(11),n=t(0),r=t.n(n),b=t(456),s=(t(457),function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bi-transactions"},this.props.transactions.map((function(a){return r.a.createElement(b.a,{key:a.id,transaction:a,address:e.props.address,confirmations:a.confirmationsCount})})))}}]),t}(r.a.PureComponent))},457:function(e,a,t){},488:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(56),c=t(8),o=t(9),i=t(42),n=t.n(i),r=t(16),b=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"getBlock",value:function(a){return n.a.get("".concat(e.apiUrl,"/").concat(a)).then((function(t){return t?t.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"/").concat(a,"."))}))}},{key:"getBlocks",value:function(a){var t=a.limit,l=a.offset,c=a.sortBy,o=a.sortDirection,i=a.startDate,r=a.endDate;return n.a.get("".concat(e.apiUrl),{params:{endDate:r,limit:t,offset:l,sortBy:c||"height",sortDirection:o||"desc",startDate:i}}).then((function(a){return a?a.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"."))}))}},{key:"apiUrl",get:function(){return"".concat(r.a.apiUrl,"/blocks")}}]),e}(),s={getBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.limit,t=e.offset,c=e.sortBy,o=e.sortDirection,i=e.startDate,n=e.endDate;return function(e){return e({type:l.b}),b.getBlocks({limit:a,offset:t,sortBy:c,sortDirection:o,startDate:i,endDate:n}).then((function(c){e({payload:{data:c,limit:a,offset:t},type:l.c})}))}},getBlock:function(e){var a=e.id;return function(e){return e({type:l.a}),b.getBlock(a).then((function(a){e({payload:{data:a},type:l.d})}))}}}},595:function(e,a,t){},596:function(e,a,t){},597:function(e,a,t){},598:function(e,a,t){},599:function(e,a,t){},872:function(e,a,t){"use strict";t.r(a);var l=t(1),c=t(8),o=t(9),i=t(17),n=t(12),r=t(11),b=t(0),s=t.n(b),m=t(107),_=t.n(m),d=t(29),k=t(30),p=t(6),h=t(170),f=t(20),u=t(31),v=t(488),E=(t(595),function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bi-block-adproofs g-flex-column"},s.a.createElement("div",{className:"bi-block-adproofs__header g-flex-column__item-fixed u-word-wrap"},this.props.block.header.id),s.a.createElement("div",{className:"bi-block-adproofs__body g-flex-column__item u-word-wrap u-word-wrap--full"},this.props.block.adProofs))}}]),t}(s.a.PureComponent)),N=(t(596),function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bi-block-ext"},s.a.createElement("div",{className:"bi-block-ext__table bi-table"},s.a.createElement("div",{className:"bi-block-ext__row bi-table__row"},s.a.createElement("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.headerId"})),s.a.createElement("div",{className:"bi-block-ext__cell bi-table__cell"},this.props.extension.headerId)),s.a.createElement("div",{className:"bi-block-ext__row bi-table__row"},s.a.createElement("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.digest"})),s.a.createElement("div",{className:"bi-block-ext__cell bi-table__cell"},this.props.extension.digest)),s.a.createElement("div",{className:"bi-block-ext__row bi-table__row"},s.a.createElement("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.fields"})),s.a.createElement("div",{className:"bi-block-ext__cell bi-table__cell"},this.props.extension.fields.map((function(e){return s.a.createElement("div",{key:e[0]},s.a.createElement("b",null,e[0]),": ",e[1])}))))))}}]),t}(s.a.Component)),x=t(36),w=t(14),g=(t(597),function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bi-block-header g-flex-column"},s.a.createElement("div",{className:"bi-block-header__line g-flex-column__item-fixed"},s.a.createElement(x.Link,{className:"bi-block-header__btn-back",to:"/".concat(this.props.prevLink)},s.a.createElement(w.d,{className:"bi-block-header__btn-back-icon"}),s.a.createElement("span",{className:"bi-block-header__btn-back-title"},s.a.createElement(d.a,{id:"components.block-header.back"})))),s.a.createElement("div",{className:"bi-block-header__line g-flex-column__item g-flex"},s.a.createElement("div",{className:"bi-block-header__title g-flex__item-fixed"},s.a.createElement(d.a,{id:"common.block.block"})," ",s.a.createElement("span",null,"#",this.props.block.header.height)),s.a.createElement("div",{className:"bi-block-header__navigation g-flex__item-fixed"},this.props.references.previousId&&0!==this.props.block.header.height?s.a.createElement(x.Link,{className:"bi-block-header__navigation-btn bi-block-header__navigation-btn--prev",to:"/blocks/".concat(this.props.references.previousId)},s.a.createElement(w.d,{className:"bi-block-header__navigation-btn-icon"})):null,this.props.references.nextId?s.a.createElement(x.Link,{className:"bi-block-header__navigation-btn bi-block-header__navigation-btn--next",to:"/blocks/".concat(this.props.references.nextId)},s.a.createElement(w.d,{className:"bi-block-header__navigation-btn-icon"})):null),s.a.createElement("div",{className:"bi-block-header__tabs g-flex__item-fixed g-flex"},s.a.createElement(x.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id)},s.a.createElement(d.a,{id:"components.block-header.information"})),s.a.createElement(x.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/transactions")},s.a.createElement(d.a,{id:"components.block-header.transactions"})),s.a.createElement(x.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/extension")},s.a.createElement(d.a,{id:"components.block-header.extension"})),s.a.createElement(x.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/adproofs")},s.a.createElement(d.a,{id:"components.block-header.adproofs"})))))}}]),t}(s.a.Component)),j=t(73),y=t(415),O=(t(598),function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"bi-block-info"},s.a.createElement("div",{className:"bi-block-info__table bi-table"},s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.height"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell"},this.props.block.header.height)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.age"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell"},s.a.createElement(y.a,{timestamp:this.props.block.header.timestamp}))),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.id"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.id)),0!==this.props.block.header.height&&s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.parent"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},s.a.createElement(x.Link,{to:"/blocks/".concat(this.props.block.header.parentId)},this.props.block.header.parentId))),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.difficulty"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.difficulty)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.extensionHash"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.extensionHash)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.version"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell"},this.props.block.header.version)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.votes"})),s.a.createElement("div",{className:"bi-block-info__cell u-word-wrap"},"[",this.props.block.header.votes.join(", "),"]")),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.adProofsRoot"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.adProofsRoot)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.transactionsRoot"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.transactionsRoot)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.stateRoot"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap"},this.props.block.header.stateRoot)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.nBits"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell"},this.props.block.header.nBits)),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.powSolutions"})),s.a.createElement("div",{className:"bi-block-info__cell u-word-wrap"},Object.keys(this.props.block.header.powSolutions).map((function(a){return s.a.createElement("div",{key:a},a,": ",e.props.block.header.powSolutions[a])})))),s.a.createElement("div",{className:"bi-block-info__row bi-table__row"},s.a.createElement("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell"},s.a.createElement(d.a,{id:"common.block.size"})),s.a.createElement("div",{className:"bi-block-info__cell bi-table__cell"},Object(j.a)(this.props.block.header.size,{desiredFormat:"k"}),"B"))))}}]),t}(s.a.Component)),B=t(455),C=(t(599),function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).prevLink="",l.renderComponent=l.renderComponent.bind(Object(i.a)(l)),l}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.preloaded?this.props.clearPreloadedState():this.props.getBlock({id:this.props.match.params.id})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.getBlock({id:e.match.params.id})}},{key:"render",value:function(){return s.a.createElement("div",{className:"bi-block g-flex-column__item-fixed"},this.props.fetching?null:this.renderBlockPage())}},{key:"renderBlockPage",value:function(){return this.props.block?(this.props.lastLocation&&"/"===this.props.lastLocation.pathname&&(this.prevLink=this.props.lastLocation.search),s.a.createElement("div",{className:"bi-block__wrapper g-flex-column"},s.a.createElement(d.a,{id:"common.pages.block.title",values:{id:this.props.block.header.id}},(function(e){return s.a.createElement(_.a,null,s.a.createElement("title",null,e))})),s.a.createElement("div",{className:"bi-block__header g-flex-column__item-fixed"},s.a.createElement(g,{block:this.props.block,prevLink:this.prevLink,references:this.props.references})),s.a.createElement("div",{className:"bi-block__body g-flex-column__item g-scroll-y"},s.a.createElement(p.g,null,s.a.createElement(p.d,{path:"/blocks/:id",exact:!0,render:this.renderComponent(s.a.createElement(O,{block:this.props.block}))}),s.a.createElement(p.d,{path:"/blocks/:id/transactions",exact:!0,component:this.renderComponent(s.a.createElement(B.a,{transactions:this.props.block.blockTransactions}))}),s.a.createElement(p.d,{path:"/blocks/:id/extension",exact:!0,component:this.renderComponent(s.a.createElement(N,{extension:this.props.block.extension}))}),s.a.createElement(p.d,{path:"/blocks/:id/adproofs",exact:!0,component:this.renderComponent(s.a.createElement(E,{block:this.props.block}))}))))):s.a.createElement(p.c,{to:"/"})}},{key:"renderComponent",value:function(e){return function(){return e}}}]),t}(s.a.Component));a.default=Object(k.b)((function(e){return Object(l.a)({},e.block)}),(function(e){return Object(f.bindActionCreators)(Object(l.a)(Object(l.a)({},v.a),u.a),e)}))(Object(h.withLastLocation)(C))}}]);
//# sourceMappingURL=11.323e89ec.chunk.js.map