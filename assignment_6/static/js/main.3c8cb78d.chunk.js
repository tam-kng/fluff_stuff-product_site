(this.webpackJsonpassignment_6=this.webpackJsonpassignment_6||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/img_couch_pillow.6e1bb49a.jpg"},function(e,t,a){e.exports=a.p+"static/media/img_bed_pillow.8533feae.jpg"},function(e,t,a){e.exports=a.p+"static/media/img_floor_pouf.3f91dfad.jpg"},function(e,t,a){e.exports=a.p+"static/media/img_round_pillow.c2d36537.jpg"},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(1),o=a.n(l),n=a(7),r=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(2),i=a(3),s=a(6),m=a(5),u=a(4),d=(a(20),a(21),a(8)),p=a(0),h=(a(22),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement("div",{className:"nav"},o.a.createElement("button",{onClick:function(t){return e.props.changePage("home")}},"Logo"),o.a.createElement("div",{className:"nav-center"},o.a.createElement("button",{href:"pillows.html"},"Sheets"),o.a.createElement("button",{href:"pillows.html"},"Cushions"),o.a.createElement("button",{onClick:function(t){return e.props.changePage("products")}},"Pillows"),o.a.createElement("button",{href:"pillows.html"},"Sale")),o.a.createElement("div",{className:"nav-right"},o.a.createElement("button",{href:"about-us.html"},"About"),o.a.createElement("button",{href:"contact-us.html"},"Contact"),o.a.createElement("button",{href:"account.html"},"Account"),o.a.createElement("button",{onClick:function(t){return e.props.changePage("cart")}},o.a.createElement(p.b.Provider,{value:{style:{color:"#6E879A",fontSize:"25px"}}},o.a.createElement(d.a,null))),o.a.createElement("button",{disabled:!0},this.props.cartItemNum))))}}]),a}(o.a.Component));a(23);var E=function(){return o.a.createElement("main",null,o.a.createElement("div",{className:"banner"},o.a.createElement("h1",null,"Fluff Stuff")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5 promo-left promo-top"},"SALE: 60% off Cushions"),o.a.createElement("div",{className:"col-5 promo-right promo-top"},"The coziest you can get.")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5 promo-left promo-bottom"},"Home and comfort."),o.a.createElement("div",{className:"col-5 promo-right promo-bottom"},"SALE: 20% off Sheets")))},v=a(14),f=(a(24),function(e){Object(m.a)(l,e);var t=Object(u.a)(l);function l(e){var a;return Object(c.a)(this,l),(a=t.call(this,e)).url=a.props.url,a.name=a.props.itemName,a.color=a.props.itemColor,a.fill=a.props.itemFill,a.price=a.props.itemPrice,a}return Object(i.a)(l,[{key:"getImage",value:function(e){switch(e){case"Couch Pillow":return o.a.createElement("img",{src:a(10),alt:"couch pillow"});case"Bed Pillow":return o.a.createElement("img",{src:a(11),alt:"bed pillow"});case"Floor Pouf":return o.a.createElement("img",{src:a(12),alt:"floor pouf"});case"Round Pillow":return o.a.createElement("img",{src:a(13),alt:"round pillow"});default:console.log("No image was found")}}},{key:"getReference",value:function(e){switch(e){case"Couch Pillow":return"#couch-pillow-modal";case"Bed Pillow":return"#bed-pillow-modal";case"Floor Pouf":return"#floor-pouf-modal";case"Round Pillow":return"#round-pillow-modal"}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 product-container"},this.getImage(this.name),o.a.createElement("div",{className:"product-text"},o.a.createElement("a",{id:"product-"+this.props.itemNum+"-modal-link",href:this.getReference(this.name)},this.name),o.a.createElement("div",null,"\u2605\u2605\u2605\u2605\u2606")),o.a.createElement("div",{className:"product-text"},o.a.createElement("div",null,"$"+this.price+".00")),o.a.createElement("button",{className:"add-to-wishlist",onClick:function(t){return e.props.addToWishlist(e.name)}},"Add to Wishlist"),o.a.createElement("button",{className:"add-to-cart",onClick:function(t){return e.props.addToCart(e.name,e.color,e.fill,e.price)}},"Add to Cart"))}}]),l}(o.a.Component)),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={color:"Select Below",fill:"Select Below",value:"coconut",wishlist:[]},l.handleChange=l.handleChange.bind(Object(s.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(s.a)(l)),l.addToWishlist=l.addToWishlist.bind(Object(s.a)(l)),l}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"addToWishlist",value:function(e){var t=this.state.wishlist;t.includes(e)?window.alert("You've already added this item to the wishlist."):(t.push(e),this.setState({wishlist:t}))}},{key:"renderWishlist",value:function(){for(var e=[],t=0;t<this.state.wishlist.length;t++)e.push(o.a.createElement("div",null,this.state.wishlist[t]));return e}},{key:"render",value:function(){var e=this;return o.a.createElement("main",null,o.a.createElement("ul",{className:"breadcrumbs"},o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Products")),o.a.createElement("li",null,"Pillows")),o.a.createElement("div",{className:"categories"},o.a.createElement("div",{id:"color-dropdown"},"Color"),o.a.createElement("div",{id:"fill-dropdown"},"Fill"),o.a.createElement("div",{id:"sort-by-dropdown"},"Sort By")),o.a.createElement("div",{className:"row"},o.a.createElement(f,{addToCart:this.props.addToCart,addToWishlist:this.addToWishlist,itemNum:"1",url:"./images/img_couch_pillow",itemName:"Couch Pillow",itemColor:"After School Special",itemFill:"Duck Down",itemPrice:25}),o.a.createElement(f,{addToCart:this.props.addToCart,addToWishlist:this.addToWishlist,itemNum:"2",url:"./images/img_bed_pillow",itemName:"Bed Pillow",itemColor:"After School Special",itemFill:"Duck Down",itemPrice:35}),o.a.createElement(f,{addToCart:this.props.addToCart,addToWishlist:this.addToWishlist,itemNum:"3",url:"./images/img_floor_pouf",itemName:"Floor Pouf",itemColor:"After School Special",itemFill:"Duck Down",itemPrice:30}),o.a.createElement(f,{addToCart:this.props.addToCart,addToWishlist:this.addToWishlist,itemNum:"4",url:"./images/img_round_pillow",itemName:"Round Pillow",itemColor:"After School Special",itemFill:"Duck Down",itemPrice:20})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"wishlist"},"Wishlist: ",this.renderWishlist())),o.a.createElement("div",{className:"product-1-modal"},o.a.createElement("div",{id:"couch-pillow-modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("a",{href:"#",className:"close-popup"},"\xd7"),o.a.createElement("div",{className:"product-description"},o.a.createElement("h2",null,"Artisan Couch Pillow"),o.a.createElement("h2",null,"\u2605\u2605\u2605\u2605\u2606"),o.a.createElement("h2",null,"$25.00"),"Color: ",this.state.color,o.a.createElement("br",null),"Fill: ",this.state.fill,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("select",{id:"modal-color-dropdown",name:"color",value:this.state.color,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a color"),o.a.createElement("option",{value:"After School Special"},"After School Special"),o.a.createElement("option",{value:"Morning Haze"},"Morning Haze"),o.a.createElement("option",{value:"Cozy Denim"},"Cozy Denim"),o.a.createElement("option",{value:"Rainy Day"},"Rainy Day")),o.a.createElement("select",{id:"modal-fill-dropdown",name:"fill",value:this.state.fill,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a fill"),o.a.createElement("option",{value:"Duck Down"},"Duck Down"),o.a.createElement("option",{value:"Hypoallergenic Poly-Blend"},"Hypoallergenic Poly-Blend"),o.a.createElement("option",{value:"Memory Foam"},"Memory Foam")),o.a.createElement("button",{id:"modal-add-to-cart",onClick:function(t){return e.props.addToCart("Couch Pillow",e.state.color,e.state.fill,25)}},"Add to Cart")))))),o.a.createElement("div",{className:"product-2-modal"},o.a.createElement("div",{id:"bed-pillow-modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("a",{href:"#",className:"close-popup"},"\xd7"),o.a.createElement("div",{className:"product-description"},o.a.createElement("h2",null,"Bed Pillow"),o.a.createElement("h2",null,"\u2605\u2605\u2605\u2605\u2606"),o.a.createElement("h2",null,"$35.00"),"Color: ",this.state.color,o.a.createElement("br",null),"Fill: ",this.state.fill,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("select",{id:"modal-color-dropdown",name:"color",value:this.state.color,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a color"),o.a.createElement("option",{value:"After School Special"},"After School Special"),o.a.createElement("option",{value:"Morning Haze"},"Morning Haze"),o.a.createElement("option",{value:"Cozy Denim"},"Cozy Denim"),o.a.createElement("option",{value:"Rainy Day"},"Rainy Day")),o.a.createElement("select",{id:"modal-fill-dropdown",name:"fill",value:this.state.fill,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a fill"),o.a.createElement("option",{value:"Duck Down"},"Duck Down"),o.a.createElement("option",{value:"Hypoallergenic Poly-Blend"},"Hypoallergenic Poly-Blend"),o.a.createElement("option",{value:"Memory Foam"},"Memory Foam")),o.a.createElement("button",{id:"modal-add-to-cart",onClick:function(t){return e.props.addToCart("Bed Pillow",e.state.color,e.state.fill,35)}},"Add to Cart")))))),o.a.createElement("div",{className:"product-3-modal"},o.a.createElement("div",{id:"floor-pouf-modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("a",{href:"#",className:"close-popup"},"\xd7"),o.a.createElement("div",{className:"product-description"},o.a.createElement("h2",null,"Floor Pouf"),o.a.createElement("h2",null,"\u2605\u2605\u2605\u2605\u2606"),o.a.createElement("h2",null,"$30.00"),"Color: ",this.state.color,o.a.createElement("br",null),"Fill: ",this.state.fill,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("select",{id:"modal-color-dropdown",name:"color",value:this.state.color,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a color"),o.a.createElement("option",{value:"After School Special"},"After School Special"),o.a.createElement("option",{value:"Morning Haze"},"Morning Haze"),o.a.createElement("option",{value:"Cozy Denim"},"Cozy Denim"),o.a.createElement("option",{value:"Rainy Day"},"Rainy Day")),o.a.createElement("select",{id:"modal-fill-dropdown",name:"fill",value:this.state.fill,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a fill"),o.a.createElement("option",{value:"Duck Down"},"Duck Down"),o.a.createElement("option",{value:"Hypoallergenic Poly-Blend"},"Hypoallergenic Poly-Blend"),o.a.createElement("option",{value:"Memory Foam"},"Memory Foam")),o.a.createElement("button",{id:"modal-add-to-cart",onClick:function(t){return e.props.addToCart("Floor Pouf",e.state.color,e.state.fill,30)}},"Add to Cart")))))),o.a.createElement("div",{className:"product-4-modal"},o.a.createElement("div",{id:"round-pillow-modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("a",{href:"#",className:"close-popup"},"\xd7"),o.a.createElement("div",{className:"product-description"},o.a.createElement("h2",null,"Round Pillow"),o.a.createElement("h2",null,"\u2605\u2605\u2605\u2605\u2606"),o.a.createElement("h2",null,"$20.00"),"Color: ",this.state.color,o.a.createElement("br",null),"Fill: ",this.state.fill,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("select",{id:"modal-color-dropdown",name:"color",value:this.state.color,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a color"),o.a.createElement("option",{value:"After School Special"},"After School Special"),o.a.createElement("option",{value:"Morning Haze"},"Morning Haze"),o.a.createElement("option",{value:"Cozy Denim"},"Cozy Denim"),o.a.createElement("option",{value:"Rainy Day"},"Rainy Day")),o.a.createElement("select",{id:"modal-fill-dropdown",name:"fill",value:this.state.fill,onChange:this.handleChange,required:!0},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a fill"),o.a.createElement("option",{value:"Duck Down"},"Duck Down"),o.a.createElement("option",{value:"Hypoallergenic Poly-Blend"},"Hypoallergenic Poly-Blend"),o.a.createElement("option",{value:"Memory Foam"},"Memory Foam")),o.a.createElement("button",{id:"modal-add-to-cart",onClick:function(t){return e.props.addToCart("Round Pillow",e.state.color,e.state.fill,20)}},"Add to Cart")))))))}}]),a}(o.a.Component),b=(a(25),function(e){Object(m.a)(l,e);var t=Object(u.a)(l);function l(e){var a;return Object(c.a)(this,l),(a=t.call(this,e)).imgExt="./images/",a.shipping=4.99,a.tax=1.29,console.log("cart items passed to cart.js: ",a.props.cartItems),a.productContainers="",a.subtotal=a.props.subtotal,a}return Object(i.a)(l,[{key:"getImage",value:function(e){switch(e){case"Couch Pillow":return o.a.createElement("img",{src:a(10),alt:"couch pillow"});case"Bed Pillow":return o.a.createElement("img",{src:a(11),alt:"bed pillow"});case"Floor Pouf":return o.a.createElement("img",{src:a(12),alt:"floor pouf"});case"Round Pillow":return o.a.createElement("img",{src:a(13),alt:"round pillow"})}}},{key:"calculateShipping",value:function(){return 0==this.props.subtotal?"0.00":this.shipping}},{key:"calculateTax",value:function(){return 0==this.props.subtotal?"0.00":this.tax}},{key:"calculateTotal",value:function(){return 0==this.props.subtotal?"0.00":this.props.subtotal+this.shipping+this.tax}},{key:"renderProducts",value:function(){var e=this;console.log("Rendering products in Cart.js: ",this.props.cartItems);for(var t=[],a=function(a){var l=e.props.cartItems[a].productNum,n=e.props.cartItems[a].name,r=e.props.cartItems[a].color,c=e.props.cartItems[a].fill,i=e.props.cartItems[a].cost;t.push(o.a.createElement(o.a.Fragment,{key:a},o.a.createElement("div",{className:"cart-product-container"},e.getImage(n),o.a.createElement("div",{className:"cart-product-description"},o.a.createElement("h3",null,n),o.a.createElement("div",null,"Color: ",e.props.cartItems[a].color),o.a.createElement("div",null,"Fill: ",e.props.cartItems[a].fill),o.a.createElement("div",null,"Cost: $",e.props.cartItems[a].cost),o.a.createElement("button",{className:"remove-button",onClick:function(t){return e.props.removeFromCart(l,n,r,c,i)}},"Remove")))))},l=0;l<this.props.cartItems.length;l++)a(l);return t}},{key:"render",value:function(){return console.log("The cart was rendered"),o.a.createElement("main",null,o.a.createElement("h2",null,"Cart"),o.a.createElement("div",{className:"col-5 products-list"},this.renderProducts()),o.a.createElement("div",{className:"col-3 cart-summary"},o.a.createElement("div",{className:"cart-summary-row"},o.a.createElement("div",{className:"subtotal-label"},"Subtotal:"),o.a.createElement("div",{className:"cost"},"$",this.props.subtotal,".00")),o.a.createElement("div",{className:"cart-summary-row"},o.a.createElement("div",{className:"shipping-label"},"Shipping:"),o.a.createElement("div",{className:"cost"},"$",this.calculateShipping())),o.a.createElement("div",{className:"cart-summary-row"},o.a.createElement("div",{className:"tax-label"},"Tax:"),o.a.createElement("div",{className:"cost"},"$",this.calculateTax())),o.a.createElement("hr",{className:"divider",size:"1",width:"90%",color:"black"}),o.a.createElement("div",{className:"cart-summary-row"},o.a.createElement("div",{className:"total-label"},"Total:"),o.a.createElement("div",{className:"cost"},"$",this.calculateTotal()))))}}]),l}(o.a.Component));a(26);var C=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"col-12 footer-container"},o.a.createElement("div",{className:"col-2 link-list-1"},o.a.createElement("p",null,"Company"),o.a.createElement("p",null,"People and Places"),o.a.createElement("p",null,"Job Listings"),o.a.createElement("p",null,"Community Events")),o.a.createElement("div",{className:"col-2 link-list-2"},o.a.createElement("p",null,"Legal & Privacy"),o.a.createElement("p",null,"Gift Cards"),o.a.createElement("p",null,"Sustainability"),o.a.createElement("p",null,"Student Discount")),o.a.createElement("div",{className:"col-2 link-list-3"},o.a.createElement("p",null,"Investments"),o.a.createElement("p",null,"Donations")),o.a.createElement("div",{className:"col-2 link-list-4"},o.a.createElement("p",null,"Community Outreach"),o.a.createElement("p",null,"Work Programs"))))},w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={page:"home",productNum:1,cartNum:0,cartItems:[],cartSubtotal:0},l.changePage=l.changePage.bind(Object(s.a)(l)),l.addToCart=l.addToCart.bind(Object(s.a)(l)),l.removeFromCart=l.removeFromCart.bind(Object(s.a)(l)),l}return Object(i.a)(a,[{key:"changePage",value:function(e){this.setState({page:e})}},{key:"addToCart",value:function(e,t,a,l){var o=this.state.productNum;this.setState((function(n){return{cartItems:n.cartItems.concat([{productNum:o,name:e,color:t,fill:a,cost:l}]),cartNum:n.cartNum+1,productNum:n.productNum+1,cartSubtotal:n.cartSubtotal+l}}))}},{key:"removeFromCart",value:function(e,t,a,l,o){var n=this,r=-1,c=this.state.cartItems;console.log("Current Items in Cart before Removal: ",c),console.log("Current Number of Items in Cart before Removal: ",c.length);for(var i=0;i<this.state.cartItems.length;i++)this.state.cartItems[i].productNum==e&&(r=i);console.log("The index of the item to be removed: ",r),c.splice(r,1),console.log("New cart item",c),this.setState((function(e){return{cartItems:c,cartNum:e.cartNum-1,cartSubtotal:e.cartSubtotal-o}}),(function(){console.log("The updated cartItems should be: ",n.state.cartItems)}))}},{key:"render",value:function(){return"home"==this.state.page?o.a.createElement("div",{className:"App"},o.a.createElement(h,{changePage:this.changePage,cartItemNum:this.state.cartNum.toString()}),o.a.createElement(E,{changePage:this.changePage}),o.a.createElement(C,null)):"products"==this.state.page?o.a.createElement("div",{className:"App"},o.a.createElement(h,{changePage:this.changePage,cartItemNum:this.state.cartNum.toString()}),o.a.createElement(g,{changePage:this.changePage,addToCart:this.addToCart,productNum:this.state.productNum}),o.a.createElement(C,null)):"cart"==this.state.page?o.a.createElement("div",{className:"App"},o.a.createElement(h,{changePage:this.changePage,cartItemNum:this.state.cartNum.toString()}),o.a.createElement(b,{cartItems:this.state.cartItems,subtotal:this.state.cartSubtotal,removeFromCart:this.removeFromCart}),o.a.createElement(C,null)):void 0}}]),a}(o.a.Component);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.3c8cb78d.chunk.js.map