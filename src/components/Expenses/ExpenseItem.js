import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate {...props}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
