import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonRow.css'

class ButtonRow extends Component{
    static defaultProps ={
       link1:'',
       link1_label:'',
       link2:'',
       link2_label:'',
       link3_label:'',
       link4_label:'',
       link5_label:'',
       link3:'',
       link4:'',
       link5:''
      };

    render(){
        const link1 = this.props.link1;
        const link1_lable = this.props.link1_lable;
        const link2_lable = this.props.link2_lable;
        const link2 = this.props.link2;
        const link3_lable = this.props.link3_lable;
        const link3 = this.props.link3;
        const link4_lable = this.props.link4_lable;
        const link4 = this.props.link4;
        const link5_lable = this.props.link5_lable;
        const link5 = this.props.link5;

        return(
            <section className="button-row">
                <Link to={link1} className="button-link">{link1_lable}</Link>
                <Link to={link2} className="button-link">{link2_lable}</Link>
                <Link to={link3} className="button-link">{link3_lable}</Link>
                <Link to={link4} className="button-link">{link4_lable}</Link>
                <Link to={link5} className="button-link">{link5_lable}</Link>
               
            </section>
        )
    }
}

export default ButtonRow;