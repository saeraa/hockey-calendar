/**
 * vue-cal v4.8.0
 * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
 * @license MIT
 */ const u = [
    "\u062F\u0648\u0634\u0646\u0628\u0647",
    "\u0633\u0647 \u0634\u0646\u0628\u0647",
    "\u0686\u0647\u0627\u0631 \u0634\u0646\u0628\u0647",
    "\u067E\u0646\u062C \u0634\u0646\u0628\u0647",
    "\u062C\u0645\u0639\u0647",
    "\u0634\u0646\u0628\u0647",
    "\u06CC\u06A9 \u0634\u0646\u0628\u0647",
  ],
  C = [
    "\u0698\u0627\u0646\u0648\u06CC\u0647",
    "\u0641\u0648\u0631\u06CC\u0647",
    "\u0645\u0627\u0631\u0633",
    "\u0622\u0648\u0631\u06CC\u0644",
    "\u0645\u06CC",
    "\u0698\u0648\u0626\u0646",
    "\u0698\u0648\u0626\u06CC\u0647",
    "\u0627\u0648\u062A",
    "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
    "\u0627\u06A9\u062A\u0628\u0631",
    "\u0646\u0648\u0627\u0645\u0628\u0631",
    "\u062F\u0633\u0627\u0645\u0628\u0631",
  ],
  a = "\u0633\u0627\u0644\u0647\u0627",
  e = "\u0633\u0627\u0644",
  t = "\u0645\u0627\u0647",
  s = "\u0647\u0641\u062A\u0647",
  d = "\u0631\u0648\u0632",
  n = "\u0627\u0645\u0631\u0648\u0632",
  F = "\u0631\u0648\u06CC\u062F\u0627\u062F\u06CC \u0646\u06CC\u0633\u062A",
  o = "\u062A\u0645\u0627\u0645 \u0631\u0648\u0632",
  y = "\u062D\u0630\u0641",
  A =
    "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F",
  r = "dddd D MMMM YYYY",
  D = {
    weekDays: u,
    months: C,
    years: "\u0633\u0627\u0644\u0647\u0627",
    year: "\u0633\u0627\u0644",
    month: "\u0645\u0627\u0647",
    week: "\u0647\u0641\u062A\u0647",
    day: "\u0631\u0648\u0632",
    today: "\u0627\u0645\u0631\u0648\u0632",
    noEvent:
      "\u0631\u0648\u06CC\u062F\u0627\u062F\u06CC \u0646\u06CC\u0633\u062A",
    allDay: "\u062A\u0645\u0627\u0645 \u0631\u0648\u0632",
    deleteEvent: "\u062D\u0630\u0641",
    createEvent:
      "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F",
    dateFormat: "dddd D MMMM YYYY",
  };
export {
  o as allDay,
  A as createEvent,
  r as dateFormat,
  d as day,
  D as default,
  y as deleteEvent,
  t as month,
  C as months,
  F as noEvent,
  n as today,
  s as week,
  u as weekDays,
  e as year,
  a as years,
};
