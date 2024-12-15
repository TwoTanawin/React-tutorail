import PropTypes from "prop-types"

export function Image({imageUrl}){
    return (
        <div>
            <img src={imageUrl} width="100px"/>
        </div>
    )
}

Image.prototype = {
    imageUrl: PropTypes.string
}