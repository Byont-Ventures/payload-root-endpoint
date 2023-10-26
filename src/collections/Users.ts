import { Endpoint } from "payload/config";
import { CollectionConfig } from "payload/types";

export const myEndpoint: Endpoint = {
  path: "/foo",
  method: "post",
  root: true,
  handler: [
    (req, res, next) => {
      res.send("baz");
    },
  ],
};

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  endpoints: [myEndpoint],
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
