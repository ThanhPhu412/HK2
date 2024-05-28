"use strict";
// Khai báo biến weekDays kiểu enum chứa giá trị là các ngày trong tuần.Tiến hành in tất cả các ngày trong tuần trong biến đã khai báo.
var WeekDayss1;
(function (WeekDayss1) {
    WeekDayss1["Sunday"] = "Ch\u1EE7 Nh\u1EADt";
    WeekDayss1["Monday"] = "Th\u1EE9 hai";
    WeekDayss1["Tuesday"] = "Th\u1EE9 ba";
    WeekDayss1["Wednesday"] = "Th\u1EE9 4";
    WeekDayss1["Thursday"] = "th\u1EE9 5";
    WeekDayss1["Friday"] = "th\u1EE9 6";
    WeekDayss1["Saturday"] = "th\u1EE9 7";
})(WeekDayss1 || (WeekDayss1 = {}));
// In ra tất cả các ngày trong tuần
for (let dayy in WeekDayss1) {
    //   console.log(WeekDayss1[dayy]);
}