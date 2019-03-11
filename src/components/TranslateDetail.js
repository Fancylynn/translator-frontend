import React, {Component} from "react";
import {getTargetDetail} from "../apis.js";
import "../styles/TranslateDetail.css";

class TranslateDetail extends Component {
    state = {
        detail: {
            "id": 1,
            "input_text": "   《惊奇队长》",
            "language": "zh-CN",
            "translation": "Surprise Captain",
            "timestamp": "2019-03-11T00:19:15.196769Z"
        }
    };

    componentDidMount() {
        // this.getDetail();
    }

    async getDetail() {
        let id = this.props.match.params.id;
        try {
            const result = await getTargetDetail(id);
            this.setState({detail: result}); 
        } catch (error) {
            console.log("error");
            console.log(error);
            alert(error);
        }
    }

    render() {
        const {detail} = this.state
        return(
            <div>
                {this.state.detail &&
                    <div>
                        <div className="info-container">
                            <div className="label">ID</div>
                            <input className="text-box" value={detail.id}/>
                        </div>
                        <div className="info-container">
                            <div className="label">Detected Language</div>
                            <input className="text-box" value={detail.language}/>
                        </div>
                        <div className="info-container">
                            <div className="label">Created At</div>
                            <input className="text-box" value={detail.timestamp}/>
                        </div>
                        <table className="list-table">
                            <tbody>
                                <tr className="table-headers">
                                    <th className="wide-column table-header">Input Text</th>
                                    <th className="wide-column table-header">Translated Text</th>
                                </tr>
                                <tr>
                                    <td>{detail.input_text}</td>
                                    <td>{detail.translation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                
            </div>
        );
    }
}

export default TranslateDetail;