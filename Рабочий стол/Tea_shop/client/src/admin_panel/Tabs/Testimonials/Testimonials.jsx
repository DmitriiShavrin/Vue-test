import React from 'react';
import { observer } from 'mobx-react-lite';
import './Testimonials.css';
import Side_bar from '../../Side_bar/Side_bar';
import storeTestimonials from '../../../store/storeTestimonials';
import Navbar from '../../Navbar_admin/Navbar_admin';

const Testimonials = observer(() => {

    return (
        <>
            <Navbar />
            <div className="history_change">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Side_bar />
                        </div>
                        <div className="col-lg-9">
                            <div className="items">
                                <h6 className="fw-bold inscription">Создать отзыв</h6>
                                <form action="" className="add_items" onSubmit={(e) => { storeTestimonials.create(e) }}>
                                    <label for="basic-url" className="form-label mb-0">Отзыв</label>
                                    <div className="input-group ">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => { storeTestimonials.setFormItem('discription', e.target.value) }}></textarea>
                                    </div>
                                    <button className="btn btn-success ">Добавить</button>
                                    <p className='mt-2 text-success'>{storeTestimonials.notify}</p>
                                    <p className="mt-2 text-danger">{storeTestimonials.error}</p>
                                </form>
                                {
                                    storeTestimonials.edit
                                        ?
                                        <>
                                            <div className="edit_card">
                                                <div class="card card_s my-5">
                                                    <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                        <h3>Обновите отзыв</h3>
                                                        <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeTestimonials.closeModalEdit() }}></button>
                                                    </div>
                                                    <form action="" className="add_category" onSubmit={(e) => { storeTestimonials.updateItem(e, storeTestimonials.model._id) }}>
                                                        <label for="basic-url" class="form-label mb-0">Отзыв</label>
                                                        <div className="input-group ">
                                                            <textarea type="text" className="form-control" value={storeTestimonials.model.discription} placeholder='Исправьте отзыв:' id='title' onInput={(e) => { storeTestimonials.setFormItem('discription', e.target.value) }} />
                                                        </div>
                                                        <button className="btn btn-success ">Обновить</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        null
                                }
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="list">
                                        <h6 className="fw-bold inscription">Все отзывы</h6>
                                        <ol className="list-group list-group-numbered">
                                            {!storeTestimonials.allTestimonials.length
                                                ?
                                                <p className="text-danger">Отзывы не созданы</p>
                                                :
                                                (
                                                    storeTestimonials.allTestimonials.map((his, idx) => (
                                                        < li className="list-group-item d-flex bd-highlight align-items-center" key={idx}>
                                                            {his.active ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg> : null}
                                                            <div className=" me-auto bd-highlight ms-3">{his.discription.substr(0, 27)}</div>
                                                            <div className="bd-highlight">
                                                                {
                                                                    !his.active
                                                                        ?
                                                                        <button type="button" className="btn btn-success" onClick={() => { storeTestimonials.activate(his._id) }}>Использовать</button>
                                                                        :
                                                                        <button type="button" className="btn btn-warning" onClick={() => { storeTestimonials.dis_activate(his._id) }}>Не спользовать</button>
                                                                }
                                                                <button type="button" className="btn btn-info ms-3" onClick={() => { storeTestimonials.openUpdate(his) }}>Изменить</button>
                                                                <button type="button" className="btn btn-danger ms-3" onClick={() => { storeTestimonials.deleteItem(his._id) }}>Удалить</button>
                                                            </div>
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Testimonials