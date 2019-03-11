import React, {Component} from "react";
import {translateText} from "../apis";
import "../styles/TranslatePage.css";
class TranslatePage extends Component {
  state={
    items: [],
    loading: true,
    inputText: '',
    translatedText: ''
  }

  onInputTextChange = (e) => {
    this.setState({inputText: e.target.value});
  }

  translate = async () => {
    try {
      const result = await translateText(this.state.inputText);
      this.setState({translatedText: result.translation})
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
        <div className="translate-page-container">
            <div className="translate-text-area-container">
                <textarea 
                  className="text-area input-text-area" 
                  onChange={this.onInputTextChange} 
                  value={this.state.inputText}
                  placeholder="Please input the sentence you want to translate!"
                >
                </textarea>
                <textarea 
                  className="text-area translated-text-area" 
                  value={this.state.translatedText}
                  placeholder="Translation result! The result cannot be changed!"
                  disabled
                >
                </textarea>
            </div>
            <button className="my-button button-translate" onClick={this.translate}>Translate</button>
        </div>
    );
  }
}

export default TranslatePage;