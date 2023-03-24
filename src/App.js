import React, { useState } from 'react';
import chatGpt from './ChatGpt';
let API_KEY = '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';
function App() {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const[isloading,setIsLoading] = useState(false);
  async function handleGenerateText(e) {
    e.preventDefault();
    setIsLoading(true);
    const text = await chatGpt(inputText, 'davinci', API_KEY);
    setIsLoading(false)
    setGeneratedText(text);
  }

  return (
    <div className="container mt-5">
    <h3 className='text text-center mt-3'>Welcome to ChatGPT</h3>
        <div className='row'>
          <div className='col-lg-7 mt-3'>
            <form onSubmit = {(e)=>handleGenerateText(e)}>
            <div className='form-group'>
                <input type="text" placeholder="Search what ever you want"
                  className='form-control'
                  onChange = {(e)=>{setInputText(e.target.value)}}
                />
              </div>
              <button className='btn btn-outline-success mt-3' type="submit">generate response</button>
            </form>
          </div>

          <p className='mt-5'>
          {isloading ? "Loading..." : generatedText && generatedText}
          </p>
        </div>
    </div>
  );
}
export default App;