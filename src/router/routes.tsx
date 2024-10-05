import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/list";
import PokemonDetail from "../components/pokemon";
import Header from "./root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: '/list',
    element: <PokemonList />
  },
  {
    path: '/list/pokemon/:pokemonId',
    element: <PokemonDetail />
  }
]);

export default routes
