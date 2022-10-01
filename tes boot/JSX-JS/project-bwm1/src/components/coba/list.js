
const List = () => {
    const fruits = ['jeruk', 'matoa', 'durian', 'alpokat']
    const fruit = fruits.map( (f, ind)=> <li key={ind}>{f}</li> )

    return(
        <ul>
            {fruit}
        </ul>
    )
}

export default List