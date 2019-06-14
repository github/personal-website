
  var canvas=document.getElementById('myCanvas');
  var pen=canvas.getContext("2d");
  pen.lineWidth=50;
  pen.strokeStyle="red";
  var mouseStatus=false;
  var last=null;
  function pos(event){
    var ex, ey;
    ex=event.clientX;
    ey=event.clientY;
    return{
      x:ex,
      y:ey
    };
  }
  function start(event){
    mouseStatus=true;
  }
  function draw(event){
    if(!mouseStatus) return;
    var xy=pos(event);
    if(last!=null){
      pen.beginPath();
      pen.moveTo(last.x,last.y);
      pen.lineTo(xy.x,xy.y);
      pen.stroke();
    }
    last=xy;
  }
  function finish(event){
    mouseStatus=false;
    last=null;
  }
  canvas.onmousemove=draw;
  canvas.onmouseup=finish;
  canvas.onmousedown=start;
