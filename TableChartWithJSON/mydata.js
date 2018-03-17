

function retrieveData() {
	var mydataset=JSON.parse(data);
	
var dataset=[];
var currdata = [];	
	
	for(var i=0; i< mydataset.length;i++){ 
		 currdata=[(mydataset[i].age)];	
		//alert(currdata);
	    dataset.push(currdata);	
	};
	alert(dataset);
	d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("height",function(d){
	var barHeight=d*5;
	return barHeight+"px";
	
	});
	
}