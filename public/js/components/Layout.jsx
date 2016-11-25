import React from 'react'
import Button from './Button.jsx'
import Logger from './Logger.jsx'
import Alert from './Alert.jsx'
import store from '../store'

import {connect} from 'react-redux'
import {calculate} from '../actions/calculator'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickNumber = this.handleClickNumber.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleClickChangeSign = this.handleClickChangeSign.bind(this);
        this.handleClickOperator = this.handleClickOperator.bind(this);
        this.handleGetResult = this.handleGetResult.bind(this);
    }

    render() {
        return (
            <div className="container main-container">
                <div className="row">
                    <Alert status={this.props.alertStatus} text={this.props.alertText}/>
                </div>
                <div className="row">
                    <div className="jumbotron calculator">

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="calculator__screen">
                                    { this.props.screen ? this.props.screen.substr(0,10) : "0" }
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
                                <Button onClick={this.handleClickOperator} value="/">÷</Button>
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
                                <Button onClick={this.handleClickOperator} value="*">×</Button>
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
                                <Button onClick={this.handleClickOperator} value="-">-</Button>
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
                                <Button onClick={this.handleClickOperator} value="+">+</Button>
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
                                <Button onClick={this.handleGetResult}>=</Button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Logger rows={this.props.logger} />
                    </div>
                </div>
            </div>
        )
    }

    handleClickNumber(ev) {
        store.dispatch({ type: "ADD_SYMBOL", symbol: ev.target.value })
    }

    handleClickChangeSign(ev) {
        store.dispatch({ type: "CHANGE_SIGN" })
    }

    handleClickOperator(ev) {
        store.dispatch({ type: "ADD_OPERATOR", operator: ev.target.value });
    }

    handleGetResult(ev) {
        store.dispatch(calculate(this.props.calculation.concat([this.props.screen]).join('')));
    }

    handleClickReset(ev) {
        store.dispatch({ type: "RESET" });
    }

}

function getParams(state) {
    return {
        calculation: state.calculation,
        alertStatus: state.alertStatus,
        alertText: state.alertText,
        result: state.result,
        screen: state.screen.toString(),
        logger: state.logger
    }
}

export default connect(getParams)(Layout)