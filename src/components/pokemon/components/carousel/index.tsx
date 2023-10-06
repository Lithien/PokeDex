import { PokemonSprite, type PokemonSprites } from '../../../../core/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
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
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      centeredSlides={true}
      style={{ width: '256px' }}
      loop={true}
    >
      {spritesReorder.filter(sprite => sprite.img !== null).map((sprite, index) => (
        <SwiperSlide className="duration-700 ease-in-out" data-carousel-item key={window.crypto.randomUUID()}>
          <>
            <h6 className="text-center">{sprite.description}</h6>
            <img
              className="h-64 w-64"
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
