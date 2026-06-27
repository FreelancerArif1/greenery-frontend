import { getApi } from '@/api';
import Testing from "@/components/Testing";


export async function metadata()  {
    const apiValue='about-page'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="about_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Components - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || 'With over 25 years of experience and dozens of successful projects across Dhaka, we combine innovative design, superior craftsmanship, and meticulous planning to deliver spaces that stand the test of time.'}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Components - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "With over 25 years of experience and dozens of successful projects across Dhaka, we combine innovative design, superior craftsmanship, and meticulous planning to deliver spaces that stand the test of time." }`,
            images: [
                {
                    url: `${banner?.images?.list?.[0]?.full_path}`,
                    alt: `${getData?.data?.page_data?.meta_title}`,
                },
            ],
        },
        // alternates: {
        //     canonical: `https://www.basicbuildersltd.com/about-us`,
        // },
    }
}

export default async function MyComponent() {
    const apiValue = "about-page";
    const data = await getApi(apiValue);


    return (
        <>
            <Testing/>

        </>
    );
};
