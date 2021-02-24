import { DayT, EntryT, UserT } from "../../../types";
import { Request, Response } from "miragejs";

import dayjs from "dayjs";
import { handleErrors } from "../server";

export const dayRoutes = {
  createDay: (
    schema: any,
    req: Request
  ): { user: UserT; day: DayT } | Response => {
    try {
      const { title, type, userId } = JSON.parse(
        req.requestBody
      ) as Partial<DayT>;
      const exUser = schema.users.findBy({ id: userId });
      if (!exUser) {
        return handleErrors(null, "No such user exists.");
      }
      const now = dayjs().format();
      const day = exUser.createDay({
        title,
        type,
        createdAt: now,
        updatedAt: now,
      });
      return {
        user: {
          ...exUser.attrs,
        },
        day: day.attrs,
      };
    } catch (error) {
      return handleErrors(error, "Failed to create the requested day.");
    }
  },

  updateDay: (schema: any, req: Request): DayT | Response => {
    try {
      const day = schema.day.find(req.params.id);
      const data = JSON.parse(req.requestBody) as Partial<DayT>;
      const now = dayjs().format();
      day.update({
        ...data,
        updatedAt: now,
      });
      return day.attrs as DayT;
    } catch (error) {
      return handleErrors(error, "Failed to update the requested day.");
    }
  },

  getDay: (schema: any, req: Request): DayT[] | Response => {
    try {
      const user = schema.users.find(req.params.id);
      return user.day as DayT[];
    } catch (error) {
      return handleErrors(error, "Could not get data for the requested days.");
    }
  },

  createEntry: (
    schema: any,
    req: Request
  ): { day: DayT; entry: EntryT } | Response => {
    try {
      const day = schema.days.find(req.params.id);
      const { title, content } = JSON.parse(req.requestBody) as Partial<EntryT>;
      const now = dayjs().format();
      const entry = day.createEntry({
        title,
        content,
        createdAt: now,
        updatedAt: now,
      });
      day.update({
        ...day.attrs,
        updatedAt: now,
      });
      return {
        day: day.attrs,
        entry: entry.attrs,
      };
    } catch (error) {
      return handleErrors(error, "Failed to save the entry.");
    }
  },

  getEntries: (schema: any, req: Request): { entries: EntryT[] } | Response => {
    try {
      const day = schema.days.find(req.params.id);
      return day.entry;
    } catch (error) {
      return handleErrors(error, "Failed to get Day entries.");
    }
  },

  updateEntry: (schema: any, req: Request): EntryT | Response => {
    try {
      const entry = schema.entries.find(req.params.id);
      const data = JSON.parse(req.requestBody) as Partial<EntryT>;
      const now = dayjs().format();
      entry.update({
        ...data,
        updatedAt: now,
      });
      return entry.attrs as EntryT;
    } catch (error) {
      return handleErrors(error, "Failed to update the entry.");
    }
  },
};
