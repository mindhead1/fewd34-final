var maplist = {
  "none":"http://nutsandboltssports.com/wp-content/uploads/2015/07/College-Football-Map.jpg",
  "boston_college":"https://docs.google.com/spreadsheets/d/e/2PACX-1vQWykLhhBZnGbcxQxWy4kA9fMK2ULdScnmvPfhAb8JtYoxC0DJy1a92x3ZoofuxDPBCUlJGF2pLse5-/pubchart?oid=659113045&amp;format=interactive",
  "clemson":"https://docs.google.com/spreadsheets/d/e/2PACX-1vQWykLhhBZnGbcxQxWy4kA9fMK2ULdScnmvPfhAb8JtYoxC0DJy1a92x3ZoofuxDPBCUlJGF2pLse5-/pubchart?oid=626997445&amp;format=interactive",
  "florida_state":"https://docs.google.com/spreadsheets/d/e/2PACX-1vQWykLhhBZnGbcxQxWy4kA9fMK2ULdScnmvPfhAb8JtYoxC0DJy1a92x3ZoofuxDPBCUlJGF2pLse5-/pubchart?oid=488904067&amp;format=interactive", "georgia_tech":"https://docs.google.com/spreadsheets/d/e/2PACX-1vQWykLhhBZnGbcxQxWy4kA9fMK2ULdScnmvPfhAb8JtYoxC0DJy1a92x3ZoofuxDPBCUlJGF2pLse5-/pubchart?oid=836510261&amp;format=interactive", "louisville":"https://docs.google.com/spreadsheets/d/e/2PACX-1vQWykLhhBZnGbcxQxWy4kA9fMK2ULdScnmvPfhAb8JtYoxC0DJy1a92x3ZoofuxDPBCUlJGF2pLse5-/pubchart?oid=587484639&amp;format=interactive"
}

function schoolChange(event) {
  console.log(this.value)
  var college = this.value
  var collegeurl = maplist[college]
  var iframe = '<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="' + collegeurl +'"></iframe>'
  var img = '<img class="img-fluid rounded" src="' + collegeurl + '"alt="" height="371" width="600">'
  
  if(college == "none") {
    console.log(college);
    $("#map").html(img);
  } else {
    console.log("2ndstif");
    $("#map").html(iframe);
  }
}

  

$(document).ready(function(){
  console.log('TOP OF READY')
  
  // $("#map").html(img);

  $("#school").change(schoolChange)

  })

  