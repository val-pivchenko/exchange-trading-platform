import { it, expect, describe, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import OrderBook from "../components/OrderBook";

describe("OrderBook component", () => {
  beforeEach(() => {
    // Any setup can be done here
  });

  afterEach(() => {
    // Cleanup after each test
    cleanup();
  });

  it("should render 'No Orders Yet' text when there are 0 orders", () => {
    render(
      <Provider store={store}>
        <OrderBook />
      </Provider>
    );

    const element = screen.getByText(/No Orders Yet/i);
    expect(element).toBeInTheDocument();
  });
});
