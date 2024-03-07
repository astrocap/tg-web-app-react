import React, { useState } from 'react';

function VideoForm() {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const handleTextInput1Change = (e) => {
    setTextInput1(e.target.value);
  };

  const handleTextInput2Change = (e) => {
    setTextInput2(e.target.value);
  };

  const handleLanguageSelectChange = (e) => {
    const options = e.target.options;
    const selectedLanguages = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedLanguages.push(options[i].value);
      }
    }
    setSelectedLanguages(selectedLanguages);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div>
      <video controls>
        <source src="https://www.youtube.com/watch?v=jGTN3LIAwsw&t=1951s&ab_channel=HoneyMad" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <label>Text Input 1:</label>
        <input type="text" value={textInput1} onChange={handleTextInput1Change} />
      </div>
      <div>
        <label>Text Input 2:</label>
        <input type="text" value={textInput2} onChange={handleTextInput2Change} />
      </div>
      <div>
        <label>Select Language(s):</label>
        <select multiple value={selectedLanguages} onChange={handleLanguageSelectChange}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Другие языки */}
        </select>
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
    </div>
  );
}

export default VideoForm;