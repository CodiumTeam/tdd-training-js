function MessageBox({ text }) {
    return (
        <div className="container">
            <div className="arrow">
                <div className="outer"></div>
                <div className="inner"></div>
            </div>
            <div className="message-body">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default MessageBox;