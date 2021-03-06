// Parent for all related radio buttons

import React from 'react';
import RadioButton from './RadioButton';

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }


	// JSX for all child RadioButton
    getRadioButtons = () => {
        return (
            this.props.buttonsData.map((data) => 
            <RadioButton key={data[0]} id={data[0]} label={data[1]} isChecked={data[2]} updateButtonData={this.props.updateButtonData} />
            )
        );
    }

    render() {
        return(
            <div>
                {this.getRadioButtons()}
            </div>
        );
    }
}

export default RadioGroup;
