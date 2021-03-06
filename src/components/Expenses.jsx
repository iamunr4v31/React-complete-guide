import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className='expenses'>
            {props.expenses.map(
                expense => (<ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>)
                )}
        </div>
    );
};

export default Expenses;