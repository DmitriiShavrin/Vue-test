import React from 'react';
import { observer } from 'mobx-react-lite';
import './History.css';
import Side_bar from '../../Side_bar/Side_bar';
import storeHistory from '../../../store/storeHistory';
import Navbar from '../../Navbar_admin/Navbar_admin';

import photo1 from '../../../components/Home/Poster/Pictures/leafs.jpeg';

const History = observer(() => {
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
                                <h6 className="fw-bold inscription">Создать историю</h6>
                                <form action="" className="add_items" onSubmit={(e) => { storeHistory.create(e) }}>
                                    <label for="basic-url" className="form-label mb-0">История</label>
                                    <div className="input-group ">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => { storeHistory.setFormItem('discription', e.target.value) }}></textarea>
                                    </div>
                                    <label for="basic-url" className="form-label mb-0">Загрузите фото</label>
                                    <div className="input-group mb-3">
                                        <input type="file" className="form-control" id="photo" onChange={(e) => { storeHistory.setFormItem('photo', e.target.files[0]) }} />
                                    </div>
                                    <button className="btn btn-success ">Добавить</button>
                                    <p className='mt-2 text-success'>{storeHistory.notify}</p>
                                    <p className="mt-2 text-danger">{storeHistory.error}</p>
                                    {
                                        storeHistory.img_min && storeHistory.img_show
                                            ?
                                            <div className="card card_s my-5">
                                                <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                    <h3>Preview</h3>
                                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => { storeHistory.closeModal() }}></button>
                                                </div>
                                                <img src={storeHistory.img_min} className="card-img-top" alt="..." />
                                            </div>
                                            :
                                            null
                                    }

                                </form>
                                {
                                    storeHistory.edit
                                        ?
                                        <>
                                            <div className="edit_card">
                                                <div class="card card_s my-5">
                                                    <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                        <h3>Обновите историю</h3>
                                                        <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeHistory.closeModalEdit() }}></button>
                                                    </div>
                                                    <form action="" className="add_category" onSubmit={(e) => { storeHistory.updateItem(e, storeHistory.model._id) }}>
                                                        <img src={storeHistory.img_min ? storeHistory.img_min : `/img/${storeHistory.model.photo}`} class="card-img-top" alt="..." />
                                                        <label for="basic-url" class="form-label mb-0">История</label>
                                                        <div className="input-group ">
                                                            <textarea type="text" className="form-control" value={storeHistory.model.discription} placeholder='Исправьте историю:' id='title' onInput={(e) => { storeHistory.setFormItem('discription', e.target.value) }} />
                                                        </div>
                                                        <label for="basic-url" className="form-label mb-0">Загрузите фото</label>
                                                        <div class="input-group mb-3">
                                                            <input type="file" class="form-control" id="photo" onChange={(e) => { storeHistory.setFormItem('photo', e.target.files[0]) }} />
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
                                        <h6 className="fw-bold inscription">Все истории</h6>
                                        <ol className="list-group list-group-numbered">
                                            {!storeHistory.history.length
                                                ?
                                                <p className="text-danger">Истории не созданы</p>
                                                :
                                                (
                                                    storeHistory.history.map((his, idx) => (
                                                        < li className="list-group-item d-flex bd-highlight align-items-center" key={idx}>
                                                            {his.active ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg> : null}
                                                            <img src={`/img/${his.photo}`} alt="" width="100px" className="ms-2" />
                                                            <div className=" me-auto bd-highlight ms-3">{his.discription.substr(0, 27)}</div>
                                                            <div className="bd-highlight">
                                                                <button type="button" className="btn btn-success" onClick={() => { storeHistory.activate(his._id) }}>Использовать</button>
                                                                <button type="button" className="btn btn-info ms-3" onClick={() => { storeHistory.openUpdate(his) }}>Изменить</button>
                                                                <button type="button" className="btn btn-danger ms-3" onClick={() => { storeHistory.deleteItem(his._id) }}>Удалить</button>
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

export default History