import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { StrictMode } from 'react';
import routes from './router/routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </StrictMode>
)
