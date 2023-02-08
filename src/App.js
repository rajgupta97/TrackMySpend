import { useState } from "react";
import "./App.css";
import NewExpenseComponent from "./components/Expenses/NewExpenseComponent";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
function App() {
  const [expeses, setexpeses] = useState([
    {
      id: "e1",
      title: "PS5",
      cost: "$500",
      date: new Date(),
    },
    {
      id: "e2",
      title: "Dualsense X",
      cost: "$200",
      date: new Date(),
    },
  ]);

  const addExpenseHandler = (receivedData) => {
    setexpeses((prevExpenses) => [receivedData, ...prevExpenses]);

    console.log(receivedData);
  };
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <NewExpenseComponent data={expeses} />
    </div>
  );
}

export default App;
