import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "./state";
import { State } from "./state/reducers";

function App() {
  const dispatch = useDispatch();

  const { MoneyDeposit, MoneyWithdraw, MoneyBankrupt } = bindActionCreators(
    actionCreaters,
    dispatch
  );

  const total = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{total}</h1>
      <button onClick={() => MoneyDeposit(5000)}>Deposit</button>
      <button onClick={() => MoneyWithdraw(1500)}>Withdraw</button>
      <button onClick={() => MoneyBankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
