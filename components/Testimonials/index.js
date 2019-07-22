import { h, Component } from 'preact'
import Masonry from 'react-masonry-component'

import Testimonial from 'common/components/Testimonial'
import LeaveTestimonial from 'common/components/LeaveTestimonial'
import StarRating from 'common/components/StarRating'
import style from './style.scss'

class Testimonials extends Component {
  getEnding() {
    const { testimonials } = this.props
    const count = testimonials && testimonials.length
    const ending = count%10

    switch(ending) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "отзыва"
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      default:
        return "отзывов"
    }
  }

  render({partner, testimonials, isLoggedIn, onDelete, onSubmit}) {

    const rating = partner && partner.sortBy ? Math.round(partner.sortBy.rating*10)/10 : 0
    const starRate = partner && partner.sortBy ? partner.sortBy.rating : 0

    return (
      <div class={style.wrTestimonials}>
        <div class="container">
          <div class={style.testimonials}>
            <header>
              <h2>Отзывы кредита “{partner && partner.main && partner.main.title}”
                <div class={style.rating}>
                  <StarRating rating={starRate} />
                  <p>{testimonials.length} {this.getEnding()}</p>
                  {partner && partner.sortBy && partner.sortBy.rating && <span>({rating} из 5)</span>}
                </div>
              </h2>
              <figure>
                <img src={partner && partner.main && partner.main.logo}/>
              </figure>
            </header>

            {testimonials.length ?
                <Masonry class={style.masonry}>
                  {testimonials.map((item) => (
                    <Testimonial
                      key={item.id}
                      testiID={item.id}
                      text={item.text}
                      user={item.name}
                      rating={item.rating}
                      isLoggedIn={isLoggedIn}
                      onDelete={onDelete}
                    />
                  ))}
                </Masonry>
              : <h3>Загружаю отзывы...</h3>
            }
            <LeaveTestimonial id={partner ? partner.id : null} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
