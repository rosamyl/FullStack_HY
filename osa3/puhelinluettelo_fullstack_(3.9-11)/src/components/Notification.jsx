const Notification = ({message, value}) => {
    // value 1 = good, value 0 = error/bad
    if (message === null){
        return null
    }
    if (value === '0'){
    return (
        <div className ="error">
            {message}
        </div>
    )}
    if (value === '1'){
        return (
            <div className ="accept">
                {message}
            </div>
        )}
}

export default Notification