
import { Calendar } from "fullcalendar";

const Callender = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
    const calendar = new Calendar(calendarEl, {
      initialView: "dayGridMonth",
    });
    calendar.render();
  });
};

export default Callender;
