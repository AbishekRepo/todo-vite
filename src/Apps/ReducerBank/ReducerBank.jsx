import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  credit: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: state.balance + 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance > 0 ? state.balance - 50 : 0 };
    case "reqLoan":
      if (state.credit >= 500) {
        return { ...state };
      }
      return {
        ...state,
        credit: state.credit + 500,
        balance: state.balance + 500,
      };
    case "payLoan":
      if (state.balance > state.credit) {
        return { ...state, credit: 0, balance: state.balance - state.credit };
      }
      return { ...state };
    case "closeAccount":
      if (state.balance == 0 && state.credit == 0) {
        return initialState;
      }
      return { ...state };
    default:
      return state;
  }
}

const ReducerBank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <h1>Use Reducer Practice</h1>
      <p>
        Balance <span>{state.balance}</span>
      </p>
      <p>
        Loan <span>{state.credit}</span>
      </p>
      <div className="account-btns">
        <button
          className="open-account"
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={state.isActive}
        >
          Open Account
        </button>
        <button
          className="deposit"
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!state.isActive}
        >
          Deposit 150
        </button>
        <button
          className="withdraw"
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!state.isActive}
        >
          withdraw 50
        </button>
        <button
          className="request-loan"
          onClick={() => dispatch({ type: "reqLoan" })}
          disabled={!state.isActive}
        >
          Request for Loan of 5000
        </button>
        <button
          className="pay-loan"
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!state.isActive}
        >
          Pay Loan
        </button>
        <button
          className="close-account"
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!state.isActive}
        >
          Close account
        </button>
      </div>
    </div>
  );
};

export default ReducerBank;
