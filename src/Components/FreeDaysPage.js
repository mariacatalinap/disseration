// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FreeDaysReport = () => {
//   const [reportData, setReportData] = useState(null);

//   useEffect(() => {
//     // Aici ar fi logica pentru a prelua datele raportului de la backend
//     const fetchReportData = async () => {
//       try {
//         const response = await axios.get('/api/free-days-report');
//         setReportData(response.data);
//       } catch (error) {
//         console.error("Eroare la preluarea datelor raportului", error);
//       }
//     };

//     fetchReportData();
//   }, []);

//   return (
//     <div>
//       <h2>Raport Zile Libere</h2>
//       {/* Aici ar fi logica pentru a afișa datele raportului */}
//       {reportData ? (
//         <div>
//           {/* Exemplu de afișare a datelor raportului */}
//           <p>Zile legale libere anul acesta: {reportData.legalFreeDays}</p>
//           <p>Zile libere asigurate de angajator: {reportData.employerProvidedFreeDays}</p>
//         </div>
//       ) : (
//         <p>Se încarcă datele raportului...</p>
//       )}
//     </div>
//   );
// };

// export default FreeDaysReport;