export const getStatColor = (name: string) => {
  let color = ''
  switch (name) {
    case 'hp':
      color = '#14CC60'
      break;
    case 'attack':
      color = '#EF3E33'
      break;
    case 'defense':
      color = '#004E98'
      break;
    case 'special-attack':
      color = '#C589E8'
      break;
    case 'special-defence':
      color = '#2589BD'
      break;
    case 'speed':
      color = '#E4C811'
      break;
  
    default:
      color = '#09BC8A'
      break;
  }

  return color
}


export const formatStatName = (name: string) => name.replace('-', ' ')