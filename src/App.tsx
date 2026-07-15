import { CustomHeader } from "./components/CustomHeader"
import { SearchBar } from "./components/SearchBar"

export const App = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Filmly" />
      {/* SearchBar */}
      <SearchBar placeholder="Busca una pelicula" />
    </>
  )
}
