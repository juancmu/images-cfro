import React, { useState } from 'react';

const AddArea = ({ onNewArea }) => {
    const [inputValue, setInputValue] = useState('');
    const [isGifSelected, setIsGifSelected] = useState(false);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event, fileType) => {
        document.getElementById('repeated-value').innerHTML =""
        event.preventDefault();
        if (inputValue.trim().length === 0) {
            return document.getElementById('repeated-value').innerHTML =
                'Please Type New Category';
        }

        if (inputValue.trim().length < 3) {
            document.getElementById('repeated-value').innerHTML =
                'Please Type 3 or more Characters';
            return;
        }

        onNewArea(inputValue.trim(), fileType);
        setInputValue('');
    };

    const handleSelection = (isGif) => {
        setIsGifSelected(isGif);
    };

    return (
        <>
            <form onSubmit={(event) => onSubmit(event, isGifSelected ? 'gif' : 'image')}>
                <input
                    type="text"
                    placeholder="Add Area"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)}
                />
            </form>
            <div>
                {/* <button onClick={() => handleSelection(false)}>Image</button>
                <button onClick={() => handleSelection(true)}>GIF</button> */}
            </div>
        </>
    );
};

export default AddArea;
