export function Header() {
    return (
        <header className="navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src="logo192.png" alt="" width={32}/>
                    </a>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                    <li className="nav-item"><a href="/calc" className="nav-link px-2">Calculator</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2">About</a></li>
                </ul>

                <div className="">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </div>
        </header>
    );
}
