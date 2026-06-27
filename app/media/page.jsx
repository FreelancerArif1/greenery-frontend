import { getApi, getChildPage } from '@/api';
import InnerBanner from '@/components/common/InnerBanner';
import MediaContainer from '@/components/media/MediaContainer';


export async function metadata()  {
    const apiValue='news-events'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Media - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Media - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "" }`,
            images: [
                {
                    url: `${banner?.images?.list?.[0]?.full_path}`,
                    alt: `${getData?.data?.page_data?.meta_title}`,
                },
            ],
        },
        // alternates: {
        //     canonical: `https://www.basicbuildersltd.com/media`,
        // },
    }
}

export default async function MyComponent() {
    const apiValue = "news-events";
    const data = await getApi(apiValue);

    //data refactor
    const inner_banner=data?.data?.sections?.find((element)=>element?.section_data?.template==='inner_banner');
    const news =data?.data?.news;

    return (
        <>
            <InnerBanner
              data={data}
              title={inner_banner?.section_data?.subtitle}
              img={inner_banner?.images?.list?.[0]?.full_path}
            />
            <MediaContainer data={news}/>
        </>
    );
};
