function GifContainer({ datas }) {
    /* FEEDBACK: Nice job on this! However, for the alt text,
    use something like data.title
    
    Also, for the key, use data.id
    */
    return (
        <ul>
            {datas?.map((data, index) => {
                return <li key={index}><img src={data.images.fixed_height.url} alt="Giffy" /></li>
            })}
        </ul>
    )
}

export default GifContainer;
