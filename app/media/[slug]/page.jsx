import React from "react";
import {getApi, getEventsDetailsApi} from "@/api";
import InnerBanner from '@/components/common/InnerBanner';
import MediaDetails from '@/components/media/MediaDetails';


export async function generateMetadata({params, searchParams}, parent) {
    const getHomeData = await getEventsDetailsApi(params.slug);
    const banner=getHomeData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getHomeData?.data?.page_data?.meta_title ? getHomeData?.data?.page_data?.meta_title : getHomeData?.data?.data?.subtitle}`,
        },
        description: `${getHomeData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getHomeData?.data?.page_data?.og_title ? getHomeData?.data?.page_data?.og_title : getHomeData?.data?.page_data?.meta_title ? getHomeData?.data?.page_data?.title : 'Media>'}`,
            description: `${getHomeData?.data?.page_data?.og_description ? getHomeData?.data?.page_data?.og_description : getHomeData?.data?.page_data?.meta_description?getHomeData?.data?.page_data?.meta_description : ''}`,
            images: [
                {
                    url: `${banner?.images?.list?.[0]?.full_path}`,
                    alt: `${getHomeData?.data?.page_data?.meta_title ? getHomeData?.data?.page_data?.meta_title : getHomeData?.data?.page_data?.title}`,
                },
            ],
        },
        // alternates: {
        //     canonical: `https://www.basicbuildersltd.com/media/${params.slug}`,
        // },
    }

}

export default async function MyComponent({params}) {

    const data = await getEventsDetailsApi(params.slug);

    //
    // //banner
    // const inner_banner=data?.data?.sections?.find((element)=>element?.section_data?.template=="inner_banner");
    // const news_details=data?.data?.sections?.find((e)=>e?.section_data?.template=="news_details");

    return (
        <>
            <InnerBanner
              // data={data?.data}
              title={''}
              img={data?.data?.images?.list?.find((e) => e?.banner === "on")?.full_path}
            />
            <MediaDetails banner={data?.data?.images?.list?.find((e) => e?.banner === "on")?.full_path}
                          data={data}
                          page={data}
                          title={data?.data?.data?.subtitle}/>
        </>
    );
};
