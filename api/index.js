//common api

export async function getApi(param) {
  const response = await fetch(
    `https://bestinbd.com/2510GES/api/get-req-data/sections?type=slug&value=${param}&get_section=yes&image=yes&post=yes&file=yes&gallery=no`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getProjectDetailApi(param) {
  const response = await fetch(
    `https://bestinbd.com/2510GES/api/get-req-data/product-data?type=slug&value=${param}&image=yes&post=yes&file=yes`,
    {
      next: {
        revalidate: 60, // Cache for 5 minutes
        tags: [`project-${param}`],
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getEventsDetailsApi(slug) {
  const response = await fetch(
      `https://bestinbd.com/2510GES/api/get-req-data/blog-data?type=slug&value=${slug}`,
      {
        cache:"no-store"
      }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

//child page api
export async function getChildPage(pageId) {
  const response = await fetch(
    `https://dcfix.dcastalia.com/2509BBL/api/get-req-data/child-pages?page_id=${pageId}&image=yes&post=yes&file=yes&gallery=yes&sections=yes`,
    {
      cache: 'no-store',
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data;
}

//product page api
export async function getProductPage() {
  const response = await fetch(
    `https://dcfix.dcastalia.com/2509BBL/api/get-req-data/all-products?image=yes&post=yes&file=yes&specification=yes&gallery=yes&variation=yes&limit=`,
    {
      cache: 'no-store',
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data;
}


//global data api
export async function fetchGlobalData() {
  const res = await fetch('https://dcfix.dcastalia.com/2509BBL/api/get-req-data/settings-data',
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch global data');
  }
  return res.json();
}
