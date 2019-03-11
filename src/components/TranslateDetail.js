import React, {Component} from "react";
import {getTargetDetail} from "../apis.js";

class TranslateDetail extends Component {
    state = {
        detail: null
    };

    componentDidMount() {
        this.getDetail();
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
        return(
            <div>
                {this.state.detail && 
                    <table className="list-table">
                        <tbody>
                            <tr className="table-headers">
                                <th className="wide-column table-header">Input Text</th>
                                <th className="wide-column table-header">Translated Text</th>
                            </tr>
                            <tr>
                                <td>{this.state.detail.input_text}</td>
                                <td>{this.state.detail.translation}</td>
                            </tr>
                        </tbody>
                    </table>
                }
                
            </div>
        );
    }
}

export default TranslateDetail;