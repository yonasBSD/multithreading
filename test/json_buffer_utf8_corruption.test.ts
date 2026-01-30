import { assertEquals } from "@std/assert";
import { SharedJsonBuffer } from "../src/deno/lib.ts";

Deno.test("UTF-8 Corruption: Short strings with multi-byte chars", () => {
  const input = {
    text: "Héllö 👋", // 'é' is 2 bytes, 'ö' is 2 bytes, '👋' is 4 bytes
  };

  const buffer = new SharedJsonBuffer(input);
  const output = buffer.text;

  assertEquals(output, "Héllö 👋");
});
