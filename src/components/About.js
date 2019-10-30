import React from "react";
import styled from "styled-components";



const Canvas = styled.canvas`
    width: 600px;
    height : 300px;
    position : absolute;
    transform: translate3d(-50%,-50%,0);
    left : 50%;
    top: 50%;
    background-color: #fff;
    z-index:999;
`

export class About extends React.Component{
    constructor(){
        super()
        this.state = {

        }
        this.ctx = null;
    }
    drawBezier=() => {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }

    drawLine = () => {
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(this.canvas.width,0);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'red';
        this.ctx.moveTo(this.canvas.width,0);
        this.ctx.lineTo(this.canvas.width,this.canvas.height);
        this.ctx.moveTo(this.canvas.width,this.canvas.height);
        this.ctx.lineTo(0,this.canvas.height);
        this.ctx.moveTo(0,this.canvas.height);
        this.ctx.lineTo(0,0);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawName = () => {
       const x = this.canvas.width / 2;
       this.ctx.beginPath();
       this.ctx.moveTo(x,0);
       this.ctx.font = '60px serif';
       this.ctx.textAlign = 'center';
       this.ctx.fillStyle = 'pink';
       this.ctx.fillText('abcdefg',x,100);     
    }

    createImg = () => {
        const img = new Image();
        img.src = this.canvas.toDataURL('image/png');
        img.style.display = 'none';
        document.body.appendChild(img);
    }


    componentDidMount(){
        this.ctx = this.canvas.getContext('2d')
        const ratio =  getPixelRetio(this.ctx);
        this.canvas.width = this.canvas.width * ratio;
        this.canvas.height = this.canvas.height * ratio;
        this.ctx && this.drawLine(); 
        this.ctx && this.drawName();
        this.ctx && this.createImg();
    }
    render(){
        return(
            <Canvas ref={(ele)=> this.canvas = ele }></Canvas>
        )
    }
}


const getPixelRetio = (context) => {
    const backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1)/ backingStore;    
}