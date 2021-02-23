import { Factory, Model, Response, Server, belongsTo, hasMany } from "miragejs";

import dayRoutes from "./routes/day.routes";
import userRoutes from "./routes/user.routes";

export const handleErrors = (error: any, message = "An error ocurred") => {
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export const setupServer = (env?: string): Server => {
  return new Server({
    environment: env ?? "development",

    models: {
      entry: Model.extend({
        day: belongsTo(),
      }),
      day: Model.extend({
        entry: hasMany(),
        user: belongsTo(),
      }),
      user: Model.extend({
        day: hasMany(),
      }),
    },

    factories: {
      user: Factory.extend({
        username: "test",
        password: "password",
        email: "test@email.com",
      }),
    },

    seeds: (server): any => {
      server.create("user");
    },

    routes(): void {
      this.urlPrefix = "https://diary.app";

      this.get("/days/entries/:id", dayRoutes.getEntries);
      this.get("/days/:id", dayRoutes.getDay);

      this.post("/auth/login", userRoutes.login);
      this.post("/auth/signup", userRoutes.signup);

      this.post("/days/", dayRoutes.createDay);
      this.post("/days/entry/:id", dayRoutes.createEntry);

      this.put("/days/entry/:id", dayRoutes.updateEntry);
      this.put("/days/:id", dayRoutes.updateDay);
    },
  });
};
