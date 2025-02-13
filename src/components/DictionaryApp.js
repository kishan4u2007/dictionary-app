// import React, { useState } from "react";
// import {
//   Container,
//   TextInput,
//   Button,
//   Loader,
//   Card,
//   Text,
//   List,
//   Title,
//   Flex,
// } from "@mantine/core";
// import "./DictionaryApp.css";

// const DictionaryApp = () => {
//   const [word, setWord] = useState("");
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchWordDefinition = async () => {
//     if (!word.trim()) return;
//     setLoading(true);
//     setError(null);
//     setData(null);
//     try {
//       const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//       const result = await response.json();
//       if (response.ok) {
//         setData(result[0]);
//       } else {
//         setError(result.message || "Word not found");
//       }
//     } catch (err) {
//       setError("Failed to fetch data. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <Container size="sm" my={50} className="dictionary-container">
//       <Title order={2} align="center" mb="lg">
//         Dictionary Lookup
//       </Title>

//       <Flex gap="md" align="center" justify="center" className="search-container">
//         <TextInput
//           className="search-box"
//           placeholder="Enter a word"
//           value={word}
//           onChange={(event) => setWord(event.currentTarget.value)}
//         />
//         <Button onClick={fetchWordDefinition} disabled={loading}>
//           Search
//         </Button>
//       </Flex>

//       {loading && <Loader className="loader" size="lg" color="blue" />}

//       {error && <Text color="red" className="error-text">{error}</Text>}

//       {data && (
//         <Card shadow="sm" padding="lg" mt={20} className="definition-card">
//           <Text size="xl" weight={700} className="word-title">{data.word}</Text>
//           {data.phonetics?.map((phonetic, index) => (
//             <Text key={index} italic className="phonetics-text">
//               {phonetic.text}
//               {phonetic.audio && <audio controls src={phonetic.audio} className="audio-player" />}
//             </Text>
//           ))}
//           {data.origin && <Text mt={10} className="word-origin">Origin: {data.origin}</Text>}
//           <List spacing="sm" mt={10} className="meanings-list">
//             {data.meanings?.map((meaning, index) => (
//               <List.Item key={index} className="meaning-item">
//                 <Text weight={600} className="part-of-speech">{meaning.partOfSpeech}</Text>
//                 <List withPadding>
//                   {meaning.definitions.map((def, idx) => (
//                     <List.Item key={idx} className="definition-text">{def.definition}</List.Item>
//                   ))}
//                 </List>
//               </List.Item>
//             ))}
//           </List>
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default DictionaryApp;
