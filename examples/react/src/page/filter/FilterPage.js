// import React from 'react'
// import { FilterButton  } from 'react-ui'
// // import DateFnsUtils from '@date-io/date-fns'

// export default function FilterPage() {
//   const listFilter = [
//     {
//       name: 'Status',
//       fieldName: 'status',
//       type: 'checkbox',
//       options: {
//         list: [
//           // contoh dari list yang enggak ngefetch
//           {value: 1, label: 'Waiting'}, // penamaan key harus value dan label
//           {value: 2, label: 'Approved'},
//           {value: 3, label: 'Rejected'},
//           {value: 4, label: 'Cancelled'},
//           {
//             value: 5,
//             label:
//               'Test style menggunakan label dengan nama yang panjang, Test ',
//           },
//           {
//             value: 6,
//             label:
//               'Test style menggunakan label dengan nama yang panjang, Testngan nama yang panjang, Test ',
//           },
//           {value: 7, label: 'Test style menggunakan labeng, Test '},
//           {
//             value: 8,
//             label: 'Test style menggunakan laestngan nama yang panjang, Test ',
//           },
//         ],
//       },
//     },
//     {
//       name: 'Date', // REQUIRED
//       fieldName: 'date', // REQUIRED => unique
//       type: 'date', // REQUIRED
//     },
//     {
//       name: 'Age', // REQUIRED
//       fieldName: 'age', // REQUIRED => unique
//       type: 'age', // REQUIRED
//       min: 0, // REQUIRED
//       max: 70, // REQUIRED
//     },
//     {
//       name: 'Salary', // REQUIRED
//       fieldName: 'salary', // REQUIRED => unique
//       type: 'salary', // REQUIRED
//       min: 0, // REQUIRED
//       max: 1000000, // REQUIRED
//     },
//   ]
  
//   const handleApply = result => {
//     console.log('result : ', result)
//   }

//   const anchorOrigin = {
//     vertical: 'bottom',
//     horizontal: 'right',
//   }
//   const transformOrigin = {
//     vertical: 'top',
//     horizontal: 'right',
//   }

//   return (
//     <div>
//       <Filter
//         anchorOrigin={anchorOrigin} // OPTIONAL || see  https://material-ui.com/components/popover/#anchor-playground
//         transformOrigin={transformOrigin} // OPTIONAL || see  https://material-ui.com/components/popover/#anchor-playground
//         id="filter-wlb" // REQUIRED, Unique value
//         onApply={handleApply} // REQUIRED
//         listFilter={listFilter} // REQUIRED
//       >
//         {/* REQUIRED => ReactNode */}
//         <div color="primary" variant="contained">
//           Advance Filter
//         </div>
//       </Filter>
//     </div>
//   )
// }
