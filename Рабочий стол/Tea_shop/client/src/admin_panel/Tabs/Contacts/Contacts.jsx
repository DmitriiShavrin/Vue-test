import React from 'react';
import { observer } from 'mobx-react-lite';
import './Contacts.css';
import Side_bar from '../../Side_bar/Side_bar';
import Navbar from '../../Navbar_admin/Navbar_admin';
import storeContacts from '../../../store/storeContacts';

const Contacts = observer(() => {
    return (
        <>
            <Navbar />
            <div className="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Side_bar />
                        </div>
                        <div className="col-lg-9">
                            <div className="items">
                                <h6 className="fw-bold inscription">Создать контакты</h6>
                                <form action="" className="add_items" onSubmit={(e) => { storeContacts.create(e) }}>
                                    <label for="basic-url" className="form-label mb-0">Email</label>
                                    <div className="input-group ">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => { storeContacts.setFormItem('email', e.target.value) }}></textarea>
                                    </div>
                                    <label for="basic-url" className="form-label mb-0">Phone</label>
                                    <div className="input-group ">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => { storeContacts.setFormItem('phone', e.target.value) }}></textarea>
                                    </div>
                                    <button className="btn btn-success mt-2">Добавить</button>
                                    <p className='mt-2 text-success'>{storeContacts.notify}</p>
                                    <p className="mt-2 text-danger">{storeContacts.error}</p>
                                </form>
                                {
                                    storeContacts.edit
                                        ?
                                        <>
                                            <div className="edit_card">
                                                <div class="card card_s my-5">
                                                    <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                        <h3>Обновите контакты</h3>
                                                        <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeContacts.closeModalEdit() }}></button>
                                                    </div>
                                                    <form action="" className="add_category" onSubmit={(e) => { storeContacts.updateItem(e, storeContacts.model._id) }}>
                                                        <label for="basic-url" class="form-label mb-0">Email</label>
                                                        <div className="input-group ">
                                                            <textarea type="text" className="form-control" value={storeContacts.model.email} placeholder='Исправьте email:' id='title' onInput={(e) => { storeContacts.setFormItem('email', e.target.value) }} />
                                                        </div>
                                                        <label for="basic-url" class="form-label mb-0">Phone</label>
                                                        <div className="input-group ">
                                                            <textarea type="text" className="form-control" value={storeContacts.model.phone} placeholder='Исправьте phone:' id='title' onInput={(e) => { storeContacts.setFormItem('phone', e.target.value) }} />
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
                                            {!storeContacts.allContacts.length
                                                ?
                                                <p className="text-danger">Контакты не созданы</p>
                                                :
                                                (
                                                    storeContacts.allContacts.map((his, idx) => (
                                                        < li className="list-group-item d-flex bd-highlight align-items-center" key={idx}>
                                                            {his.active ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                            </svg> : null}
                                                            <div className=" me-auto bd-highlight ms-3">Email: {his.email}</div>
                                                            <div className=" me-auto bd-highlight ms-3">Phone: {his.phone}</div>
                                                            <div className="bd-highlight">
                                                                <button type="button" className="btn btn-success" onClick={() => { storeContacts.activate(his._id) }}>Использовать</button>
                                                                <button type="button" className="btn btn-info ms-3" onClick={() => { storeContacts.openUpdate(his) }}>Изменить</button>
                                                                <button type="button" className="btn btn-danger ms-3" onClick={() => { storeContacts.deleteItem(his._id) }}>Удалить</button>
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

export default Contacts