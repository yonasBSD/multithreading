import { assertEquals } from "@std/assert";
import { SharedJsonBuffer } from "../src/deno/lib.ts";

Deno.test("Flyweight Iterator Bug", () => {
  const buffer = new SharedJsonBuffer([{ a: 1 }, { a: 2 }]);
  const items = [...buffer]; // Spread calls iterator
  assertEquals(items[0]!.a, 1);
  assertEquals(items[1]!.a, 2);
});
