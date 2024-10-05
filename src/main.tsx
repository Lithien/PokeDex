import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { StrictMode } from 'react';
import routes from './router/routes';
import Header from './router/root';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Header>
            <RouterProvider router={routes} />
        </Header>
    </StrictMode>
)
