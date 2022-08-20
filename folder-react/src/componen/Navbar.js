const Navbar = (props) => {
    return (
        <nav>
            <h3>{props.NavHead}</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Mitra</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;