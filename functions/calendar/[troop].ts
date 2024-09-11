import type { PagesFunction } from "@cloudflare/workers-types";
import { Response } from "@cloudflare/workers-types";

interface Env {}

export const onRequest: PagesFunction<Env> = async (context) => {
  let calendarId: number;

  switch (context.params.troop) {
    case '150':
      calendarId = 10400;
      break;

    case '5150':
      calendarId = 211450;
      break;

    default:
      throw new Error("Invalid troop number");
  }

  return (await fetch(`https://api.scouting.org/advancements/events/calendar/${calendarId}`) as unknown as Response);
};