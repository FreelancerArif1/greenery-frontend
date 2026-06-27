import { getApi } from '@/api';
import LogoBox from "@/components/common/LogoBox";
import AddressMap from "@/components/contact/AddressMap";
import ContactForm from "@/components/contact/ContactForm";


export async function metadata()  {
    const apiValue='contact-page'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Contact - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Contact - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "" }`,
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
    const apiValue = "contact-page";
    const data = await getApi(apiValue);

    //data refactor
    const map=data?.data?.sections?.find((element)=>element?.section_data?.template==='map');
    const why_us=data?.data?.sections?.find((element)=>element?.section_data?.template==='why_us');
    const contact_list=data?.data?.sections?.find((element)=>element?.section_data?.template==='contact_list');

    return (
        <>
            <ContactForm data={contact_list}/>
            {data?.data?.sections?.length > 0 &&
              data.data.sections.map((section, index) => {
                  const template = section?.section_data?.template;
                  switch (template) {
                      case 'why_us':
                          return <LogoBox data={why_us}/>;
                      case 'map':
                        //   return  <AddressMap data={map}/>;
                      default:
                          return null;
                  }
              })}

        </>
    );
};
