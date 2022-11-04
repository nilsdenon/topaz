const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL as string;

async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getLatestPosts() {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              id
              title
              excerpt
            }
          }
        }
      }
    `
  );

  return data?.posts;
}

// export async function getAllPagesWithSlugs() {
//   const data = await fetchAPI(`
//   {
//     pages(first: 10000) {
//       edges {
//         node {
//           slug
//         }
//       }
//     }
//   }
//   `);
//   return data?.pages;
// }

// export async function getPageBySlug(slug: any) {
//   const data = await fetchAPI(`
//   {
//     page(id: "${slug}", idType: URI) {
//       title
//       content
//     }
//   }
//   `);
//   return data?.page;
// }

export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  return data?.menus?.nodes[0];
}