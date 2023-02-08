import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";
const ExpensesList = (props) => {
  //conditional rendering
  //console.log("Expense List", props);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.title}
          date={expense.date}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
