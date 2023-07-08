import { it, vi, expect } from "vitest";
import promiseReject from "../../content/foundation/promiseReject";

it("Wraps a value in a rejected promise", async () => {
  const resolve = vi.fn();
  const reject = vi.fn();

  const promise = promiseReject("A").then(resolve, reject);

  await promise;

  expect(resolve).not.toHaveBeenCalled();
  expect(reject).toHaveBeenCalledWith("A");
  expect(reject).toHaveBeenCalledTimes(1);
});