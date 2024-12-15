import PropTypes from "prop-types"

export default function CheckBox({text, isCheck}){
    let resultCheckBox = ''
    if(isCheck){
        resultCheckBox = (
            <div>{text} is done</div>
        )
    }
    else{
        resultCheckBox = (
            <div>{text} is in progress</div>
        )
    }
    return (
        <div>
            {resultCheckBox}
        </div>
    )
}

CheckBox.prototype = {
    text: PropTypes.string
}