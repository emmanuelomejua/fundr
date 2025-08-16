import { configureStore } from "@reduxjs/toolkit";
import transactionReducer, { getTransactions } from "./transactionSlice";
import { transactionData } from "@/data/transactionData";

describe("transactionSlice", () => {
  it("should handle loading and success when fetching transactions", async () => {
    const store = configureStore({
      reducer: { transactions: transactionReducer },
    });

    // Initial state
    let state = store.getState().transactions;
    expect(state.loading).toBe(false);
    expect(state.data).toEqual([]);

    // Dispatch async thunk
    const actionPromise = store.dispatch(getTransactions());

    // State while pending
    state = store.getState().transactions;
    expect(state.loading).toBe(true);

    // Wait for async thunk to finish
    await actionPromise;

    // Final state
    state = store.getState().transactions;
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(transactionData);
    expect(state.error).toBeNull();
  });

  it("should handle rejected case", async () => {
    // Create a mock failing thunk
    const failingThunk = getTransactions.rejected(
      { message: "Network error" } as any,
      "requestId123"
    );

    const store = configureStore({
      reducer: { transactions: transactionReducer },
    });

    // Manually dispatch rejected action
    store.dispatch(failingThunk);

    const state = store.getState().transactions;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Network error");
  });
});
