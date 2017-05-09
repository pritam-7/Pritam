//javascript document


var products = 
[
{
	"url": "golf.jpg",
	"title": 'Golf',
	"id" : 'Golf',
	"price": "0.75",
	"add" : "Add to cart",
	"meta" : ["Trending", "Sports"]
},
{
	"url": "tra.jpg",
	"title": 'Travel',
	"id" : 'Travel',
	"price": "1.00",
	"add" : "Add to cart",
	"meta" : ["Sports"]
},
{
	"url": "food.jpg",
	"title": "Food",
	"id": "Food",
	"price": "2.00",
	"add" : "Add to cart",
	"meta" : ["Entertainment"]
},
{
	"url": "ew.jpg",
	"title": "Entertainment",
	"id": "Entertainment",
	"price": "1.00",
	"add" : "Add to cart",
	"meta" : ["Sports"]
},
{
	"url": "pe.jpg",
	"title": "People",
	"id": "People",
	"price": "1.00",
	"add" : "Add to cart",
	"meta" : ["Entertainment"]
},
{
	"url": "td.jpg",
	"title": "Time",
	"id": "Time",
	"price": "2.00",
	"add" : "Add to cart",
	"meta" : ["Trending"]
},
{
	"url": "cyc.png",
	"title": "Cycling",
	"id": "Cycling",
	"price": "2.00",
	"add" : "Add to cart",
	"meta" : ["Sports"]
},
{
	"url": "instyle.jpg",
	"title": "Instyle",
	"id": "Instyle",
	"price": "1.50",
	"add" : "Add to cart",
	"meta" : ["Business"]
}
];

//var cc=0;

//var a=0,b=0,c=0,d=0;
function load_data() {

		if(sessionStorage.getItem("globalCount")==undefined)
			sessionStorage.setItem("globalCount", 0);
		else
			sessionStorage.globalCount = parseInt(sessionStorage.globalCount)+1;
	


			for(i=0;i<products.length;i++){

				for (j in products[i].meta) {
					
					{
						var div=document.createElement("div");
						div.className='col-md-4 col-sm-6 col-xs-12';
					
					document.getElementById(products[i].meta[j]+"_div").appendChild(div);
					var head = document.createElement("h3");
					head.innerHTML = products[i].title;
					head.className="head";
					div.appendChild(head);
					var image = document.createElement("img");
					image.setAttribute("src", products[i].url);
					image.setAttribute("style", 'margin-top:10px');
					image.setAttribute("data-price", products[i].price);
					image.className='thumbnail';
					image.id=products[i].id;
					div.appendChild(image);

					var BUTTON=document.createElement("button");

					BUTTON.setAttribute("onclick", 'AddToCart("'+products[i].id+'")');
					BUTTON.setAttribute("style", 'margin: 0px 0px 30px 30px;');
					BUTTON.className="button color";
					BUTTON.id=products[i].id+"_b";
					var title = document.createElement("div");
					title.className="title";
					title.innerHTML="Add to Cart";
					BUTTON.appendChild(title);
					var prc = document.createElement("div");
					prc.className="prc";
					prc.innerHTML="$"+products[i].price;
					BUTTON.appendChild(prc);

					div.appendChild(BUTTON);


				}
			}




		}
		show_hide("Trending");
		if(sessionStorage.globalCount>0)
		loadFromSession();
	}
//cc






