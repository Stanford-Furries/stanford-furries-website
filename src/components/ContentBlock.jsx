import "./ContentBlock.css";

function ContentBlock(props) {
    return (
        <div className="content-block">
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default ContentBlock;