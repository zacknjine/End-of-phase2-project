import React, { useState, useEffect } from 'react';

const WeeklyExpenses = () => {
  const [expenseType, setExpenseType] = useState('');
  const [amountSpent, setAmountSpent] = useState('');
  const [expenses, setExpenses] = useState([]);

  // Fetch weekly expenses data from the server
  useEffect(() => {
    const fetchWeeklyExpenses = async () => {
      try {
        const response = await fetch("http://localhost:3002/weekly_expense");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching weekly expenses:", error);
      }
    };

    fetchWeeklyExpenses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Expense Type: ${expenseType}, Amount Spent: ${amountSpent}`);

    fetch('http://localhost:3002/weekly_expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ expense_type: expenseType, amount_spent: amountSpent }),
    })
    .then(response => response.json())
    .then(data => {
      setExpenses([...expenses, data]); // Update expenses with the new data
    })
    .catch(error => console.error(error));

    setExpenseType('');
    setAmountSpent('');
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/weekly_expense/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the deleted expense from the state
      setExpenses(expenses.filter(expense => expense.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 space-y-4">
        <input
          type="text"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          placeholder="Expense Type"
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="number"
          value={amountSpent}
          onChange={(e) => setAmountSpent(e.target.value)}
          placeholder="Amount Spent"
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>

      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-2">Weekly Expenses</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Expense Type</th>
              <th className="p-2">Amount Spent</th>
              <th className="p-2">Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id} className="border-t">
                  <td className="p-2">{expense.expense_type}</td>
                  <td className="p-2">{expense.amount_spent}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(expense.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td> {/* Action column with delete button */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-center">No expenses data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyExpenses;
