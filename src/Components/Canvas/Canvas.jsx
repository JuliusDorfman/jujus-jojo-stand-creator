import React, { Component } from 'react'
import Konva from 'konva';
import "./Canvas.css";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    var stage = new Konva.Stage({
      container: 'main-display',
      width: window.innerWidth,
      height: window.innerHeight,
      position: "absolute"
    });

    // add canvas element
    var layer = new Konva.Layer();
    stage.add(layer);

    // create shape
    var box = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });
    layer.add(box);
    layer.draw();

    var imageObj = new Image();
    var imageObjTwo = new Image();
    imageObj.onload = function() {
      var image = new Konva.Image({
        x: 200,
        y: 50,
        image: imageObj,
        width: 100,
        height: 100,
        draggable: true
      });

      var imageTwo = new Konva.Image({
        x: 200,
        y: 50,
        image: imageObjTwo,
        width: 200,
        height: 200,
        draggable: true
      });

      layer.add(image)
      layer.add(imageTwo)
      layer.draw()
    };
    
    imageObj.src = '/assets/artPieces/dogsuke.png'
    imageObjTwo.src = '/assets/artPieces/jotaro.png'




    // add cursor styling
    box.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });
    box.on('mouseout', function() {
      document.body.style.cursor = 'default';
    });

  }

  loadImages() {
    let canvas = document.getElementById('canvas-background');
    var ctx = canvas.getContext('2d'),
      img = new Image();
    img.src = '/assets/backgrounds/gang_bg.jpg'
    ctx.drawImage(img, -0, 0, canvas.width, canvas.height)
  }

  canvasStyle = {
    width: window.innerWidth,
    height: window.innerHeight,
    position: "absolute",
    left: 0
  }


  render() {


    return (
      <div className="canvas-component">
        <canvas id="canvas-background" style={this.canvasStyle}>
        </canvas>
        <div id="main-display" />
        <button onClick={this.loadImages} style={{ position: "absolute" }}>Render</button>
      </div>
    )
  }
}
