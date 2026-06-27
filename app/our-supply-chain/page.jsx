import { getApi } from '@/api';
import TopBanner from '@/components/global-supply/TopBanner';
import BangladeshDivisionMap from '@/components/global-supply/BangladeshDivisionMap';


export async function metadata()  {
    const apiValue='our-supply-chain'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==='inner_banner');


    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Our Supply chain - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Contact - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "" }`,
            images: [
                {
                    url: `${banner?.images?.list?.[0]?.full_path ? banner?.images?.list?.[0]?.full_path : ''}`,
                    alt: `${getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : ''}`,
                },
            ],
        },
    }
}

export default async function MyComponent() {
    const apiValue = "our-supply-chain";
    const data = await getApi(apiValue);
    const banner=data?.data?.sections?.find((element)=>element?.section_data?.template==='inner_banner');

    return (
      <>
      <TopBanner data={banner}/>
      <BangladeshDivisionMap />
      </>
    );
};
