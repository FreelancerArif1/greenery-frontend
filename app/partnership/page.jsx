import { getApi } from '@/api';
import LogoBox from "@/components/common/LogoBox";
import PartnerForm from "@/components/partnership/PartnerForm";


export async function metadata()  {
    const apiValue='partnership-page'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Partnership - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Partnership - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "" }`,
            images: [
                {
                    url: `${banner?.images?.list?.[0]?.full_path ? banner?.images?.list?.[0]?.full_path : ''}`,
                    alt: `${getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : ''}`,
                },
            ],
        },
        // alternates: {
        //     canonical: `https://www.basicbuildersltd.com/about-us`,
        // },
    }
}

export default async function MyComponent() {
    const apiValue='partnership-page';
    const data = await getApi(apiValue);

    //data refactor
    const why_us=data?.data?.sections?.find((element)=>element?.section_data?.template==='why_us');


    return (
        <>
            <PartnerForm/>
            {
                why_us?.posts?.list?.length > 0 &&
              <LogoBox data={why_us}/>
            }
        </>
    );
};
