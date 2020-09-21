import React from "react";
import ReactDOM from "react-dom";
import CoolMan from "host/CoolMan";

import "./index.css";

const App = () => <div>
    <h2>Consumer!!</h2>
    <CoolMan />
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
