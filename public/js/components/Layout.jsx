import React from 'react'
import Button from './Button.jsx'
import {connect} from 'react-redux'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenData: "",
            negative: false
        };

        this.handleClickNumber = this.handleClickNumber.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleClickChangeSign = this.handleClickChangeSign.bind(this);
    }

    handleClickNumber(ev) {
        this.setState({
            screenData: this.state.screenData + ev.target.value
        });
    }

    handleClickReset(ev) {
        this.setState({
            screenData: "",
            negative: false
        });
    }

    handleClickChangeSign(ev) {
        this.setState({
            negative: !this.state.negative
        })
    }

    render() {
        return (
            <div className="container main-container">
                <div className="row">
                    <div className="jumbotron calculator">

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="calculator__screen">
                                    {this.state.negative ? "-" + this.state.screenData : this.state.screenData}
                                </div>
                            </div>
                        </div>

                        <div className="row calculator__row-buttons">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickReset}>C</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickChangeSign}>∓</Button>
                            </div>
                            <div
                                className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3">
                                <Button>÷</Button>
                            </div>
                        </div>

                        <div className="row calculator__row-buttons">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="7">7</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="8">8</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="9">9</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button>×</Button>
                            </div>
                        </div>

                        <div className="row calculator__row-buttons">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="4">4</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="5">5</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="6">6</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button>-</Button>
                            </div>
                        </div>

                        <div className="row calculator__row-buttons">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="1">1</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="2">2</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value="3">3</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button>+</Button>
                            </div>
                        </div>

                        <div className="row calculator__row-buttons">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Button onClick={this.handleClickNumber} value="0">0</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button onClick={this.handleClickNumber} value=".">.</Button>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <Button>=</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function getParams(state) {
    return {}
}

export default Layout