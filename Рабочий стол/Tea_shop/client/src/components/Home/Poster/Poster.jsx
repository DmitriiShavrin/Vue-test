import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Poster.css';
// import photo5 from './Pictures/pot1.jpg';
// import photo6 from './Pictures/pot2.jpg';
// import photo7 from './Pictures/pot3.jpg';
import photo8 from './Pictures/uniq1.png';
import photo9 from './Pictures/uniq2.png';
import photo10 from './Pictures/uniq3.png';
import storeItems from '../../../store/storeItems';
import storeTestimonials from '../../../store/storeTestimonials';

const Poster = observer(() => {
  return (
    <>
      {/* FIRST POSTER */}
      <div className="poster">
        <div className="poster_group">
          <div className="poster_bg">
          </div>
          <div className="container pos_abs">
            <div className="row">
              <div className="col-lg-12">
                <div className="text text-center">
                  <h3>CHAINI TEA & CULTURE</h3>
                  <h5>Чай с историей более ста лет</h5>
                  <Link to="/tea" className='td_none'>
                    <button className='btn btn_white'>КУПИТЬ</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* POST REGARDING TEA */}
      <div className="first_post">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 first_post_left"></div>
            <div className="col-lg-6 first_post_right">
              <h4 className="fw-bold">Lorem ipsum dolor sit amet consectetur </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci sint obcaecati voluptatibus sit illum, hic repellendus earum fugiat perspiciatis officia tempora voluptas delectus eos architecto natus veritatis incidunt tenetur!</p>
            </div>
          </div>
        </div>
      </div>
      {/* ITEMS */}
      <div className="second_post_items pb-5 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="our_production text-center">ЧАИ НАШЕГО ПРОИЗВОДСТВА</h5>
            </div>
          </div>
          <div className="row mt-4">
            {
              storeItems.allTeas.length ?
                storeItems.allTeas.map((itm) => (
                  <div className="col-lg-3" key={itm._id}>
                    <Link to={`/item/${itm._id}`} className='td_none'>
                      <div className="card card_item" >
                        <img src={`/img/${itm.photo}`} className="card-item-img-top" alt="..." />
                        <div className="card-body">
                          <h4 className="card-text">{itm.title}</h4>
                          <p className="card-text">{itm.price} РУБ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
                :
                <h3 className="text-dander">Нет товаров</h3>
            }
          </div>
          <div className="text-center">
            <button className="btn btn_green" onClick={() => window.location = '/tea'}>ВСЕ ЧАИ</button>
          </div>
        </div>
      </div>
      {/* BIT POSTER */}
      <div className="poster_group">
        <div className="poster_bg_second">
        </div>
        <div className="container pos_abs_second">
          <div className="row">
            <div className="col-lg-12">
              <div className="text text-center">
                <h3>ИСТОРИЯ НАШЕГО ЧАЯ</h3>
                <h5 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas itaque et nihil, officiis ducimus sapiente eius explicabo praesentium vitae?</h5>
                <Link to="/history" className='td_none'>
                  <button className='btn btn_white mt-5'>УЗНАТЬ БОЛЬШЕ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className='our_production text-muted'>ОТЗЫВЫ</h4>
            </div>
          </div>
          {
            !storeTestimonials.currentTestimonials.length
              ?
              <>
                <div className="testimonisals_card mt-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card card_testimonial text-center">
                        <div className="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mb-3 text-muted" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                          </svg>
                          <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card_testimonial text-center">
                        <div className="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mb-3 text-muted" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                          </svg>
                          <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card_testimonial text-center">
                        <div className="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mb-3 text-muted" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                          </svg>
                          <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <div className="testimonisals_card mt-4">
                <div className="row">
                  {storeTestimonials.currentTestimonials.map((tes, idx) => (
                    <div className="col-lg-4">
                      <div className="card card_testimonial text-center" key={tes._id}>
                        <div className="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mb-3 text-muted" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                          </svg>
                          <p className="card-text text-muted">{tes.discription}</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          }
        </div>
      </div >
      {/* MINT */}
      < div className="poster_group" >
        <div className="poster_bg_mint">
        </div>
        <div className="container pos_abs_mint">
          <div className="row">
            <div className="col-lg-12">
              <div className="text text-end">
                <h2 className="text_mint_big">CHAINI TEA & CULTURE</h2>
                <h5>Чай с историей более ста лет</h5>
                <button className='btn btn_white'>КУПИТЬ</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* POTS */}
      < div className="second_post_items_pot pb-5 pt-3" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="our_production_pot text-center">ЭКСКЛЮЗИВНЫЕ ЧАЙНИКИ</h5>
            </div>
          </div>
          <div className="row mt-4">
            {
              storeItems.allPots.length ?
                storeItems.allPots.map((itm) => (
                  <div className="col-lg-4" key={itm._id}>
                    <Link to={`/item/${itm._id}`} className='td_none'>
                      <div className="card card_item_pot" >
                        <img src={`/img/${itm.photo}`} className="card-item-img-top-pot" alt="..." />
                        <div className="card-body">
                          <h4 className="card-text">{itm.title}</h4>
                          <p className="card-text">{itm.price} РУБ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
                :
                <h3 className="text-dander">Нет товаров</h3>
            }
          </div>
          <Link to="/pots" className='td_none'>
            <div className="text-center">
              <button className="btn btn_green_pot">ВСЕ ЧАИНИКИ</button>
            </div>
          </Link>
        </div>
      </div >
      {/* WHAT MAKES US DIFFERENT */}
      < div className="make_us_different" >
        <div className="poster_bg_different">
        </div>
        <div className="pos_abs_different">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4 className='our_prod_dif'>ЧТО ОТЛИЧАЕТ НАС ОТ ОСТАЛЬНЫХ</h4>
              </div>
            </div>
            <div className="cards_make_different">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card card_make_different text-center">
                    <div className="text-center">
                      <img src={photo8} className="card-item-img-top-dif" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="mb-3">Уникальное расположение</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card_make_different text-center">
                    <div className="text-center">
                      <img src={photo9} className="card-item-img-top-dif" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="mb-3">Без посредников</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card_make_different text-center">
                    <div className="text-center">
                      <img src={photo10} className="card-item-img-top-dif" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="mb-3">Экологичность</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius temporibus aspernatur tempore harum reiciendis. Ad necessitatibus omnis modi architecto, iste consequatur vero nesciunt vitae excepturi dolores reiciendis quos ullam tempore minus ipsum earum dignissimos est temporibus commodi blanditiis nostrum. Facere.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
})

export default Poster;