function loadFromSession(){
/*	if(sessionStorage.getItem("globalCount")==undefined) //|| sessionStorage.getItem("globalCount")==NULL)
		sessionStorage.setItem("globalCount", 0);
	else
		sessionStorage.globalCount = parseInt(sessionStorage.globalCount)+1;
	if(sessionStorage.globalCount>0){*/
		var count = sessionStorage.getItem("Count_Var");
		for(i=0;i<count;i++){
			var TheCartItem = document.getElementById('Cart_Item');

			var mainDiv=document.createElement('div');
			mainDiv.setAttribute("class", 'container-fluid');
			mainDiv.setAttribute("style", 'border-top: 1px solid rgba(0,0,0,0.2)');
			mainDiv.id=sessionStorage.getItem("productsId["+i+"]") + "_mainDiv";
			TheCartItem.appendChild(mainDiv);


			var cartItemToAdd = document.getElementById(sessionStorage.getItem("productsId["+i+"]")).cloneNode(true);
			/*cartItemToAdd.id = "CartItem"+itemToAdd;*/
			cartItemToAdd.setAttribute("style", 'margin-top: 10px;width:80px; height:100px');
			cartItemToAdd.className="cartItemImage";
			var img_Div = document.createElement('div');
			img_Div.setAttribute("class", 'col-md-3 col-sm-3 col-xs-3');
			img_Div.id = "CartItem"+sessionStorage.getItem("productsId["+i+"]");
			img_Div.appendChild(cartItemToAdd);
			mainDiv.appendChild(img_Div);

			var priceDiv = document.createElement('div');
			priceDiv.setAttribute("class", 'col-md-3');
			var pp = document.createElement('p');
			pp.setAttribute("style", 'padding-top:35px; padding-left: 50px');
			pp.innerHTML="$"+document.getElementById(sessionStorage.getItem("productsId["+i+"]")).getAttribute('data-price');
			priceDiv.appendChild(pp);

			var quantutyDiv = document.createElement("div");
			quantutyDiv.setAttribute('style', "padding-left:10px");



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
			var string = "quant"+"productsId["+i+"]";
			if(sessionStorage.getItem("quant"+"productsId["+i+"]")==undefined)
				quant.innerHTML=1;
			else 
				quant.innerHTML= sessionStorage.getItem("quant"+"productsId["+i+"]");

			var space_1 = document.createElement("span");
			space_1.innerHTML=" ";
			var space_2 = document.createElement("span");
			space_2.innerHTML=" ";

			quantutyDiv.appendChild(a_1);
			quantutyDiv.appendChild(space_1)
			quantutyDiv.appendChild(quant);
			quantutyDiv.appendChild(space_2);
			quantutyDiv.appendChild(a_2);
			priceDiv.appendChild(quantutyDiv);



			mainDiv.appendChild(priceDiv);

			var subTotal = document.createElement("div");
			subTotal.setAttribute("class", 'col-md-3');
			var ll = document.createElement('div');
			ll.setAttribute("style", 'padding-top:35px; padding-left:30px; color:black');
			ll.innerHTML = "SubTotal: $";
			var span = document.createElement('span');
			span.id=sessionStorage.getItem("productsId["+i+"]")+"sub_total";
			span.setAttribute("class", 'subTotal');
			span.innerHTML="0";
			ll.appendChild(span);
			subTotal.appendChild(ll);

			mainDiv.appendChild(subTotal);

			var rediv = document.createElement("div");
			rediv.setAttribute("class", 'col-md-3');
			rediv.setAttribute("style", 'padding-top:10px');
			var remDiv = document.createElement("a");
			remDiv.setAttribute("onclick", 'remove("'+sessionStorage.getItem("productsId["+i+"]")+'")');
			remDiv.className="pull-right";
			rediv.appendChild(remDiv);

			var remBut = document.createElement("img");
			remBut.setAttribute("src", 'remove.png');

			remBut.setAttribute("style",'height:20px;width:20px');
			remDiv.appendChild(remBut);


			mainDiv.appendChild(rediv);


			var currentval = document.getElementById("counter").innerHTML;
			var newVal = currentval -(-1);
			sessionStorage.setItem("Count_Var", newVal);
			document.getElementById("counter").innerHTML=sessionStorage.Count_Var;
			var disable = document.getElementById(sessionStorage.getItem("productsId["+i+"]")+'b');


			cal_subtotal(sessionStorage.getItem("productsId["+i+"]"));
			cal_grand_total();

			//update_productId();
		}

	
	//}

//load_data(Section_name);

}

