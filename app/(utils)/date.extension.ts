const dateFormat = (date: Date, mask?: string, utc: boolean = false) => {
  const token =
    /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
  const timeZone =
    /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  const timezoneClip = /[^-+\dA-Z]/g;
  const pad = (val: string | number, len?: number) => {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
  };
  return function (date: Date, mask?: string, utc: boolean = false) {
    const dF = dateFormat;

    mask = mask
      ? dF.masks[mask]
        ? String(dF.masks[mask])
        : mask
      : dF.masks["default"];

    if (mask.slice(0, 4) == "UTC:") {
      mask = mask.slice(4);
      utc = true;
    }

    const _: string = utc ? "getUTC" : "get";
    const d = date[utc ? "getUTCDate" : "getDate"]();
    const D = date[utc ? "getUTCDay" : "getDay"]();
    const m = date[utc ? "getUTCMonth" : "getMonth"]();
    const y = date[utc ? "getUTCFullYear" : "getFullYear"]();
    const H = date[utc ? "getUTCHours" : "getHours"]();
    const M = date[utc ? "getUTCMinutes" : "getMinutes"]();
    const s = date[utc ? "getUTCSeconds" : "getSeconds"]();
    const L = date[utc ? "getUTCMilliseconds" : "getMilliseconds"]();
    const o = utc ? 0 : date.getTimezoneOffset();
    const flags: { [key: string]: string } = {
      d: String(d),
      dd: pad(d),
      ddd: dF.i18n.dayNames[D],
      dddd: dF.i18n.dayNames[D + 7],
      m: String(m + 1),
      mm: pad(m + 1),
      mmm: dF.i18n.monthNames[m],
      mmmm: dF.i18n.monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: String(y),
      h: String(H % 12 || 12),
      hh: pad(H % 12 || 12),
      H: String(H),
      HH: pad(H),
      M: String(M),
      MM: pad(M),
      s: String(s),
      ss: pad(s),
      l: pad(L, 3),
      L: pad(L > 99 ? Math.round(L / 10) : L),
      t: H < 12 ? "a" : "p",
      tt: H < 12 ? "am" : "pm",
      T: H < 12 ? "A" : "P",
      TT: H < 12 ? "AM" : "PM",
      Z: String(
        utc
          ? "UTC"
          : /* c8 ignore next */
            (String(date).match(timeZone) || [""])
              .pop()!
              .replace(timezoneClip, ""),
      ),
      o:
        (o > 0 ? "-" : "+") +
        pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
      S: ["th", "st", "nd", "rd"][
        /* c8 ignore next */
        d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10 ? 1 : 0) * d) % 10
      ],
    };

    /* c8 ignore start */
    return mask.replace(token, ($0: string) => {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
    /* c8 ignore end */
  };
};

dateFormat.masks = {
  default: "ddd mmm dd yyyy HH:MM:ss",
  shortDate: "m/d/yy",
  mediumDate: "mmm d, yyyy",
  longDate: "mmmm d, yyyy",
  fullDate: "dddd, mmmm d, yyyy",
  shortTime: "h:MM TT",
  mediumTime: "h:MM:ss TT",
  longTime: "h:MM:ss TT Z",
  isoDate: "yyyy-mm-dd",
  isoTime: "HH:MM:ss",
  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
  monthYear: "mmm yyyy",
} as { [key: string]: string };

dateFormat.i18n = {
  dayNames: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  monthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

Date.prototype.format = function (mask?: string, utc: boolean = false) {
  return dateFormat(this, mask, utc)(this, mask, utc);
};
