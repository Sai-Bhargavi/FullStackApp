import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import './App.css';
const logo = require("./logo.svg");
function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsxs("header", Object.assign({ className: "App-header" }, { children: [_jsx("img", { src: logo, className: "App-logo", alt: "logo" }), _jsx("p", { children: !data ? "Loading..." : data })] })) })));
}
export default App;
