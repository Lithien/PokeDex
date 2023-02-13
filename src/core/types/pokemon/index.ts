import { Effect, Name, NamedAPIResource, VerboseEffect } from "../common"

export interface Abilities {
  id: number
  name: string
  is_main_series: boolean
  generation: NamedAPIResource
  names: Name[]
  effect_entries: VerboseEffect[]
  effect_changes: AbilityEffectChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: AbilityPokemon[]
}

interface AbilityEffectChange {
  effect_entries: Effect[]
  version_group: NamedAPIResource
}

interface AbilityFlavorText {
  flavor_text: string
  language: NamedAPIResource
  version_group: NamedAPIResource
}

interface AbilityPokemon {
  is_hidden: boolean
  slot: number
  pokemon: NamedAPIResource
}
