import { PokemonSprite, type PokemonSprites } from '../../../../core/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
import { useState } from 'react'

interface CarouselSpritesProps {
  sprites: PokemonSprites
}

const CarouselSprites = ({ sprites }: CarouselSpritesProps) => {
  const [spritesReorder] = useState<PokemonSprite[]>([
    { img: sprites.front_default, description: 'Front' },
    { img: sprites.back_default, description: 'Back' },
    { img: sprites.front_female, description: 'Front Female' },
    { img: sprites.back_female, description: 'Back Female' },
    { img: sprites.front_shiny, description: 'Front Shiny' },
    { img: sprites.back_shiny, description: 'Back Shiny' },
    { img: sprites.front_shiny_female, description: 'Front Female Shiny' },
    { img: sprites.back_shiny_female, description: 'Back Female Shiny' }
  ])

  return (
    <Swiper
      pagination={{
        dynamicBullets: true
      }}
      effect={'flip'}
      grabCursor
      navigation
      modules={[Pagination, Navigation, EffectFlip]}
      slidesPerView={1}
      centeredSlides
      style={{ width: '256px' }}
      loop={true}
    >
      {spritesReorder.filter(sprite => sprite.img !== null).map((sprite, index) => (
        <SwiperSlide key={window.crypto.randomUUID()} >
          <>
            <h6 className="text-center">{sprite.description}</h6>
            <img
              className="h-36 w-36"
              key={index}
              src={sprite.img}
              alt={`sprite ${index}`}
            />
          </>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselSprites
