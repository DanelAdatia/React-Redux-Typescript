import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import { Action } from "../actions";

export const MoneyDeposit = (total: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: total,
    });
  };
};

export const MoneyWithdraw = (total: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: total,
    });
  };
};

export const MoneyBankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
