var fgimage=null;
var grayimage=null;
var redimage=null;
var greenimage=null;
var rainbow=null;
var orangeimage=null;
function loadImage()
{
  var canvas=document.getElementById("can");
  var image=document.getElementById("fgfile");
  fgimage=new SimpleImage(image);
  fgimage.drawTo(canvas);
}
function copying(temp)
{
  var image=new SimpleImage(temp.width,temp.height);
  for(var pixel of image.values())
    {
      var x=pixel.getX();
      var y=pixel.getY();
      var temppixel=temp.getPixel(x,y);
      image.setPixel(x,y,temppixel);
    }
  return image;
}
function dogray()
{
  if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
        grayimage=copying(fgimage);
        for(var pixel of grayimage.values())
          {
            var average=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
            pixel.setRed(average);
            pixel.setGreen(average);
            pixel.setBlue(average);
          }
        var canvas=document.getElementById("can");
        grayimage.drawTo(canvas);
    }
 
}
function dored()
{
  if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
   else
    {
      redimage=copying(fgimage);
      for(var pixel of redimage.values())
        {
         var average=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(average < 128)
            {
                pixel.setRed(2*average);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
          else
            {
                pixel.setRed(255);
                pixel.setGreen((2*average)-255);
                pixel.setBlue((2*average)-255);
            }
        }
      var canvas=document.getElementById("can");
      redimage.drawTo(canvas);
    }
}
function reset()
{
    
    if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Loaded");
      return;
    }
  else
    {
      var canvas=document.getElementById("can");
      fgimage.drawTo(canvas);
      
    }
}
function dogreen()
{
  if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      greenimage=copying(fgimage);
      for(var pixel of greenimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
              pixel.setRed(0);
              pixel.setGreen(2*avg);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed((2*avg)-255);
              pixel.setGreen(255);
              pixel.setBlue((2*avg)-255);
            }
        }
      var canvas=document.getElementById("can");
      greenimage.drawTo(canvas);
    }
}
function dorainbow()
{
   if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
        rainbow=copying(fgimage);
      for(var pixel of rainbow.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          var y=pixel.getY();
          if(y<rainbow.height/7)
            {
                   if(avg < 128)
                    {
                        pixel.setRed(2*avg);
                        pixel.setGreen(0);
                        pixel.setBlue(0);
                    }
                  else
                    {
                        pixel.setRed(255);
                        pixel.setGreen((2*avg)-255);
                        pixel.setBlue((2*avg)-255);
                    }
              
            }
          if(y >= (rainbow.height*3)/7 && y < (rainbow.height*4)/7)
            {
                 if(avg < 128)
                  {
                    pixel.setRed(0);
                    pixel.setGreen(2*avg);
                    pixel.setBlue(0);
                  }
                else
                  {
                    pixel.setRed((2*avg)-255);
                    pixel.setGreen(255);
                    pixel.setBlue((2*avg)-255);
                  }
            }
           if(y >= (rainbow.height)/7 && y < (rainbow.height*2)/7)
             {
                  if(avg < 128)
                  {
                      pixel.setRed(2*avg);
                      pixel.setGreen(0.8*avg);
                      pixel.setBlue(0);
                  }
                else
                  {
                    pixel.setRed(255);
                    pixel.setGreen(1.2*avg-51);
                    pixel.setBlue((2*avg)-255);
                  }
             }
          if(y >= (rainbow.height*2)/7 && y < (rainbow.height*3)/7)
             {
                  if(avg < 128)
                  {
                      pixel.setRed(2*avg);
                      pixel.setGreen(2*avg);
                      pixel.setBlue(0);
                  }
                else
                  {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                    pixel.setBlue((2*avg)-255);
                  }
             }
          if(y >= (rainbow.height*4)/7 && y < (rainbow.height*5)/7)
            {
                 if(avg < 128)
                  {
                    pixel.setRed(0);
                    pixel.setGreen(0);
                    pixel.setBlue(2*avg);
                  }
                else
                  {
                    pixel.setRed((2*avg)-255);
                    pixel.setGreen((2*avg)-255);
                    pixel.setBlue(255);
                  }
            }
          if(y >= (rainbow.height*5)/7 && y < (rainbow.height*6)/7)
            {
                 if(avg < 128)
                  {
                    pixel.setRed(0.8*avg);
                    pixel.setGreen(0);
                    pixel.setBlue(2*avg);
                  }
                else
                  {
                    pixel.setRed((1.2*avg)-51);
                    pixel.setGreen((2*avg)-255);
                    pixel.setBlue(255);
                  }
            }
          if(y >= (rainbow.height*6)/7 && y <= (rainbow.height))
            {
                  if(avg < 128)
                  {
                      pixel.setRed(1.6*avg);
                      pixel.setGreen(0);
                      pixel.setBlue(1.6*avg);
                  }
                else
                  {
                    pixel.setRed((0.4*avg)+153);
                    pixel.setGreen((2*avg)-255);
                    pixel.setBlue((0.4*avg)+153);
                  }
            }
        }
      var canvas=document.getElementById("can");
      rainbow.drawTo(canvas);
    }
}
function clearing()
{
  if(fgimage == null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
        fgimage=null;
        var canvas=document.getElementById("can");
        var ctx=canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}

function doorange()
{
  if(fgimage==null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      orangeimage=copying(fgimage);
      for(var pixel of orangeimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(1.2*avg-51);
              pixel.setBlue((2*avg)-255);
            }
        }
      var canvas=document.getElementById("can");
      orangeimage.drawTo(canvas);
    }
}
function doyellow()
{
  if(fgimage==null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      var yellowimage=copying(fgimage);
      for(var pixel of yellowimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(255);
              pixel.setBlue((2*avg)-255);
            }
        }
      var canvas=document.getElementById("can");
      yellowimage.drawTo(canvas);
    }
}
function doblue()
{
  if(fgimage==null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      var blueimage=copying(fgimage);
      for(var pixel of blueimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed((2*avg)-255);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue(255);
            }
        }
      
      var canvas=document.getElementById("can");
      blueimage.drawTo(canvas);
    }
}
function doindigo()
{
  if(fgimage==null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      var indigoimage=copying(fgimage);
      for(var pixel of indigoimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
                pixel.setRed(0.8*avg);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed((1.2*avg)-51);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue(255);
            }
        }
      var canvas=document.getElementById("can");
      indigoimage.drawTo(canvas);
    }
}
function dovoilet()
{
  if(fgimage==null || !fgimage.complete())
    {
      alert("Foreground Image Not Uploaded");
      return;
    }
  else
    {
      var vioimage=copying(fgimage);
      for(var pixel of vioimage.values())
        {
          var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
          if(avg < 128)
            {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
            }
          else
            {
              pixel.setRed((0.4*avg)+153);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue((0.4*avg)+153);
            }
        }
      var canvas=document.getElementById("can");
      vioimage.drawTo(canvas);
    }
}