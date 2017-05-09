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

var count=0;

function Load(){
	var count= sessionStorage.getItem("Count_Var");


	for(i=0;i<count;i++){
		var Item_Id=sessionStorage.getItem("productsId["+i+"]");

		for(j=0;j<products.length;j++){
			if(products[j].id==Item_Id){
				var ItemDiv=document.createElement("div");
				ItemDiv.setAttribute("class", 'col-md-12 col-sm-12 col-xs-12');
				ItemDiv.setAttribute("style", 'border-bottom: 2px solid white');
				var ImgDiv = document.createElement("div");
				ImgDiv.setAttribute("class", "col-md-6 ");
				var ItemImg = document.createElement("img");
				ItemImg.setAttribute("src" , products[j].url);
				ItemImg.setAttribute("style", "width:100px; height: 135px");
				ImgDiv.appendChild(ItemImg);
				ItemDiv.appendChild(ImgDiv);


				var subTotalDiv = document.createElement("div");
				subTotalDiv.setAttribute("class", 'col-md-6');

				var price = products[j].price;
				var quant = parseFloat(sessionStorage.getItem("subTotals["+i+"]"))/price;
				count = parseInt(count)+parseInt(quant)-1;
				var p = document.createElement("p");
				p.setAttribute("style", "color:white; font-size: 18; text-align: cnetre");
				var span1 = document.createElement("span");
				var span2 = document.createElement("span");
				var span3 = document.createElement("span");
				var span4 = document.createElement("span");


				span1.innerHTML = quant;
				span2.innerHTML = " x ";
				span3.innerHTML = "$"+price;
				span4.innerHTML = "   =    $"+sessionStorage.getItem("subTotals["+i+"]");

				p.appendChild(span1);
				p.appendChild(span2);
				p.appendChild(span3);
				p.appendChild(span4);


				subTotalDiv.appendChild(p);

				ItemDiv.appendChild(subTotalDiv);
				document.getElementById("ProductDiv").appendChild(ItemDiv);
			}
		}
	}

	document.getElementById("TotalCount").innerHTML=count;

	document.getElementById("TotalPrice").innerHTML=sessionStorage.getItem("GrandTotal");


	var p = document.getElementById("TotalPrice").innerHTML;
	if(p>10){
		document.getElementById("DelCharges").innerHTML=0;
	}
	else
		document.getElementById("DelCharges").innerHTML=2;

	document.getElementById("AmountPayable").innerHTML=parseFloat(document.getElementById("TotalPrice").innerHTML)+parseFloat(document.getElementById("DelCharges").innerHTML);
}

