export type LiturgicalSeason = "advent" | "christmas" | "lent" | "easter" | "ordinary";

export type LiturgicalColor = "violet" | "white" | "green" | "red" | "rose";

export type LiturgicalInfo = {
  name: string;
  season: LiturgicalSeason;
  color: LiturgicalColor;
};

function daysFromEpoch(date: Date): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

function addDays(date: Date, days: number): Date {
  const result = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

/**
 * Easter Sunday via the anonymous Gregorian computus algorithm
 * (Meeus/Jones/Butcher). Accurate for the Gregorian calendar.
 */
function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

/** The Sunday on or before the given date. */
function sundayOnOrBefore(date: Date): Date {
  const weekday = date.getUTCDay();
  return addDays(date, -weekday);
}

function isSameDay(dayNumber: number, date: Date): boolean {
  return dayNumber === daysFromEpoch(date);
}

/**
 * Approximate liturgical color/season for a given date. This is a decorative
 * best-effort calculation (used for a site accent, not liturgical
 * scheduling), not an authoritative Church calendar: it does not account
 * for movable solemnities (Trinity Sunday, Christ the King, saints' days),
 * local calendars, or the exact end of the Christmas season (Baptism of the
 * Lord), which is fixed here at Jan 6.
 */
export function getLiturgicalInfo(date: Date = new Date()): LiturgicalInfo {
  const year = date.getFullYear();
  const today = daysFromEpoch(date);

  const christmas = new Date(Date.UTC(year, 11, 25));
  const adventStart = sundayOnOrBefore(addDays(christmas, -21));
  const epiphany = new Date(Date.UTC(year, 0, 6));

  const easter = easterSunday(year);
  const ashWednesday = addDays(easter, -46);
  const pentecost = addDays(easter, 49);
  const palmSunday = addDays(easter, -7);
  const goodFriday = addDays(easter, -2);
  const gaudeteSunday = addDays(adventStart, 14);
  const laetareSunday = addDays(ashWednesday, 25);

  // Tail end of the Christmas season that began on Dec 25 of the prior year.
  if (today <= daysFromEpoch(epiphany) || today >= daysFromEpoch(christmas)) {
    return { name: "Christmas", season: "christmas", color: "white" };
  }

  if (today >= daysFromEpoch(ashWednesday) && today < daysFromEpoch(easter)) {
    if (isSameDay(today, palmSunday)) {
      return { name: "Palm Sunday", season: "lent", color: "red" };
    }
    if (isSameDay(today, goodFriday)) {
      return { name: "Good Friday", season: "lent", color: "red" };
    }
    if (isSameDay(today, laetareSunday)) {
      return { name: "Laetare Sunday", season: "lent", color: "rose" };
    }
    return { name: "Lent", season: "lent", color: "violet" };
  }

  if (today >= daysFromEpoch(easter) && today <= daysFromEpoch(pentecost)) {
    if (isSameDay(today, pentecost)) {
      return { name: "Pentecost", season: "easter", color: "red" };
    }
    return { name: "Easter", season: "easter", color: "white" };
  }

  if (today >= daysFromEpoch(adventStart)) {
    if (isSameDay(today, gaudeteSunday)) {
      return { name: "Gaudete Sunday", season: "advent", color: "rose" };
    }
    return { name: "Advent", season: "advent", color: "violet" };
  }

  return { name: "Ordinary Time", season: "ordinary", color: "green" };
}
