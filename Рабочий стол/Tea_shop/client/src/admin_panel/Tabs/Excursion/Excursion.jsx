import React from 'react';
import { observer } from 'mobx-react-lite';
import './Excursion.css';
import Side_bar from '../../Side_bar/Side_bar';
import Navbar from '../../Navbar_admin/Navbar_admin';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import storeCalendar from '../../../store/storeCalendar';

const Excursion = observer(() => {
    let n = 1
    return (
        <>
            <Navbar />
            <div className="excursion_change">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Side_bar />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ms-5 mt-5">
                                        <DayPicker
                                            selectedDays={storeCalendar.selectedDays}
                                            onDayClick={storeCalendar.handleDayClick}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="fw-bold inscription">Создать дни экскурсий</h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='text-center'>#</th>
                                                <th scope="col" className='text-center'>Дата</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                storeCalendar.selectedDays.length
                                                    ?
                                                    storeCalendar.selectedDays.map((itm) => (
                                                        <tr key={itm._id}>
                                                            <th scope="row" className='text-center'>{n++}</th>
                                                            <td className='text-center'>{itm.date}</td>
                                                        </tr>
                                                    ))
                                                    :
                                                    <h5 className='text-danger mt-2'>Нет экскурсий</h5>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Excursion