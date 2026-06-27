import { getApi } from '@/api';
import InnerBanner from "@/components/common/InnerBanner";
import Overview from "@/components/common/Overview";
import LogoBox from "@/components/common/LogoBox";
import CareerForm from "@/components/career/CareerForm";
import JobListing from '@/components/career/JobListing';
import CareerGallery from '@/components/career/CareerGallery';


export async function metadata()  {
    const apiValue='career'
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'Career - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || ''}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Career - Greenery Energy Solution' }`,
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
    const apiValue = "career";
    const data = await getApi(apiValue);

    //data refactor
    const inner_banner=data?.data?.sections?.find((element)=>element?.section_data?.template==='inner_banner');
    const overview=data?.data?.sections?.find((element)=>element?.section_data?.template==='overview');
    const why_us=data?.data?.sections?.find((element)=>element?.section_data?.template==='why_us');
    const form=data?.data?.sections?.find((element)=>element?.section_data?.template==='form');
    const careerGallery=data?.data?.sections?.find((element)=>element?.section_data?.template==='career_gallery');
    const job_listing=data?.data?.sections?.find((element)=>element?.section_data?.template==='job_listing');

    return (
        <>
            <InnerBanner
                data={data}
                title={inner_banner?.section_data?.subtitle}
                img={inner_banner?.images?.list?.[0]?.full_path}
            />
            <Overview data={overview}/>
            <LogoBox data={why_us} classes={'pb-100'}/>
            <CareerGallery data={careerGallery}/>
            {
              job_listing.posts.list.length > 0 &&
              <JobListing jobs={job_listing}/>

            }
            {/*<CareerForm data={form}/>*/}

        </>
    );
};
