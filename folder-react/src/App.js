import logo from './logo.svg'
import './App.css';
import { useRef } from 'react';

const App = () => {

    const linkRef = useRef(null)

    const GoTo = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <div onClick={ () => GoTo(linkRef.current)}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, vero.</p>
            </header>

            <body>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis maiores tempore eum minus totam animi ipsum minima quisquam. Nam laboriosam tenetur totam dolores eos ratione iusto quisquam dicta id vel!
                </p>
                <br/>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis eaque id expedita tempora ipsum, rem officia recusandae perferendis inventore. Amet dicta fugit accusantium doloribus ad corporis quis repellat laboriosam, modi eaque explicabo quasi. Libero asperiores hic accusamus consequatur quibusdam.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur cumque repellendus sit autem! Ipsam laborum officia adipisci cum. Maiores nemo quaerat neque rem temporibus nisi a, debitis incidunt facere repellat alias eligendi magnam quas!
                </p>
                <br/>
                <a href="https://google.com" target="blank" ref={linkRef}>klik di sini</a>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis eaque id expedita tempora ipsum, rem officia recusandae perferendis inventore. Amet dicta fugit accusantium doloribus ad corporis quis repellat laboriosam, modi eaque explicabo quasi. Libero asperiores hic accusamus consequatur quibusdam.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur cumque repellendus sit autem! Ipsam laborum officia adipisci cum. Maiores nemo quaerat neque rem temporibus nisi a, debitis incidunt facere repellat alias eligendi magnam quas!
                </p>
            </body>
        </div>
    );
}

export default App;