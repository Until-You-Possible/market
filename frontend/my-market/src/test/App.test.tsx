import React, {useEffect} from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App"
import { createRoot } from "react-dom/client";

describe('App Module', () => {

  test('render App container without crashing', () => {

    function AppWithCallbackAfterRender() {
      useEffect(() => {
        console.log("rendered")
      });
      return <App />
    }
    const containerRoot = document.getElementById('root') as HTMLElement;
    const root = createRoot(containerRoot);

    root.render(<AppWithCallbackAfterRender />);

  });

});