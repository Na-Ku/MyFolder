const firstButton = (props) => {
    return (
        <div>
            <button onClick={() => props.klik()}>Klik di Sini</button>
        </div>
    );
}

export default firstButton;