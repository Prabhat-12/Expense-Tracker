import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="9e642ea8-63e2-47ff-ac6d-2987d6b5ee60" language="en-US">
            <Provider>
                  <App />
            </Provider>
    </SpeechProvider>,
    
    document.getElementById('root')
    );