import  { useState } from "react";

const VisitorForm = () => {
  const [visitor, setVisitor] = useState({
    name: "",
    contactNumber: "",
    email: "",
    purpose: "",
    companyName: "",
    entryTime: "",
  });

  const purposes = ["Meeting", "Delivery", "Interview", "Consultation"];
  const companies = ["Acme Corp", "Globex Inc", "Initech", "Umbrella Corp"];

  const handleChange = (e: any) => {
    setVisitor({ ...visitor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Simple input validation (expand as needed)
    if (!/^[a-zA-Z\s]+$/.test(visitor.name)) {
      alert("Invalid name");
      return;
    }
    if (!/^\d{10}$/.test(visitor.contactNumber)) {
      alert("Invalid contact number");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(visitor.email)) {
      alert("Invalid email");
      return;
    }

    console.log(visitor);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Visitor Entry Form</h2>

          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={visitor.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Pranav"
              required
            />
          </div>

          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={visitor.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="1234567890"
              required
            />
          </div>

          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={visitor.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="ppranavvvvv918@gmail.com"
              required
            />
          </div>

          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Purpose of Visit
            </label>
            <input
              type="text"
              name="purpose"
              list="purposes"
              value={visitor.purpose}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Select or type..."
            />
            <datalist id="purposes">
              {purposes.map((purpose, index) => (
                <option key={index} value={purpose} />
              ))}
            </datalist>
          </div>

          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company Name (if applicable)
            </label>
            <input
              type="text"
              name="companyName"
              list="companies"
              value={visitor.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Select or type..."
            />
            <datalist id="companies">
              {companies.map((company, index) => (
                <option key={index} value={company} />
              ))}
            </datalist>
          </div>

          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Time of Entry
            </label>
            <input
              type="time"
              name="entryTime"
              value={visitor.entryTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisitorForm;
