type User = {
  id: number;
  name: string;
};

declare namespace App {
  interface Locals {
    user: User;
    welcomeTitle: () => string;
    orders: { id: string; items: string[] }[];
    session: import("./lib/server/session").Session | null;
  }
}
