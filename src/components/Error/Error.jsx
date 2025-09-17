import "./Error.css";

const Error =  ({
    message
}) => {
    return (
    <div className="Error">
        <img src="/icons/Error.png" alt="Error" />
        <h2>
            {message}
        </h2>
    </div>

    )
}

export default Error