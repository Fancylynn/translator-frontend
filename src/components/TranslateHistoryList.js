import React, {Component} from "react";
import {getAllTranslateHistory} from "../apis";
import "../styles/TranslateHistoryList.css";
class TranslateHistoryList extends Component {
  state={
    items: [],
    loading: true
  }

  componentDidMount() {
    this.getTranslateHistoryList();
  }

  async getTranslateHistoryList() {
    try {
      const results = await getAllTranslateHistory();
      this.setState({items: results}); 
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({loading: false})
    }
  }

  selectTargetTranslateHistory = (recordId) => {
    this.props.history.push('/detail/' + recordId);
  }

  render() {
    const items = this.state.items && this.state.items.map((item, idx) => {
      return(
        <tr key={idx} className="table-tr" onClick={() => this.selectTargetTranslateHistory(item.id)}>
          <td>{item.id}</td>
          {item.input_text.length > 500 ? 
            <td>{item.input_text.substring(0, 400) + "..."}</td> 
            : 
            <td>{item.input_text}</td>
          }
          <td>{item.language}</td>
          {item.translation.length > 500 ? 
            <td>{item.translation.substring(0, 500) + "..."}</td> 
            : 
            <td>{item.translation}</td>
          }
        </tr>
        );
      });

    return(
      <div>
        <div className="note">* Click each row to view translation detail!</div>
        {this.state.loading
          ?
          <div>Loading...</div>
          :
          <table className="list-table">
            <tbody>
              <tr className="table-headers">
                <th className="narrow-column table-header">ID</th>
                <th className="wide-column table-header">Input Text</th>
                <th className="narrow-column table-header">Detected Language</th>
                <th className="wide-column table-header">Translated Text</th>
              </tr>
              {items.length > 0 && items}
            </tbody>
          </table>
        }
        {!this.state.loading && items.length === 0 && <span className="welcome-message">View previously translated words and phrases here!</span>}
      </div>
    );
  }
}

export default TranslateHistoryList;