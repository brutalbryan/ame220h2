  var startUp = function()
  {
    var obj = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/PipreolaWhitelyiKeulemans.jpg/179px-PipreolaWhitelyiKeulemans.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gib%C3%A3o_de_couro.jpg/225px-Gib%C3%A3o_de_couro.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Crested_myna%2C_Osaka%2C_Japan.jpg/375px-Crested_myna%2C_Osaka%2C_Japan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Egretta_thula_at_Las_Gallinas_Wildlife_Ponds.jpg/231px-Egretta_thula_at_Las_Gallinas_Wildlife_Ponds.jpg"
      ]
    slideShow.initialize(obj, "fade", 1);
  }
  var slideShow = {
    initialize:function(obj,type,initSlide)
    { 
      var bodyWidth = $("body").width();
      slideShow.animationType = type;
      slideShow.obj = obj;
      slideShow.currentSlide = initSlide;
      var outS = "";
      for (var i = 0; i < obj.length; i++)
      {
        outS += "<div style='background-image:url(" + obj[i]+  ")' class='slide' id='slide" + (i+1) + "'> </div>";
      }
      
      document.getElementById("container").innerHTML = outS;
      
      for (var i = 0; i < obj.length; i++)
      {
        if (i != (slideShow.currentSlide -1)) 
        {
          $("#slide" + (i+1)).hide();
        }
      } 
    },
    goPrev:function()
    {
      var bodyWidth = $("body").width();
      var slideIndex = slideShow.currentSlide;
      var prev = slideIndex - 1;
      if(prev < 1)
      {
        prev = slideShow.obj.length;
      }
      $("#slide" + slideIndex).stop().animate({"margin-left" : (bodyWidth * 2) + "px" },'slow').fadeOut(0);
      $("#slide" + prev).stop().animate({"margin-left" :  "-" + bodyWidth + "px"},0).fadeIn(0).animate({"margin-left":"0px"},'slow');
      slideShow.currentSlide = prev;
    },
    goNext:function()
    {
      var bodyWidth = $("body").width();
      var slideIndex = slideShow.currentSlide;
      var next = slideIndex + 1;
      if(next > 4)
      {
        next = 1;
      }
      $("#slide" + slideIndex).stop().animate({"margin-left" : "-" + bodyWidth + "px" },'slow').fadeOut(0);
      $("#slide" + next).stop().animate({"margin-left" : bodyWidth},0).fadeIn(0).animate({"margin-left":"0px"},'slow');
      slideShow.currentSlide  = next;
    },
    keyPrevNext:function(e)
    {
      //checks if e is a keycode or charcode for browser compatibility
      var unicode=e.keyCode ? e.keyCode : e.charCode;

      switch(unicode)
      {
        // Left arrow keyCode
        case 37:
          slideShow.goPrev();
            break;
        // Right arrow keyCode
        case 39:
          slideShow.goNext();
            break;
      }
    },
    currentSlide:0,
    obj:null
  }