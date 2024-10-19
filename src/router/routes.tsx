import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/list";
import PokemonDetail from "../components/pokemon";
import PokeTest from "../components/layout/test"
import App from "../app";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path: '/list',
      element: <PokemonList />
      },
      {
        path: '/list/pokemon/:pokemonId',
        element: <PokemonDetail />
      },
      {
        path: '/test',
        element: <PokeTest />
      }
    ]
  },
]);

export default routes
