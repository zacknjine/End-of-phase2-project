import React, { useState, useEffect } from 'react';

const FarmInputs = () => {
  const [fertiliser, setFertiliser] = useState('');
  const [kgBought, setKgBought] = useState('');
  const [amountBought, setAmountBought] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/farm_inputs');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching farm inputs:", error);
      setError("Failed to fetch farm inputs. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fertiliser || !kgBought || isNaN(kgBought) || !amountBought || isNaN(amountBought) || amountBought <= 0) {
      setError("Please enter valid fertiliser, kg bought, and amount bought.");
      return;
    }

    setError(null); // Clear previous errors

    try {
      const response = await fetch('http://localhost:3002/farm_inputs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fertiliser, kgs_bought: parseFloat(kgBought), amount_bought: parseFloat(amountBought) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newData = await response.json();
      setData([...data, newData]);
      setFertiliser('');
      setKgBought('');
      setAmountBought('');
    } catch (error) {
      console.error("Error submitting farm input:", error);
      setError("Failed to submit farm input. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/farm_inputs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setData(data.filter(entry => entry.id !== id));
    } catch (error) {
      console.error("Error deleting farm input:", error);
      setError("Failed to delete farm input. Please try again later.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={fertiliser}
          onChange={(e) => setFertiliser(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Fertiliser"
        />
        <input
          type="number"
          value={kgBought}
          onChange={(e) => setKgBought(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Kgs Bought"
        />
        <input
          type="number"
          value={amountBought}
          onChange={(e) => setAmountBought(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Amount Bought"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Fertiliser</th>
            <th className="p-2">Kgs Bought</th>
            <th className="p-2">Amount Bought</th>
            <th className="p-2">Actions</th> {/* Added Actions column */}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => (
              <tr key={element.id} className="border-t">
                <td className="p-2">{element.fertiliser}</td>
                <td className="p-2">{element.kgs_bought}</td>
                <td className="p-2">{element.amount_bought}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-2 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FarmInputs;
