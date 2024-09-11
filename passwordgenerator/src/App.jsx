/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(7);
  const [nummbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    var pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (nummbersAllowed) str += "1234567890";
    if (charactersAllowed) str += "~`!@#$%^&*()_-+={[}]:;'<,>.?/|";

    for (var i = 1; i <= length; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  const copyToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
  }
  useEffect(() => {
    passwordGenerator();
  }, [length, nummbersAllowed, charactersAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white py-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none py-1 px-3 w-full"
            placeholder="Password"
            readOnly
          />
          <button  onClick={copyToClipBoard} className="outline-none bg-blue-700 py-1 px-3 text-white">
            Copy
          </button>
        </div>
        <div className="flex gap-x-3 pb-3">
          <div className="flex text-sm gap-x-2 flex-row">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                value={nummbersAllowed}
                className="cursor-pointer"
                onChange={(e) => {
                  setNumbersAllowed((prev)=>!prev);
                }}
              />
              <label>Numbers</label>
            </div>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                value={charactersAllowed}
                className="cursor-pointer"
                onChange={(e) => {
                  setCharactersAllowed((prev)=>!prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
