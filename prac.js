/*$('#trend_button').click(function(){
	$('#Trend').show();
	$('#Enter').hide();
	$('#Spo').hide();
	$('#Business').hide();
});*/

var products =
	[
	{
		"url": "ha.jpg",
		"title": 'Health',
		"price": ".5",
		"add" : "Add to cart",
		"meta" : ["Trending", "Sports"]
	},
	{
		"url": "fortune.jpg",
		"title": 'Fortune',
		"price": "1",
		"add" : "Add to cart",
		"meta" : ["Sports"]
	},
	{
		"url": "food.jpg",
		"title": "Food",
		"price": "2",
		"add" : "Add to cart",
		"meta" : ["Entertainment"]
	},
	{
		"url": "ew.jpg",
		"title": "Entertainment",
		"price": "1",
		"add" : "Add to cart",
		"meta" : ["Sports"]
	},
	{
		"url": "pe.jpg",
		"title": "People",
		"price": "1",
		"add" : "Add to cart",
		"meta" : ["Entertainment"]
	},
	{
		"url": "td.jpg",
		"title": "Time",
		"price": "2",
		"add" : "Add to cart",
		"meta" : ["Trending"]
	}
	];
var a=0,b=0,c=0;
function load_data(arg) {
	
	if(arg=="Trending"){
				a++;
				//document.getElementById('Sports_div').appendChild();	

			}
			if(arg=="Sports"){
				b++;
			}
			if(arg=="Entertainment"){
				c++;
			}
	if(a<=1 && b<=1 && c<=1)
	{

	
	for(i=0;i<products.length;i++){
		
		for (j in products[i].meta) {
   			 if(products[i].meta[j]==arg)
		{
			var div=document.createElement("div");
			div.className='col-sm-4';
			div.id=products[i].id;
			div.setAttribute("data-price", products[i].price);
			document.getElementById(arg+"_div").appendChild(div);
			var head = document.createElement("h3");
			head.innerHTML = products[i].title;
			div.appendChild(head);
			var image = document.createElement("img");
			image.setAttribute("src", products[i].url);
			image.className='thumbnail';
			image.id=products[i].id+"_p";
			div.appendChild(image);

			var BUTTON=document.createElement("a");
		//BUTTON.id=fun+"b";
		BUTTON.setAttribute("onclick", 'AddToCart()'+'; this.disabled=true');
		BUTTON.setAttribute("style", 'margin: 0px 0px 0px 30px');
		BUTTON.id=products[i].id+"_b";
		var but_img = document.createElement("img");
		but_img.setAttribute("src", 'add_to_cart.jpg');
		but_img.setAttribute("style", 'height: 40px; width: 100px');
		BUTTON.appendChild(but_img);
		div.appendChild(BUTTON);

			
			


		}
	}

		
	}
		
	}
	show_hide(arg);

}

function show_hide(arg){
	//var div = document.getElementById(arg+"div");
	if(arg=="Trending"){
		document.getElementById("Sports_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'none';
		document.getElementById("Trending_div").style.display = 'block';
	}
	if(arg=="Sports"){
		document.getElementById("Trending_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'none';
		document.getElementById("Sports_div").style.display = 'block';
	}
	if(arg=="Entertainment"){
		document.getElementById("Sports_div").style.display = 'none';
		document.getElementById("Trending_div").style.display = 'none';
		document.getElementById("Entertainment_div").style.display = 'block';

	}
}