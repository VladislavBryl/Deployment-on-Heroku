$( () => {
  let player = new Player(5);
  for(n=0; n<player.infantryLQuantity; n++){
    $("body").append(player.infantry());
  }
  
  let enemy = new Enemy(5);
  for(n=0; n<enemy.infantryLQuantity; n++){
    $("body").append(enemy.infantry());
  }
  
  $("#turn").click( () => console.log('Next turn!'));

	let canvas = document.getElementById("map-zoom");

	mouseEvents(canvas);
	
});

function mouseEvents(canvas) {
  const zoomIntensity = 0.02;
  let originx = 0;
  let originy = 0;
  const width = canvas.width;
  const height = canvas.height;
  let scale = 1;
	let currentX = canvas.width/2;
	let currentY = canvas.height/2;
  const context = canvas.getContext("2d");
  canvas.onmousewheel = function (event){
	event.preventDefault();
	// Get mouse offset.
	let mousex = event.clientX - canvas.offsetLeft;
	let mousey = event.clientY - canvas.offsetTop;
	// Normalize wheel to +1 or -1.
	let wheel = event.wheelDelta/120;

	// Compute zoom factor.
	let zoom = Math.exp(wheel*zoomIntensity);

	// Translate so the visible origin is at the context's origin.
	//context.translate(originx, originy);

	// Compute the new visible origin. Originally the mouse is at a
	// distance mouse/scale from the corner, we want the point under
	// the mouse to remain in the same place after the zoom, but this
	// is at mouse/new_scale away from the corner. Therefore we need to
	// shift the origin (coordinates of the corner) to account for this.
	originx -= mousex/(scale*zoom) - mousex/scale;
	originy -= mousey/(scale*zoom) - mousey/scale;

	console.log(zoom);
	// Offset the visible origin to it's proper position.
	//context.translate(-originx, -originy);

	// Update scale and others.
	scale *= zoom;
	console.log(scale);
	// Scale it (centered around the origin due to the trasnslate above).
	canvas.width = width * scale;
	canvas.height = height * scale;
  }
  
  canvas.onmousemove = function(e) {
      currentX = e.pageX - this.offsetLeft;
      currentY = e.pageY - this.offsetTop;
  };
}

function attack(attacked){
  let distance = attacked.find(".area").offset().left - $(".selected.infantryLight").find(".area").offset().left;
  if(Math.abs(distance) < $(".selected.infantryLight").find(".area").width()){
    let distance = attacked.find(".area").offset().top - $(".selected.infantryLight").find(".area").offset().top;
    if(Math.abs(distance) < $(".selected.infantryLight").find(".area").width()){
      for(n=0; n < $(".selected.infantryLight").length; n++){
        if($(".selected.infantryLight").length > 1){
          for(x=0; x < $(".infantryLight").length; x++){
            let hp_en = attacked.find(".hp div").width() - (damage.infantryL2infantryL * (  $(".infantryLight.selected:nth-child("+(x+1)+")").find(".hp div").width() / 50));
            let hp_pl = $(".infantryLight.selected:nth-child("+(x+1)+")").find(".hp div").width() - (damage.infantryL2infantryL / (2 * $(".selected.infantryLight").length)) * (  $(".infantryLight.selected:nth-child("+(x+1)+")").find(".hp div").width() / 50);
            $(".infantryLight.selected:nth-child("+(x+1)+")").find(".hp div").css({
              "width": hp_pl
            });
            if(hp_pl <= 0){$(".infantryLight.selected:nth-child("+(x+1)+")").remove()}
            attacked.find(".hp div").css({
              "width": hp_en
            });
            if(hp_en <= 0){attacked.remove()}
            console.log(hp_en);
          }
        }else{
          let hp_en = attacked.find(".hp div").width() - (damage.infantryL2infantryL * (  $(".infantryLight.selected").find(".hp div").width() / 50));
          let hp_pl = $(".selected.infantryLight").find(".hp div").width() - (damage.infantryL2infantryL / (2 * $(".selected.infantryLight").length)) * (  $(".selected.infantryLight").find(".hp div").width() / 50);
          $(".selected.infantryLight").find(".hp div").css({
            "width": hp_pl
          });
          if(hp_pl <= 0){$(".selected.infantryLight").remove()}
          attacked.find(".hp div").css({
            "width": hp_en
          });
          if(hp_en <= 0){attacked.remove()}
          console.log(hp_en);
        }
      }
    }
  }
}

class Damage {
  constructor(){
    this.infantryL2infantryL = 10;
  }
}

class Player {

  constructor(infantryLQuantity) {
    this.infantryLQuantity = infantryLQuantity;
    this.maxW = $('body').width()-50;
    this.minW = 50;
    this.maxH = $('body').height()-50;
    this.minH = 50;
  }

  infantry(){
    return $("<div class='player infantryLight' style='left:" + Math.random() * (this.maxW - this.minW) + this.minW +"px; top: "+ Math.random() * (this.maxH - this.minH) + this.minH +"px'><div class='area'></div><div class='hp'><div></div></div></div>");
  }

}



class Enemy {

  constructor(infantryLQuantity) {
    this.infantryLQuantity = infantryLQuantity;
    this.maxW = $('body').width()-50;
    this.minW = 50;
    this.maxH = $('body').height()-50;
    this.minH = 50;
  }

  infantry(maxW, minW, maxH, minH){
    return $("<div class='enemy infantryLight' style='left:" + Math.random() * (this.maxW - this.minW) + this.minW +"px; top: "+ Math.random() * (this.maxH - this.minH) + this.minH +"px'><div class='area'></div><div class='hp'><div></div></div></div>");
  }

}
