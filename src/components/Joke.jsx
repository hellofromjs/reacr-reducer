const Joke = ({text, className}) => {
    return (
        <div className={`${className} shadow m-3 p-3`}>
            { text }
        </div>
    )
}

export default Joke