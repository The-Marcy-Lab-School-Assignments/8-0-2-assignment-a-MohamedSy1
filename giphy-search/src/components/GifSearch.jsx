function GifSearch({ setInputText, handleClick }) {

    /* FEEDBACK: This is ALMOST a controlled form. In addition to having
    an onChange handler, you should provide the input with a value={inputText} prop
    which will fully control the value of the input 
    */
    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" onChange={(event) => setInputText(event.target.value)} />
            <button type="submit" className="btn btn-success" onClick={handleClick}>Search</button>
        </form>
    )
}

export default GifSearch
