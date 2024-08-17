import React, { useState, useEffect } from 'react';

const WeeklyKilos = () => {
  const [kilosSold, setKilosSold] = useState('');
  const [kilosRejected, setKilosRejected] = useState('');
  const [kilosData, setKilosData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch weekly kilos data from the server
  useEffect(() => {
    const fetchWeeklyKilos = async () => {
      try {
        const response = await fetch("http://localhost:3002/weekly_kilos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setKilosData(data);
      } catch (error) {
        console.error("Error fetching weekly kilos:", error);
        setError("Failed to fetch weekly kilos. Please try again later.");
      }
    };

    fetchWeeklyKilos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(kilosSold) || isNaN(kilosRejected) || kilosSold < 0 || kilosRejected < 0) {
      setError("Please enter valid kilos sold and kilos rejected.");
      return;
    }

    setError(null); // Clear previous errors

    try {
      const response = await fetch('http://localhost:3002/weekly_kilos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kilos_rejected: parseFloat(kilosRejected), kilos_sold: parseFloat(kilosSold) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newData = await response.json();
      setKilosData([...kilosData, newData]);
      setKilosSold('');
      setKilosRejected('');
    } catch (error) {
      console.error("Error submitting weekly kilos:", error);
      setError("Failed to submit weekly kilos. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/weekly_kilos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setKilosData(kilosData.filter(entry => entry.id !== id));
    } catch (error) {
      console.error("Error deleting weekly kilos:", error);
      setError("Failed to delete weekly kilos. Please try again later.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="number"
          value={kilosSold}
          onChange={(e) => setKilosSold(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Kilos Sold"
        />
        <input
          type="number"
          value={kilosRejected}
          onChange={(e) => setKilosRejected(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Kilos Rejected"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>

      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Weekly Kilos</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Kilos Sold</th>
              <th className="p-2">Kilos Rejected</th>
              <th className="p-2">Actions</th> {/* Added Actions column */}
            </tr>
          </thead>
          <tbody>
            {kilosData.length > 0 ? (
              kilosData.map((kilo) => (
                <tr key={kilo.id} className="border-t">
                  <td className="p-2">{kilo.kilos_sold}</td>
                  <td className="p-2">{kilo.kilos_rejected}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(kilo.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-center">No kilos data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyKilos;
