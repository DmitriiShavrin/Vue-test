import React from 'react';
import { observer } from 'mobx-react-lite';
import './Excursion.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import photo1 from '../Home/Poster/Pictures/mint.jpeg';
import storeCalendar from '../../store/storeCalendar';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Excursion = observer(() => {
    return (
        <>
            <Navbar />
            <div className="excursion">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={photo1} className="card-item-img" alt="..." />
                        </div>
                        <div className="col-lg-6 excursion_explanation">
                            <h2>ЭКСКУРСИИ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, ipsam facere id quibusdam ipsum praesentium aut cum iste minima eligendi quas ducimus veniam commodi laudantium natus porro culpa quasi aspernatur. Quisquam molestiae amet architecto fugiat perspiciatis necessitatibus quasi provident, quam cum maiores suscipit numquam beatae eligendi quod molestias asperiores accusamus illum accusantium placeat magnam voluptatem debitis ex? Voluptate corporis animi accusantium autem corrupti, sed quae. Sunt, temporibus optio? Impedit, veritatis expedita facilis officia pariatur totam magni, ratione illo nobis quis dolor distinctio incidunt officiis ab omnis, perferendis quisquam magnam dolore fuga harum repellat quidem. Distinctio voluptas perferendis ad ipsa recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis adipisci sed cupiditate possimus nisi error deleniti, quas voluptates quam, modi est corrupti quos neque ipsum blanditiis rem accusamus at eius dolore id ullam vero eaque? Enim iure eum alias blanditiis animi aut ut possimus quibusdam, nulla totam amet optio corporis.
                            </p>
                            <button className='btn btn_enrole' onClick={() => storeCalendar.openModal()}>ЗАПИСАТЬСЯ</button>
                        </div>
                    </div>
                </div>
                {
                    storeCalendar.modal
                        ?
                        <>
                            <div className="excursion_modal">
                                <div class="card card-p">
                                    <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                        <h3 className='ms-2 mt-2'>Ближайшие экскурсии</h3>
                                        <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeCalendar.closeModal() }}></button>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <DayPicker
                                                selectedDays={storeCalendar.selectedDays}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="list">
                                                <h6 className="fw-bold inscription">Все экскурсии</h6>
                                                <ol className="list-group list-group-numbered">
                                                    {!storeCalendar.selectedDays.length
                                                        ?
                                                        <p className="text-danger">Экскурсии не запланированы</p>
                                                        :
                                                        (
                                                            storeCalendar.selectedDays.map((his, idx) => (
                                                                < li className="list-group-item d-flex bd-highlight align-items-center" key={idx}>
                                                                    <div className=" me-auto bd-highlight ms-3">{his.date}</div>
                                                                    <div className="bd-highlight">
                                                                        <button type="button" className="btn btn-success">Записаться</button>
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
                        </>
                        :
                        null
                }
            </div>
            <Footer />
        </>
    )
})

export default Excursion