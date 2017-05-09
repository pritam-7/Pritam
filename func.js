function () {
	var globalCount = sessionStorage.getItem("globalCount");
	if(globalCount>0){
		var count = sessionStorage.getItem("Count_Var");
		for(i=0;i<count;i++){
			var TheCartItem = document.getElementById('Cart_Item');

			var Main_div=document.createElement('div');
			Main_div.setAttribute("class", 'container-fluid');
			Main_div.setAttribute("style", 'border-top: 1px solid rgba(0,0,0,0.2)');
			Main_div.id=sessionStorage.getItem("productsId["+i+"]") + "_main_div";
			TheCartItem.appendChild(Main_div);


			var cartItemToAdd = document.getElementById(sessionStorage.getItem("productsId["+i+"]")).cloneNode(true);
			/*cartItemToAdd.id = "CartItem"+itemToAdd;*/
			cartItemToAdd.setAttribute("style", 'margin-top: 10px;width:80px; height:100px');
			cartItemToAdd.className="cartItemImage";
			var img_Div = document.createElement('div');
			img_Div.setAttribute("class", 'col-md-3 col-sm-3 col-xs-3');
			img_Div.id = "CartItem"+sessionStorage.getItem("productsId["+i+"]");
			img_Div.appendChild(cartItemToAdd);
			Main_div.appendChild(img_Div);

			var price_Div = document.createElement('div');
			price_Div.setAttribute("class", 'col-md-3 col-sm-3 col-xs-3');
			var pp = document.createElement('p');
			pp.setAttribute("style", 'padding-top:35px; padding-left: 50px');
			pp.innerHTML="$"+document.getElementById(sessionStorage.getItem("productsId["+i+"]")).getAttribute('data-price');
			price_Div.appendChild(pp);

			var quantity_Div = document.createElement("div");
			quantity_Div.setAttribute('style', "padding-left:10px");



			var a_1=document.createElement("a");
			a_1.setAttribute('onclick', 'dec_price("'+sessionStorage.getItem("productsId["+i+"]")+'")');
			var qty = document.createElement("span");
			qty.setAttribute("style", 'color:black');
			qty.innerHTML = "Qty: ";
			a_1.appendChild(qty);
			var but_1=document.createElement("img");
			but_1.setAttribute("src", 'minus.jpg');
			but_1.setAttribute("style", "height: 20px; width: 20px");
			a_1.appendChild(but_1);

			var a_2=document.createElement("a");
			a_2.setAttribute('onclick', 'in_price("'+sessionStorage.getItem("productsId["+i+"]")+'")');
			var but_2=document.createElement("img");
			but_2.setAttribute("src", 'plus.png');
			but_2.setAttribute("style", "height: 20px; width: 20px");
			a_2.appendChild(but_2);

			var quant = document.createElement("span");
			quant.setAttribute("id", sessionStorage.getItem("productsId["+i+"]")+"quant");
			quant.innerHTML="1";

			var space_1 = document.createElement("span");
			space_1.innerHTML=" ";
			var space_2 = document.createElement("span");
			space_2.innerHTML=" ";

			quantity_Div.appendChild(a_1);
			quantity_Div.appendChild(space_1)
			quantity_Div.appendChild(quant);
			quantity_Div.appendChild(space_2);
			quantity_Div.appendChild(a_2);
			price_Div.appendChild(quantity_Div);



			Main_div.appendChild(price_Div);

			var subTotal = document.createElement("div");
			subTotal.setAttribute("class", 'col-md-3 col-sm-3 col-xs-3');
			var ll = document.createElement('div');
			ll.setAttribute("style", 'padding-top:35px; padding-left:30px; color:black');
			ll.innerHTML = "SubTotal: $";
			var span = document.createElement('span');
			span.id=sessionStorage.getItem("productsId["+i+"]")+"sub_total";
			span.setAttribute("class", 'subTotal');
			span.innerHTML="0";
			ll.appendChild(span);
			subTotal.appendChild(ll);

			Main_div.appendChild(subTotal);

			var rediv = document.createElement("div");
			rediv.setAttribute("class", 'col-md-3 col-sm-3 col-xs-3');
			rediv.setAttribute("style", 'padding-top:10px');
			var rem_div = document.createElement("a");
			rem_div.setAttribute("onclick", 'remove("'+sessionStorage.getItem("productsId["+i+"]")+'")');
			rem_div.className="pull-right";
			rediv.appendChild(rem_div);
			
			var rem_but = document.createElement("img");
			rem_but.setAttribute("src", 'remove.png');
			
			rem_but.setAttribute("style",'height:20px;width:20px');
			rem_div.appendChild(rem_but);
			

			Main_div.appendChild(rediv);


			var currentval = document.getElementById("counter").innerHTML;
			var newVal = currentval -(-1);
			sessionStorage.setItem("Count_Var", newVal);
			document.getElementById("counter").innerHTML=sessionStorage.Count_Var;
			var disable = document.getElementById(sessionStorage.getItem("productsId["+i+"]")+'b');

			
			cal_subtotal(sessionStorage.getItem("productsId["+i+"]"));
			cal_grand_total();

			update_productId();
		}

	}
}