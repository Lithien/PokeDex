import { PokemonSprites, PokemonSpritesOrdered } from "../../../../core/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useState } from "react"

interface CarouselSpritesProps {
  sprites: PokemonSprites
}

const CarouselSprites = ({ sprites }: CarouselSpritesProps) => {
  const [spritesReorder,] = useState<PokemonSpritesOrdered>({
    front_default: { img: sprites.front_default, description: 'Front' },
    back_default: { img: sprites.back_default, description: 'Back' },
    front_female: { img: sprites.front_female, description: 'Front Female' },
    back_female: { img: sprites.back_female, description: 'Back Female' },
    front_shiny: { img: sprites.front_shiny, description: 'Front Shiny' },
    back_shiny: { img: sprites.back_shiny, description: 'Back Shiny' },
    front_shiny_female: { img: sprites.front_shiny_female, description: 'Front Female Shiny' },
    back_shiny_female: { img: sprites.back_shiny_female, description: 'Back Female Shiny' },
  })
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
      {spritesReorder && Object.values(spritesReorder).filter(sprite => sprite !== null).map((sprite, index) => (
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
