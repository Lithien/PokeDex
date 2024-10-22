import { ReactElement } from "react"
import { ChainLink, EvolutionChain, PokemonType, Species } from "../core/types"
import ElectricIcon from "../assets/icons/electric_icon"
import BugIcon from "../assets/icons/bug_icon"
import DarkIcon from "../assets/icons/dark_icon"
import DragonIcon from "../assets/icons/dragon_icon"
import FairyIcon from "../assets/icons/fairy_icon"
import FireIcon from "../assets/icons/fire_icon"
import GhostIcon from "../assets/icons/ghost_icon"
import GrassIcon from "../assets/icons/grass_icon"
import GroundIcon from "../assets/icons/ground_icon"
import IceIcon from "../assets/icons/ice_icon"
import NormalIcon from "../assets/icons/normal_icon"
import PoisonIcon from "../assets/icons/poison_icon"
import RockIcon from "../assets/icons/rock_icon"
import SteelIcon from "../assets/icons/steel_icon"
import WaterIcon from "../assets/icons/water_icon"
import FightIcon from "../assets/icons/fighting_icon"
import FlyIcon from "../assets/icons/flying_icon"
import PsychicIcon from "../assets/icons/phychic_icon"

export const getStatColor = (name: string) => {
  let color = ''
  switch (name) {
    case 'hp':
      color = '#14CC60'
      break
    case 'attack':
      color = '#EF3E33'
      break
    case 'defense':
      color = '#004E98'
      break
    case 'special-attack':
      color = '#C589E8'
      break
    case 'special-defence':
      color = '#2589BD'
      break
    case 'speed':
      color = '#E4C811'
      break

    default:
      color = '#09BC8A'
      break
  }

  return color
}

export const formatStatName = (name: string) => name.replace('-', ' ')

export const getEnvolves = (envolves: EvolutionChain) => {
  const speciesArray: Species[] = []

  const transverse = (chain: ChainLink) => {
    if (chain.species) {
      const numberMatch = chain.species.url.match(/\/(\d+)\/$/)
      const number = numberMatch ? numberMatch[1] : null;

      const speciesWithDetails: Species = {
        ...chain.species,
        number: number || '',
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
      }

      speciesArray.push(speciesWithDetails)
    }

    chain.evolves_to.map(transverse)
  }

  transverse(envolves.chain)
  return speciesArray
}

export const getTypes = (types: PokemonType[]): ReactElement[] => types
  .map(typeInfo => {
    const typeName = typeInfo.type.name
    return typeIcons[typeName] || null
  })
  .filter(icon => icon !== null)

const typeIcons: { [key: string]: ReactElement } = {
  normal: <NormalIcon />,
  fire: <FireIcon />,
  water: <WaterIcon />,
  grass: <GrassIcon />,
  electric: <ElectricIcon />,
  ice: <IceIcon />,
  fighting: <FightIcon />,
  poison: <PoisonIcon />,
  ground: <GroundIcon />,
  flying: <FlyIcon />,
  psychic: <PsychicIcon />,
  bug: <BugIcon />,
  rock: <RockIcon />,
  ghost: <GhostIcon />,
  dragon: <DragonIcon />,
  dark: <DarkIcon />,
  steel: <SteelIcon />,
  fairy: <FairyIcon />
}