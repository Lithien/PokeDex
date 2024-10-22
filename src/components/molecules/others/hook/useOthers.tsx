import { useEffect, useState } from "react"
import { PokemonService } from "../../../../core/services/pokemon"
import { FlavorText } from "../../../../core/types"

interface Props {
  id: number
}

const useOthers = (props: Props) => {
  const [specie, setSpecie] = useState<FlavorText[]>()

  useEffect(() => {
    fetchSpecies()
  }, [props.id])
  

  const fetchSpecies = async () => {
    try {
      const response = await PokemonService.getPokemonSpecies(props.id)
      setSpecie(response.flavor_text_entries.filter(item => item.language.name === 'es'))
    } catch (error) {
      console.log(error)
    }
  }


  return ({ specie })
}

export default useOthers
