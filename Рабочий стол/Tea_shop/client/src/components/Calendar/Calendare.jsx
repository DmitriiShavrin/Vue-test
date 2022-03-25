// import React from 'react'

// const Calendare = () => {

//     // < script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js" >
//     // </script >
//     // <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js">
//     // </script>
//     // <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js">
//     // </script>

//     let td = new Dateforcalendar();
//     let crntmnt = td.getMonth();
//     let cy = td.getFullYear();
//     let sy = document.getElementById("year");
//     let selectMonth = document.getElementById("month");
//     let monthtw = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let mandyr = document.getElementById("mandyr");
//     showCalendar(crntmnt, cy);
//     function pre() {
//         cy = (crntmnt === 0) ? cy - 1 : cy;
//         crntmnt = (crntmnt === 0) ? 11 : crntmnt - 1;
//         showCalendar(crntmnt, cy);
//     }
//     function next() {
//         cy = (crntmnt === 11) ? cy + 1 : cy;
//         crntmnt = (crntmnt + 1) % 12;
//         showCalendar(crntmnt, cy);
//     }
//     function jump() {
//         cy = parseInt(sy.value);
//         crntmnt = parseInt(selectMonth.value);
//         showCalendar(crntmnt, cy);
//     }
//     function showCalendar(month, year) {
//         let firstday = (new Dateforcalendar(year, month)).getDay();
//         let daysinmonth = 32 - new Dateforcalendar(year, month, 32).getDateforcalendar();
//         let tbl = document.getElementById("calendarBody");
//         tbl.innerHTML = "";
//         mandyr.innerHTML = monthtw[month] + " " + year;
//         sy.value = year;
//         selectMonth.value = month;
//         let dateforcalendar = 1;
//         for (let i = 0; i < 6; i++) {
//             let dateforcalendarrow = document.createElement("tr");
//             for (let j = 0; j < 7; j++) {
//                 if (i === 0 && j < firstday) {
//                     let dateforcalendarcell = document.createElement("td");
//                     let dateforcalendarcellText = document.createTextNode("");
//                     dateforcalendarcell.appendChild(dateforcalendarcellText);
//                     dateforcalendarrow.appendChild(dateforcalendarcell);
//                 }
//                 else if (dateforcalendar > daysinmonth) {
//                     break;
//                 }
//                 else {
//                     let dateforcalendarcell = document.createElement("td");
//                     let dateforcalendarcellText = document.createTextNode(dateforcalendar);
//                     if (dateforcalendar === td.getDateforcalendar() && year === td.getFullYear() && month === td.getMonth()) {
//                         dateforcalendarcell.classList.add("bg-info");
//                     }
//                     dateforcalendarcell.appendChild(dateforcalendarcellText);
//                     dateforcalendarrow.appendChild(dateforcalendarcell);
//                     dateforcalendar++;
//                 }
//             }
//             tbl.appendChild(dateforcalendarrow);
//         }
//     }
//     return (
//         <>
//             <div class="container col-lg-4 ">
//                 <div class="cal">
//                     <h3 class="cal-header" id="mandyr"></h3>
//                     <table class="table table-bordered table-responsive-sm" id="calendar">
//                         <thead>
//                             <tr>
//                                 <th>Sun</th>
//                                 <th>Mon</th>
//                                 <th>Tue</th>
//                                 <th>Wed</th>
//                                 <th>Thu</th>
//                                 <th>Fri</th>
//                                 <th>Sat</th>
//                             </tr>
//                         </thead>
//                         <tbody id="calendarBody">
//                         </tbody>
//                     </table>
//                     <div class="form-inline">
//                         <button class="btnbtn-outline-primary col-sm-3" id="pre" onclick={() => { pre() }}>Pre</button>
//                         <button class="btnbtn-outline-primary col-sm-3" id="nex" onclick={() => { next() }}>Nex</button>
//                     </div>
//                     <br />
//                     <form class="form-inline">
//                         <label for="year"></label>
//                         <select class="form-control col-sm-4" name="year" id="year" onChange={() => { jump() }}>
//                             <option value='2015'>2015</option>
//                             <option value='2016'>2016</option>
//                             <option value='2017'>2017</option>
//                             <option value='2018'>2018</option>
//                             <option value='2019' > 2019</option >
//                             <option value='2020' > 2020</option >
//                             <option value='2021' > 2021</option >
//                             <option value='2022' > 2022</option >
//                             <option value='2023' > 2023</option >
//                             <option value='2024' > 2024</option >
//                             <option value='2025' > 2025</option >
//                         </select >
//                         <label class="lead mr-2 ml-2" for="month">Jump To: </label>
//                         <select class="form-control col-sm-4" name="month" id="month" onChange={() => { jump() }}>
//                             <option value='0'>Jan</option>
//                             <option value='1' > Feb</option >
//                             <option value='2' > Mar</option >
//                             <option value='3' > Apr</option >
//                             <option value='4' > May</option >
//                             <option value='5' > Jun</option >
//                             <option value='6' > Jul</option >
//                             <option value='7' > Aug</option >
//                             <option value='8' > Sep</option >
//                             <option value='9' > Oct</option >
//                             <option value='10' > Nov</option >
//                             <option value='11' > Dec</option >
//                         </select >
//                     </form >
//                 </div >
//             </div>
//         </>
//     )
// }

// export default Calendare






