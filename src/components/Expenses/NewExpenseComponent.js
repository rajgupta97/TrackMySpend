import { useState } from "react";
import ExpensesList from "./NewExpense/ExpensesList";
import "./NewExpenseComponent.css";
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function NewExpenseComponent(props) {
  //console.log(props);
  const DEFAULT_FILTER_VAL = "All";
  const [filterDate, setFilterDate] = useState(DEFAULT_FILTER_VAL);

  const filterDateChangeHandler = (receivedDate) => {
    setFilterDate(receivedDate);
    console.log(receivedDate, filterDate);
  };
  //creating sub obj based on selected YEAR on FILTER component
  const filteredExpense = props.data.filter((exp) => {
    if (filterDate === "All") return true;
    return exp.date.getFullYear().toString() === filterDate;
  });
  // console.log(filteredExpense);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onFilterDateChange={filterDateChangeHandler}
          DEF_VAL={filterDate}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
}

export default NewExpenseComponent;
