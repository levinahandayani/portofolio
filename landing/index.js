import React , {Component} from "react";
import "./landing.css";
import TopName from "./components/topName";
import Description from "../html/landing/components/description";
import Form from './components/form';
import ScrollDown from './components/scrollDown';

class Landing extends Component{
    render(){
        return (
            <div class="wrapper with-image ">
            <div class="flex-wrapper">
                {/* topname */}
                <TopName 
                    name="Levina Handayani"
                ></TopName>
                {/* -- */}
                {/* description*/}
                        <Description>
                        </Description>
                {/* -- */}
                {/* form */}
                    <Form></Form>
                {/* -- */}
                {/* scroll down*/}
                    <ScrollDown></ScrollDown>
                {/* -- */}
            </div>
            <div class="opacity">
            </div>
        </div>

        )
    }
}

export default Landing;