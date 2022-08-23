import { resumeTotal } from "../resume";

test("object checkout sum value and qty", () => {
  expect(
    resumeTotal({
      products: [
        // 138.4
        {
          description: "any description here",
          id: 2,
          image: "any src image here",
          note: "any note here",
          price: 34.6,
          qty: 4,
          title: "any title here",
        },
        {
          description: "any other description here",
          id: 1,
          image: "any other src image here",
          note: "any other note here",
          price: 233.54, // 2101.86
          qty: 9,
          title: "any other title here",
        },
        {
          description: "any other other description here",
          id: 7,
          image: "any other other src image here",
          note: "any other other note here",
          price: 366.7, // 1466.8
          qty: 4,
          title: "any title here",
        },
      ],
    })
  ).toEqual({ subTotal: 3707.06, products: 3 });
});
