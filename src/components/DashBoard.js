import React from "react";

export class DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {
            text : new Date().toLocaleTimeString()
        }
        this.timer = null;
    }
    componentDidMount(){
        this.timer =  setInterval(()=>{
            this.setState({
                text : new Date().toLocaleTimeString()
            })
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render(){
        const { text } = this.state
        return(
            <>
                <h1>{text}</h1>
            </>
        )
    }
}
