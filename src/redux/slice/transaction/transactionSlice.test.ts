import { configureStore } from "@reduxjs/toolkit";
import transactionReducer, { getTransactions } from "./transactionSlice";

// Move mock data INSIDE the jest.mock call
jest.mock("@/data/transactionData", () => ({
  transactionData: [
    { ID: "tx1", amount: 1000, type: "Deposit", date: "2025-08-16", time: "10:00", status: "Processed" },
    { ID: "tx2", amount: 500, type: "Withdrawal", date: "2025-08-16", time: "11:00", status: "Failed" },
  ],
}));

// Import the mock after mocking
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

    // While pending
    state = store.getState().transactions;
    expect(state.loading).toBe(true);

    // Wait for async thunk to finish
    await actionPromise;

    // Final state
    state = store.getState().transactions;
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(transactionData); // uses the mocked one
    expect(state.error).toBeNull();
  });

  it("should handle rejected case manually", () => {
    const store = configureStore({
      reducer: { transactions: transactionReducer },
    });

    // Create a rejected action (simulating failure)
    const rejectedAction = getTransactions.rejected(
      { message: "Network error" } as any,
      "requestId123"
    );

    store.dispatch(rejectedAction);

    const state = store.getState().transactions;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Network error");
  });
});