function show_hide(arg){

	if(arg=="Trending"){
		document.getElementById("Sports_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'none';
		document.getElementById("Trending_div").style.display = 'block';
		document.getElementById("Business_div").style.display = 'none';
	}
	if(arg=="Sports"){
		document.getElementById("Trending_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'none';
		document.getElementById("Sports_div").style.display = 'block';
		document.getElementById("Business_div").style.display = 'none';
	}
	if(arg=="Entertainment"){
		document.getElementById("Sports_div").style.display = 'none';
		document.getElementById("Trending_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'block';
		document.getElementById("Business_div").style.display = 'none';

	}
	if(arg=="Business"){
		document.getElementById("Sports_div").style.display = 'none';
		document.getElementById("Trending_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'none';
		document.getElementById("Business_div").style.display = 'block';
	}
}


//var global_count=0;


function FindIfIdExists(obj, id){
	var TheNodeList = obj.getElementsByTagName('div');
	for(i=0;i<TheNodeList.length;i++){
		if(TheNodeList[i].id === "CartItem"+id){
			return i+1;
		}
	}

	return 0;
}

var ct =0;
function AddToCart(itemToAdd){
	var CheckCart = document.getElementById("Cart_Item");
	var FoundNodeCount = FindIfIdExists(CheckCart, itemToAdd);
	if(FoundNodeCount==0)
	{
		var TheCartItem = document.getElementById('Cart_Item');

		var mainDiv=document.createElement('div');
		mainDiv.setAttribute("class", 'container-fluid');
		mainDiv.setAttribute("style", 'border-top: 1px solid rgba(0,0,0,0.2)');
		mainDiv.id=itemToAdd+"_mainDiv";
		TheCartItem.appendChild(mainDiv);


		var cartItemToAdd = document.getElementById(itemToAdd).cloneNode(true);
		/*cartItemToAdd.id = "CartItem"+itemToAdd;*/
		cartItemToAdd.setAttribute("style", 'margin-top: 10px;width:80px; height:100px');
		cartItemToAdd.className="cartItemImage";
		var img_Div = document.createElement('div');
		img_Div.setAttribute("class", 'col-md-3');
		img_Div.id = "CartItem"+itemToAdd;
		img_Div.appendChild(cartItemToAdd);
		mainDiv.appendChild(img_Div);

		var priceDiv = document.createElement('div');
		priceDiv.setAttribute("class", 'col-md-3');
		var pp = document.createElement('p');
		pp.setAttribute("style", 'padding-top:35px; padding-left: 50px');
		pp.innerHTML="$"+document.getElementById(itemToAdd).getAttribute('data-price');
		priceDiv.appendChild(pp);

		var quantutyDiv = document.createElement("div");
		quantutyDiv.setAttribute('style', "padding-left:10px");
		
		
		
		var a_1=document.createElement("a");
		a_1.setAttribute('onclick', 'dec_price("'+itemToAdd+'")');
		var qty = document.createElement("span");
		qty.setAttribute("style", 'color:black');
		qty.innerHTML = "Qty: ";
		a_1.appendChild(qty);
		var but_1=document.createElement("img");
		but_1.setAttribute("src", 'minus.jpg');
		but_1.setAttribute("style", "height: 20px; width: 20px");
		a_1.appendChild(but_1);
		
		var a_2=document.createElement("a");
		a_2.setAttribute('onclick', 'in_price("'+itemToAdd+'")');
		var but_2=document.createElement("img");
		but_2.setAttribute("src", 'plus.png');
		but_2.setAttribute("style", "height: 20px; width: 20px");
		a_2.appendChild(but_2);

		var quant = document.createElement("span");
		quant.setAttribute("id", itemToAdd+"quant");
		var string = "quant"+itemToAdd;
			if(sessionStorage.getItem(string)==undefined)
				quant.innerHTML="1";
			/*else 
				quant.innerHTML= sessionStorage.getItem(string);*/

		var space_1 = document.createElement("span");
		space_1.innerHTML=" ";
		var space_2 = document.createElement("span");
		space_2.innerHTML=" ";

		quantutyDiv.appendChild(a_1);
		quantutyDiv.appendChild(space_1)
		quantutyDiv.appendChild(quant);
		quantutyDiv.appendChild(space_2);
		quantutyDiv.appendChild(a_2);
		priceDiv.appendChild(quantutyDiv);

		

		mainDiv.appendChild(priceDiv);

		var subTotal = document.createElement("div");
		subTotal.setAttribute("class", 'col-md-3');
		var ll = document.createElement('div');
		ll.setAttribute("style", 'padding-top:35px; padding-left:30px; color:black');
		ll.innerHTML = "SubTotal: $";
		var span = document.createElement('span');
		span.id=itemToAdd+"sub_total";
		span.setAttribute("class", 'subTotal');
		span.innerHTML="0";
		ll.appendChild(span);
		subTotal.appendChild(ll);

		mainDiv.appendChild(subTotal);

		var rediv = document.createElement("div");
		rediv.setAttribute("class", 'col-md-3');
		rediv.setAttribute("style", 'padding-top:10px');
		var remDiv = document.createElement("a");
		remDiv.setAttribute("onclick", 'remove("'+itemToAdd+'")');
		remDiv.className="pull-right";
		rediv.appendChild(remDiv);
		//remDiv.setAttribute("style", 'padding-bottom:50px');
		var remBut = document.createElement("img");
		remBut.setAttribute("src", 'remove.png');
		
		remBut.setAttribute("style",'height:20px;width:20px');
		remDiv.appendChild(remBut);
		//remBut.setAttribute("onclick",'remove("'+itemToAdd+'")');
		//subTotal.appendChild(remDiv);
		//.appendChild(remDiv);

		mainDiv.appendChild(rediv);


		var currentval = document.getElementById("counter").innerHTML;
		var newVal = parseInt(currentval) +1;
		sessionStorage.setItem("Count_Var", newVal);
		document.getElementById("counter").innerHTML=sessionStorage.Count_Var;
		//var disable = document.getElementById(itemToAdd+'b');

		
		cal_subtotal(itemToAdd);
		cal_grand_total();

		update_productId();


	}
	else
		in_price(itemToAdd);
	
	
}

function remove(itemToRemove){
	var ele = document.getElementById(itemToRemove+"_mainDiv");
	ele.parentNode.removeChild(ele);
	sessionStorage.Count_Var= sessionStorage.Count_Var-1;
	document.getElementById("counter").innerHTML=sessionStorage.Count_Var;
	
	cal_grand_total();

	update_productId();

}

function in_price(count){

	var value = document.getElementById(count+"quant").innerHTML;
	var new_value = parseInt(value) + 1;
	sessionStorage.setItem("quant"+count, new_value);
	document.getElementById(count+"quant").innerHTML=sessionStorage.getItem("quant"+count);
	

	cal_subtotal(count);
	
}


function dec_price(count){
	var value = document.getElementById(count+"quant").innerHTML;
	if(value>1)
		var new_value = parseInt(value) - 1;
	else
		var new_value = value;
	sessionStorage.setItem("quant"+count, new_value);
	document.getElementById(count+"quant").innerHTML=sessionStorage.getItem("quant"+count);

	cal_subtotal(count);
	
}


var total = 0;
function cal_subtotal(count) {
	var no = document.getElementById(count+"quant").innerHTML;
	var pri = document.getElementById(count).getAttribute('data-price');
	document.getElementById(count+"sub_total").innerHTML=no*pri;
	cal_grand_total();	
	update_subTotals();

	
}

function cal_grand_total(){
	var elms = {};
	var total = 0;
	var elms = document.getElementsByClassName('subTotal');
	for( var i = 0; i<elms.length; i++){
		total = total - (- document.getElementById(elms[i].id).innerHTML);

	}

	document.getElementById("grand_total").innerHTML= total;
	
}

function update_productId(){
	var elem = {};
	elem = document.getElementsByClassName("cartItemImage");
	for(i=0;i<elem.length;i++){
		sessionStorage.setItem("productsId["+i+"]", elem[i].id);
	}

	update_subTotals();
}

function update_subTotals(){
	var elms = {};
	
	var elms = document.getElementsByClassName('subTotal');
	for( var i = 0; i<elms.length; i++){
		sessionStorage.setItem("subTotals["+i+"]", elms[i].innerHTML);

	}


}
/*
function chaal(){
	for(i=0;i<j;i++){
			document.write(sessionStorage.getItem("ProductId["+i+"]"));
		}
	}*/


	function get_data(){
		var grand = document.getElementById("grand_total").innerHTML;
		sessionStorage.setItem("GrandTotal", grand);
	/*var obj =document.getElementById("Cart_Item");
	var TheNodeList = obj.getElementsByTagName('div');
	for(i=0;i<TheNodeList.length;i++){
		if(TheNodeList[i].id === "CartItem"+id){
			return i+1;
		}
	}*/
}


$('#show_cart').click(function(){
	$('#cart').show();
	
});

$('#Continue_shopping').click(function(){
	$('#cart').hide();
	$('#main_page').show();
});