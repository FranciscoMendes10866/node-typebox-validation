import { Type, Static } from "@sinclair/typebox";

export const profileSchema = Type.Object({
  firstName: Type.String(),
  lastName: Type.String(),
  age: Type.Integer(),
});

export type ProfileSchemaType = Static<typeof profileSchema>;
