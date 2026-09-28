import { Link, Outlet } from "react-router-dom";

const App = (): React.JSX.Element => {
    return (
        <main>
            <header>
                <h1>
                    <Link to="/">XYZ</Link>
                </h1>
            </header>
            <Outlet />
        </main>
    );
}

export default App;
