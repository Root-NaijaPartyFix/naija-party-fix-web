// // "use client"; // Ensures it runs only on the client side in Next.js

// // import React, { useState } from "react";
// // import {
// //   Tabs,
// //   Tab,
// //   Box,
// //   Card,
// //   CardContent,
// //   Typography,
// //   CardMedia,
// //   Button,
// // } from "@mui/material";

// // const Datas = [
// //   {
// //     id: 1,
// //     title: "Catering Services For Fabulous Cooperate Events......",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Cooperate Catering Services",
// //   },
// //   {
// //     id: 2,
// //     title: "Planning a wedding menu can be Daunting...",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Decorations",
// //   },
// //   {
// //     id: 3,
// //     title: "Exquisite Appetizers",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Catering Services",
// //   },
// //   {
// //     id: 4,
// //     title: "Sensational Flavor Explosion in One Plate",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Photography",
// //   },
// //   {
// //     id: 5,
// //     title: "Simple and Sophisticated We Have it All",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Photography",
// //   },
// //   {
// //     id: 6,
// //     title: "Catering Services For Fabulous Cooperate Events......",
// //     text: "Our delicacies have been the best over the years with sumptuous meals.",
// //     btn: "Catering",
// //   },
// // ];

// // // Get unique filter categories
// // const categories = ["All", ...new Set(Datas.map((data) => data.btn))];

// // export default function MuiTabsComponent() {
// //   const [selectedFilter, setSelectedFilter] = useState("All");

// //   const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
// //     setSelectedFilter(newValue);
// //   };

// //   const filteredDatas =
// //     selectedFilter === "All"
// //       ? Datas
// //       : Datas.filter((data) => data.btn === selectedFilter);

// //   return (
// //     <Box sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}>
// //       {/* MUI Tabs for Filtering */}
// //       <Tabs
// //         value={selectedFilter}
// //         onChange={handleChange}
// //         variant="scrollable"
// //         scrollButtons="auto"
// //         allowScrollButtonsMobile
// //         aria-label="category tabs"
// //       >
// //         {categories.map((category, index) => (
// //           <Tab key={index} label={category} value={category} />
// //         ))}
// //       </Tabs>

// //       {/* Cards Display */}
// //       <Box
// //         sx={{
// //           display: "grid",
// //           gap: 2,
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           mt: 2,
// //         }}
// //       >
// //         {filteredDatas.map((data, index) => (
// //           <Card key={data.id} sx={{ maxWidth: 345 }}>
// //             <CardMedia
// //               component="img"
// //               height="140"
// //               image={`/images/blog/image-${index + 1}.jpg`}
// //               alt={`Card Image ${index + 1}`}
// //             />
// //             <CardContent>
// //               <Typography variant="h6" gutterBottom>
// //                 {data.title}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary">
// //                 {data.text}
// //               </Typography>
// //               <Button variant="contained" sx={{ mt: 2 }}>
// //                 {data.btn}
// //               </Button>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // }

// "use client"; // Ensures it runs only on the client side in Next.js

// import React, { useState } from "react";
// import {
//   Tabs,
//   Tab,
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Button,
// } from "@mui/material";

// import CardComponent from "~/components/Card";
// const Datas = [
//   {
//     id: 1,
//     title: "Catering Services For Fabulous Cooperate Events......",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Cooperate Catering Services",
//   },
//   {
//     id: 2,
//     title: "Planning a wedding menu can be Daunting...",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Decorations",
//   },
//   {
//     id: 3,
//     title: "Exquisite Appetizers",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Catering Services",
//   },
//   {
//     id: 4,
//     title: "Sensational Flavor Explosion in One Plate",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Photography",
//   },
//   {
//     id: 5,
//     title: "Simple and Sophisticated We Have it All",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Photography",
//   },
//   {
//     id: 6,
//     title: "Catering Services For Fabulous Cooperate Events......",
//     text: "Our delicacies have been the best over the years with sumptuous meals.",
//     btn: "Catering",
//   },
// ];

// // Get unique filter categories
// const categories = ["All", ...new Set(Datas.map((data) => data.btn))];

// export default function MuiTabsComponent() {
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
//     setSelectedFilter(newValue);
//   };

//   const filteredDatas =
//     selectedFilter === "All"
//       ? Datas
//       : Datas.filter((data) => data.btn === selectedFilter);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "background.paper",
//         p: { xs: 1, sm: 2, md: 3 },
//       }}
//     >
//       {/* MUI Tabs for Filtering */}
//       <Box
//         sx={{
//           overflowX: "auto",
//           whiteSpace: "nowrap",
//           maxWidth: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Tabs
//           value={selectedFilter}
//           onChange={handleChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           allowScrollButtonsMobile
//           aria-label="category tabs"
//           sx={{ "& .MuiTabs-flexContainer": { justifyContent: "center" } }}
//         >
//           {categories.map((category, index) => (
//             <Tab
//               key={index}
//               label={category}
//               value={category}
//               sx={{
//                 fontSize: { xs: "12px", sm: "14px" },
//                 px: { xs: 1, sm: 2 },
//               }}
//             />
//           ))}
//         </Tabs>
//       </Box>

//       {/* Cards Display */}
//       <div className="mx-auto mb-bom grid items-center gap-4 px-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
//         <CardComponent selectedFilter={selectedFilter} />
//       </div>
//       {/* <Box
//         sx={{
//           display: "grid",
//           gap: 2,
//           gridTemplateColumns: {
//             xs: "1fr", // 1 column on extra small screens
//             sm: "repeat(2, 1fr)", // 2 columns on small screens
//             md: "repeat(3, 1fr)", // 3 columns on medium screens
//             lg: "repeat(4, 1fr)", // 4 columns on large screens
//           },
//           mt: 2,
//         }}
//       >
//         {filteredDatas.map((data, index) => (
//           <Card key={data.id} sx={{ maxWidth: "100%" }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={`/images/blog/image-${index + 1}.jpg`}
//               alt={`Card Image ${index + 1}`}
//               sx={{ objectFit: "cover" }}
//             />
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 {data.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {data.text}
//               </Typography>
//               <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
//                 {data.btn}
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </Box> */}
//     </Box>
//   );
// }
