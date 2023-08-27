import { sum } from "../sum";
test("Sum function should calculate the sum of two numbers", () => {
  // sum(1, 3).tobe(3);
  // const result = sum(3, 4);
  //Assertion
  expect(sum(1, 2)).toBe(4);
});
