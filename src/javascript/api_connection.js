$( "#api_request_button" ).click(make_api_request);


var bedrooms = 4;
var price_min = 200;
var price_max = 380;
var city = "sheffield";
var num_pictures_min = 4;
var address_comparator = "Western Bank Sheffield S10 2TN";
var max_distance_km = 1.5

parameters = {
  bedrooms: bedrooms,
  price_min: price_min,
  price_max: price_max,
  city: city,
  num_pictures_min: num_pictures_min,
  address_comparator: address_comparator,
  max_distance_km: max_distance_km
  }

function make_api_request(){
  $.getJSON("http://127.0.0.1:8000/propertys/", parameters, function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      //response_data = data;
      //console.log(response_data);

      for(var i = 0; i < data.length; i++)
        show_property_html(data[i])
    });
}

function show_property_html(property){

  // HTML div container element
  var property_tile = document.createElement("div");
  property_tile.className = "s-12 m-12 l-4 margin-m-bottom";

  // HTML container element
  var image_holder = document.createElement("a");
  image_holder.className = "image-hover-zoom margin-bottom"

  // HTML image element
  var image = document.createElement("img");
  image.setAttribute("src", property.images[0])
  image_holder.appendChild(image);

  // HTML h2 title element
  var title = document.createElement("h2");
  var titleText = document.createTextNode(property.url);
  title.appendChild(titleText);

  // HTML paragraph element
  var paragraph = document.createElement("p");
  paragraph.className = "margin-bottom";
  var paragraphText = document.createTextNode("Price: " + property.price);
  paragraph.appendChild(paragraphText);

  property_tile.appendChild(image_holder);
  property_tile.appendChild(title);
  property_tile.appendChild(paragraph);

  document.getElementById("result_pane").appendChild(property_tile);

}
