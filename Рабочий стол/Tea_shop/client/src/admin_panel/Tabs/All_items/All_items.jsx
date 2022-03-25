import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './All_items.css';
import Side_bar from '../../Side_bar/Side_bar';
import storeItems from '../../../store/storeItems';
import storeCategory from '../../../store/storeCategory';
import Navbar from '../../Navbar_admin/Navbar_admin';

const All_items = observer(() => {

    useEffect(() => {
        // storeItems.getItems()
    }, []);

    let n = 1;
    let f = 1;
    return (
        <>
            <Navbar />
            <div className="all_items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Side_bar />
                        </div>
                        <div className="col-lg-9">
                            {/* ALL ITEMS */}
                            <div className="table_form_items">
                                <h6 className="fw-bold inscription mb-2">Все товары</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>#</th>
                                            <th scope="col" className='text-center'>Фото</th>
                                            <th scope="col" className='text-center'>Название</th>
                                            <th scope="col" className='text-center'>Катег-я</th>
                                            <th scope="col" className='text-center'>Цена</th>
                                            <th scope="col" className='text-center'>Скидка</th>
                                            <th scope="col" className='text-center'>Кол-во</th>
                                            <th scope="col" className='text-center'>Обновить</th>
                                            <th scope="col" className='text-center'>Удалить</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            storeItems.allItems.length
                                                ?
                                                storeItems.allItems.map((itm) => (
                                                    <tr key={itm._id}>
                                                        <th scope="row" className='text-center'>{f++}</th>
                                                        <td className='text-center'><img src={`/img/${itm.photo}`} width="50px" className="ms-2" /></td>
                                                        <td className='text-center'>{itm.title}</td>
                                                        <td className='text-center'>{itm.category_title}</td>
                                                        <td className='text-center'>{itm.price}</td>
                                                        <td className='text-center'>{itm.discount}</td>
                                                        <td className='text-center'>{itm.quantity}</td>
                                                        <td className='text-center'><button className='btn btn-success' onClick={() => { storeItems.openUpdate(itm) }}>Обновить</button></td>
                                                        <td className='text-center'><button className='btn btn-warning' onClick={() => { storeItems.deleteItem(itm._id) }}>Удалить</button></td>
                                                    </tr>
                                                ))
                                                :
                                                <h5 className='text-danger mt-2'>Нет товаров</h5>
                                        }
                                    </tbody>
                                    {
                                        storeItems.edit_card_show
                                            ?
                                            <>
                                                <div className="edit_card">
                                                    <div class="card card_s my-5">
                                                        <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                            <h3>Обновите продукт</h3>
                                                            <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeItems.closeModalEdit() }}></button>
                                                        </div>
                                                        <form action="" className="add_category" onSubmit={(e) => { storeItems.updateItem(e, storeItems.model._id) }}>
                                                            <img src={storeItems.img_min ? storeItems.img_min : `/img/${storeItems.model.photo}`} class="card-img-top" alt="..." />
                                                            <label for="basic-url" class="form-label mb-0">Название товара</label>
                                                            <div className="input-group ">
                                                                <input type="text" className="form-control" value={storeItems.model.title} placeholder='Введите название товара:' id='title' onInput={(e) => { storeItems.setFormItem('title', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" class="form-label mb-0">Категория товара</label>
                                                            <select className="form-select" aria-label="Default select example" id="category_id" onChange={(e) => { storeItems.setFormItem('category_id', e.target.value) }}>
                                                                {storeCategory.allCategories.map((cat, idx) => (
                                                                    <option key={idx} value={cat.title}>{cat.title}</option>
                                                                ))}
                                                            </select>
                                                            <label for="basic-url" className="form-label mb-0">Стоимость товара</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder='Введите стоимость товара:' value={storeItems.model.price} id="price" onInput={(e) => { storeItems.setFormItem('price', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Скидка на товар</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder='Введите скидку на товар:' value={storeItems.model.discount} id="discount" onInput={(e) => { storeItems.setFormItem('discount', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Общие количество товара</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder='Общие количество товара:' value={storeItems.model.quantity} id="quantity" onInput={(e) => { storeItems.setFormItem('quantity', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Загрузите фото</label>
                                                            <div class="input-group mb-3">
                                                                <input type="file" class="form-control" id="photo" onChange={(e) => { storeItems.setFormItem('photo', e.target.files[0]) }} />
                                                            </div>
                                                            <button className="btn btn-success ">Обновить</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            null
                                    }
                                </table>
                                <p className='mt-2 text-success'>{storeItems.notify}</p>
                                <p className="mt-2 text-danger">{storeItems.error}</p>
                            </div>
                            {/* All categories */}
                            <div className="table_form_categories">
                                <h6 className="fw-bold inscription mb-2">Все категории</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>No</th>
                                            <th scope="col" className='text-center'>Название</th>
                                            <th scope="col" className='text-center'>URL</th>
                                            <th scope="col" className='text-center'>Обновить</th>
                                            <th scope="col" className='text-center'>Удалить</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            storeCategory.allCategories.length
                                                ?
                                                storeCategory.allCategories.map((cat) => (
                                                    <tr key={cat._id}>
                                                        <th className='text-center' scope="row">{n++}</th>
                                                        <td className='text-center'>{cat.title}</td>
                                                        <td className='text-center'>{cat.url}</td>
                                                        <td className='text-center'><button className='btn btn-success' onClick={() => { storeCategory.openUpdate(cat) }}>Обновить</button></td>
                                                        <td className='text-center'><button className='btn btn-warning' onClick={() => { storeCategory.deleteCategory(cat._id) }}>Удалить</button></td>
                                                    </tr>
                                                ))
                                                :
                                                <h5 className='text-danger mt-2'>Нет категорий</h5>
                                        }
                                    </tbody>
                                </table>
                                <p className='mt-2 text-success'>{storeCategory.notify}</p>
                                <p className="mt-2 text-danger">{storeCategory.error}</p>
                                {
                                    storeCategory.modal
                                        ?
                                        <div className="categories_update">
                                            <div className="d-flex justify-content-end">
                                                <button type="button" className="btn-close" aria-label="Close" onClick={() => storeCategory.closeUpdate()}></button>
                                            </div>
                                            <h6 className="fw-bold inscription mb-2 text-warning">Обновите категорию</h6>
                                            <form action="" className="add_items" onSubmit={(e) => { storeCategory.updateCategory(e, storeCategory.model._id) }}>
                                                <label for="basic-url" className="form-label mb-0">Название категории</label>
                                                <div className="input-group ">
                                                    <input type="text" className="form-control" placeholder='Введите название категории:' id='title' value={storeCategory.model.title} onInput={(e) => { storeCategory.setForm('title', e.target.value) }} />
                                                </div>
                                                <label for="basic-url" className="form-label mb-0">Название URL</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder='Введите URL категории:' value={storeCategory.model.url} onInput={(e) => { storeCategory.setForm('url', e.target.value) }} />
                                                </div>
                                                <button className="btn btn-success mt-2">Обновить</button>
                                                <p className='mt-2 text-success'>{storeCategory.notify}</p>
                                                <p className="mt-2 text-danger">{storeCategory.error}</p>
                                            </form>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            {/* ADD ITEMS */}
                            <div className="items">
                                <h6 className="fw-bold inscription mb-2 cp" onClick={() => storeItems.openAddItem()} openAddItem>Добавьте товар</h6>
                                {
                                    storeItems.item_show_modal
                                        ?
                                        <form action="" className="add_items" onSubmit={(e) => { storeItems.create(e) }}>
                                            <label for="basic-url" className="form-label mb-0">Название товара</label>
                                            <div className="input-group ">
                                                <input type="text" className="form-control" placeholder='Введите название товара:' id='title' onInput={(e) => { storeItems.setFormItem('title', e.target.value) }} />
                                            </div>
                                            <label for="basic-url" className="form-label mb-0">Категория товара</label>
                                            <select className="form-select mb-2" aria-label="Default select example" id="category_id" onChange={(e) => { storeItems.setFormItem('category_id', e.target.value) }}>
                                                {storeCategory.allCategories.map((cat, idx) => (
                                                    <option key={idx} value={cat._id}>{cat.title}</option>
                                                ))}
                                            </select>
                                            <label for="basic-url" className="form-label mb-0">Стоимость товара</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder='Введите стоимость товара:' id="price" onInput={(e) => { storeItems.setFormItem('price', e.target.value) }} />
                                            </div>
                                            <div className="form-check form-switch mt-2 mb-2">
                                                <input className="form-check-input" type="checkbox" onChange={(e) => storeItems.openDiscount(e.target.checked)} role="switch" id="flexSwitchCheckDefault" />
                                                <label className="form-check-label" for="flexSwitchCheckDefault">Скидка на товар</label>
                                            </div>
                                            {storeItems.if_discount
                                                ?
                                                <>
                                                    <label for="basic-url" className="form-label mb-0">Скидка на товар</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder='Введите скидку на товар:' id="discount" onInput={(e) => { storeItems.setFormItem('discount', e.target.value) }} />
                                                    </div>
                                                </>
                                                :
                                                null
                                            }
                                            <label for="basic-url" className="form-label mb-0">Общие количество товара</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder='Общие количество товара:' id="quantity" onInput={(e) => { storeItems.setFormItem('quantity', e.target.value) }} />
                                            </div>
                                            <label for="basic-url" className="form-label mb-0">Загрузите фото</label>
                                            <div className="input-group mb-3">
                                                <input type="file" className="form-control" id="photo" onChange={(e) => { storeItems.setFormItem('photo', e.target.files[0]) }} />
                                            </div>
                                            <button className="btn btn-success ">Добавить</button>
                                            <p className='mt-2 text-success'>{storeItems.notify}</p>
                                            <p className="mt-2 text-danger">{storeItems.error}</p>
                                            {
                                                storeItems.img_min && storeItems.img_show
                                                    ?
                                                    <div className="card card_s my-5">
                                                        <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                            <h3>Preview</h3>
                                                            <button type="button" className="btn-close" aria-label="Close" onClick={() => { storeItems.closeModal() }}></button>
                                                        </div>
                                                        <img src={storeItems.img_min} className="card-img-top" alt="..." />
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </form>
                                        :
                                        null
                                }

                            </div>
                            {/* ADD CATEGORIES */}
                            <div className="categories">
                                <h6 className="fw-bold inscription mb-2 cp" onClick={() => { storeCategory.openAddCategory() }}>Добавьте категорию</h6>
                                {
                                    storeCategory.category_show_modal
                                        ?
                                        <form className="" onSubmit={(e) => { storeCategory.create(e) }}>
                                            <label for="basic-url" className="form-label mb-0">Название категории</label>
                                            <div className="input-group ">
                                                <input type="text" className="form-control" placeholder='Введите название категории:' id='title' onInput={(e) => { storeCategory.setForm('title', e.target.value) }} />
                                            </div>
                                            <label for="basic-url" className="form-label mb-0">Название URL</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder='Введите URL категории:' onInput={(e) => { storeCategory.setForm('url', e.target.value) }} />
                                            </div>
                                            <button className="btn btn-success mt-2">Добавить</button>
                                            <p className='mt-2 text-success'>{storeCategory.notify}</p>
                                            <p className="mt-2 text-danger">{storeCategory.error}</p>
                                        </form>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default All_items