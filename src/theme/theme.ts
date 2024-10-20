// src/theme.ts
export const theme = {
  colors: {
    normal: "#A8A878",
    fire: "#F08030",
    fighting: "#C03028",
    water: "#6890F0",
    flying: "#A890F0",
    grass: "#5fbd58",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    bug: "#A8B820",
    dragon: "#7038F8",
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    unknow: "#EE99AC",
  },
  getColorByType: (type: string) => {
    const colors: { [key: string]: string } = {
      normal: "#A8A878",
      fire: "#F08030",
      fighting: "#C03028",
      water: "#6890F0",
      flying: "#A890F0",
      grass: "#5fbd58",
      poison: "#A040A0",
      electric: "#F8D030",
      ground: "#E0C068",
      psychic: "#F85888",
      rock: "#B8A038",
      ice: "#98D8D8",
      bug: "#A8B820",
      dragon: "#7038F8",
      ghost: "#705898",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
      unknow: "#EE99AC",
    }

    return colors[type] || colors["unknow"]
  },
}
