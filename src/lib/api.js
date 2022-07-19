// import { GraphQLClient } from "graphql-request";

// export const graphcms = new GraphQLClient(
//   "https://api-sa-east-1.hygraph.com/v2/cl5i4symm02cx01tafu7a2cf8/master"
// );

// export async function getContato() {
//   const query = `
//   `;

//   const { contatoes } = await graphcms.request(query);

//   return contatoes[0];
// }

// export async function getSeo() {
//   const query = `
//   `;

//   const { seos } = await graphcms.request(query);

//   return seos[0];
// }

// export async function getSite() {
//   const query = `
//   `;

//   const { sites } = await graphcms.request(query);

//   return sites[0];
// }

// export async function getDocs() {
//   const query = `
//     query Docs {
//       documentosLegais {
//         slug
//         titulo
//         texto {
//           markdown
//         }
//       }
//     }
//   `;

//   const { documentosLegais } = await graphcms.request(query);

//   return documentosLegais;
// }

// export async function getEmail() {
//   const query = `
//     query Email {
//       contatoes(first: 1) {
//         emailFormulario
//       }
//     }
//   `;

//   const { contatoes } = await graphcms.request(query);

//   return contatoes[0];
// }
