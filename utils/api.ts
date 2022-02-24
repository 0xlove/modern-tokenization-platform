export function getStrapiURL(path: string): string {  
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/${path}`;
  
  return apiUrl;
}

export function getStrapiMedia(url: string): string | null {
  if (url == null) {

    return null;
  }
  if (url.startsWith('http') || url.startsWith('//')) {

    return url;
  }

  return `${process.env.STRAPI_MEDIA_URL || 'http://localhost:1337'}${url}`;
}

export function redirectToHomepage(): {
  redirect: {
    destination: string;
    permanet: boolean;
}} {
  return {
    redirect: {
      destination: '/',
      permanet: false,
    },
  };
}

