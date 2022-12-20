/**
 * vue-cal v4.8.0
 * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
 * @license MIT
 */ const u = [
    "\u0414\u0430\u0432\u0430\u0430",
    "\u041C\u044F\u0433\u043C\u0430\u0440",
    "\u041B\u0445\u0430\u0432\u0433\u0430",
    "\u041F\u04AF\u0440\u044D\u0432",
    "\u0411\u0430\u0430\u0441\u0430\u043D",
    "\u0411\u044F\u043C\u0431\u0430",
    "\u041D\u044F\u043C",
  ],
  a = [
    "1-\u0440 \u0441\u0430\u0440",
    "2-\u0440 \u0441\u0430\u0440",
    "3-\u0440 \u0441\u0430\u0440",
    "4-\u0440 \u0441\u0430\u0440",
    "5-\u0440 \u0441\u0430\u0440",
    "6-\u0440 \u0441\u0430\u0440",
    "7-\u0440 \u0441\u0430\u0440",
    "8-\u0440 \u0441\u0430\u0440",
    "9-\u0440 \u0441\u0430\u0440",
    "10-\u0440 \u0441\u0430\u0440",
    "11-\u0440 \u0441\u0430\u0440",
    "12-\u0440 \u0441\u0430\u0440",
  ],
  e = "\u0416\u0438\u043B\u04AF\u04AF\u0434",
  E = "\u0416\u0438\u043B",
  D = "\u0421\u0430\u0440",
  t = "\u0414\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433",
  s = "\u04E8\u0434\u04E9\u0440",
  d = "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440",
  B =
    "\u0422\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B\u0433\u04AF\u0439",
  F = "\u0411\u04AF\u0445 \u04E9\u0434\u04E9\u0440",
  n = "\u0423\u0441\u0442\u0433\u0430\u0445",
  o =
    "\u0428\u0438\u043D\u044D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B",
  y = "dddd D MMMM YYYY",
  r = {
    weekDays: u,
    months: a,
    years: "\u0416\u0438\u043B\u04AF\u04AF\u0434",
    year: "\u0416\u0438\u043B",
    month: "\u0421\u0430\u0440",
    week: "\u0414\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433",
    day: "\u04E8\u0434\u04E9\u0440",
    today: "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440",
    noEvent:
      "\u0422\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B\u0433\u04AF\u0439",
    allDay: "\u0411\u04AF\u0445 \u04E9\u0434\u04E9\u0440",
    deleteEvent: "\u0423\u0441\u0442\u0433\u0430\u0445",
    createEvent:
      "\u0428\u0438\u043D\u044D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B",
    dateFormat: "dddd D MMMM YYYY",
  };
export {
  F as allDay,
  o as createEvent,
  y as dateFormat,
  s as day,
  r as default,
  n as deleteEvent,
  D as month,
  a as months,
  B as noEvent,
  d as today,
  t as week,
  u as weekDays,
  E as year,
  e as years,
};
