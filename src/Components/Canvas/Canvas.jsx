import React, { Component } from 'react'
import Konva from 'konva';
// import { Stage, Layer, Rect, Transformer } from "react-konva";
import "./Canvas.css";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgrounds: [
        'gang_bg.jpg',
        'kira_stands_bg.png',
        'wheelbarrel_bg.jpg',
        'white_bg.jpg',
        'blonde_bg.jpg',
        'funny_valentine_bg.jpg',
        'gyro_johnny_bg.png',
        'johnny_bg.png',
        'jojolion_bg.jpg',
        'jojolion_stands_bg.jpg',
        'stardust_crusaders.png',
        'cast_bg.png',
        'jolyne_bg.jpg'
      ],
      backgroundNum: 0
    };
  }

  componentDidMount() {
    var stage = new Konva.Stage({
      container: 'main-display',
      width: window.innerWidth - 100,
      height: window.innerHeight - 100,
      left: 0,
      position: "absolute"
    });

    stage.on('click', function(e) {
      // if click on empty area - remove all transformers
      if (e.target === stage) {
        stage.find('Transformer').destroy();
        layer.draw();
        return;
      }
      // do nothing if clicked NOT on our rectangles
      if (!e.target.hasName('rect')) {
        return;
      }
      // remove old transformers
      // TODO: we can skip it if current rect is already selected
      stage.find('Transformer').destroy();

      // create new transformer
      var tr = new Konva.Transformer();
      layer.add(tr);
      tr.attachTo(e.target);
      layer.draw();
    })

    // add canvas element
    var layer = new Konva.Layer();
    stage.add(layer);

    // create default images
    var imageObj = new Image();
    var imageObjTwo = new Image();
    var imageObjThree = new Image();
    var imageObjFour = new Image();
    var imageObjFive = new Image();

    imageObj.onload = function() {
      var image = new Konva.Image({
        x: 200,
        y: 50,
        image: imageObj,
        width: 100,
        height: 100,
        draggable: true,
        name: 'rect'
      });

      var imageTwo = new Konva.Image({
        x: 200,
        y: 250,
        image: imageObjTwo,
        width: 200,
        height: 200,
        draggable: true,
        name: 'rect'
      });

      var imageThree = new Konva.Image({
        x: 900,
        y: 50,
        image: imageObjThree,
        width: 200,
        height: 275,
        draggable: true,
        name: 'rect'
      });

      var imageFour = new Konva.Image({
        x: 500,
        y: 50,
        image: imageObjFour,
        width: 200,
        height: 275,
        draggable: true,
        name: 'rect'

      });

      var imageFive = new Konva.Image({
        x: 725,
        y: 215,
        image: imageObjFive,
        width: 200,
        height: 275,
        draggable: true,
        name: 'rect'
      });

      layer.add(image)
      layer.add(imageTwo)
      layer.add(imageThree)
      layer.add(imageFour)
      layer.add(imageFive)
      layer.draw()

      // add cursor styling
      image.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      image.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      imageTwo.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imageTwo.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      imageThree.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imageThree.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      imageThree.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imageThree.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      imageFour.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imageFour.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      imageFive.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imageFive.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
    };

    imageObj.src = '/assets/artPieces/dogsuke.png';
    imageObjTwo.src = '/assets/artPieces/jotaro.png';
    imageObjThree.src = '/assets/artPieces/dio-and-the-world.png';
    imageObjFour.src = '/assets/artPieces/jotaro-and-star-platinum.jpg';
    imageObjFive.src = '/assets/artPieces/gugugu.png';

  }


  changeBackground(e) {
    const canvasBackground = document.getElementById('canvas-background');
    const numOfBackgrounds = this.state.backgrounds.length;
    canvasBackground.style.background = `url(/assets/backgrounds/${this.state.backgrounds[this.state.backgroundNum]})`;
    canvasBackground.style.backgroundSize = 'cover';
    this.setState({ backgroundNum: this.state.backgroundNum + 1 });
    if (this.state.backgroundNum === numOfBackgrounds) {
      this.setState({ backgroundNum: 0 });
    }
  }

  canvasStyle = {
    width: window.innerWidth - 100,
    height: window.innerHeight - 100,
    position: "absolute",
    border: "1px solid black",
    left: 0
  }


  render() {


    return (
      <div className="canvas-component">
        <button className="background-button" onClick={this.changeBackground.bind(this)} style={{ position: "absolute", top: "35px" }}>Change Background</button>
        <div id="canvas-background" style={this.canvasStyle} />
        <div id="main-display" />
      </div>
    )
  }
}
