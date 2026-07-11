import { getApi } from '@/api';
import AboutBanner from '@/components/about/AboutBanner';
import ImageTextSlider from '@/components/about/ImageTextSlider';
import ValueSlider from '@/components/energy-system/ValueSlider';
import React from 'react';
import ComplianceSlider from '@/components/energy-system/ComplianceSlider';
import Overview from '@/components/common/Overview';
import CounterWrapper from '@/components/common/CounterWrapper';
import Purposes from "@/components/home/Purposes";
import Partners from "@/components/about/Clients";
import InnerBanner from '@/components/common/InnerBanner';
import CertificatesSlider from '@/components/energy-system/CertificatesSlider';
import Livenza from '@/components/about/Livenza';
const apiValue = "about-us";


export async function metadata()  {
    const getData = await getApi(apiValue);
    const banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="inner_banner");

    return {
        title: {
            default: `${getData?.data?.page_data?.meta_title || 'About Us - Greenery Energy Solution'}`,
        },
        description: `${getData?.data?.page_data?.meta_description || 'GreeneryES, a clean-technology company under the Livenza Group, connects global innovation with local execution. Through exclusive distribution rights, certified engineering teams, and a nationwide service network, we deliver efficient, reliable, and sustainable clean-energy solutions for every sector.'}`,
        openGraph: {
            title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'About Us - Greenery Energy Solution' }`,
            description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "GreeneryES, a clean-technology company under the Livenza Group, connects global innovation with local execution. Through exclusive distribution rights, certified engineering teams, and a nationwide service network, we deliver efficient, reliable, and sustainable clean-energy solutions for every sector." }`,
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
    const data = await getApi(apiValue);

    //data refactor
    const inner_banner=data?.data?.sections?.find((element)=>element?.section_data?.template==='inner_banner');
    const mission_vision =data?.data?.sections?.find((element)=>element?.section_data?.template==='mission_vision');
    const value_slider =data?.data?.sections?.find((element)=>element?.section_data?.template==='value_slider');
    const compliance_slider =data?.data?.sections?.find((element)=>element?.section_data?.template==='compliance_slider');
    const clients =data?.data?.sections?.find((element)=>element?.section_data?.template==='clients');
    const full_image_slider =data?.data?.sections?.find((element)=>element?.section_data?.template==='full_image_slider');
    const overview=data?.data?.sections?.find((element)=>element?.section_data?.template==="overview_counter");
    const sister_concern=data?.data?.sections?.find((element)=>element?.section_data?.template==="sister_concern");


    return (
        <>
          {/*<AboutBanner data={inner_banner}/>*/}
          <InnerBanner
            data={data}
            title={inner_banner?.section_data?.subtitle}
            img={inner_banner?.images?.list?.[0]?.full_path}
          />
          <Overview data={overview} noButton/>
          {/* <CounterWrapper data={overview}/> */}
          <Purposes data={mission_vision}/>
          <ValueSlider data={value_slider} secondaryBG={false}/>
          <Livenza data={sister_concern}/>
          <ImageTextSlider data={full_image_slider}/>
          <CertificatesSlider data={compliance_slider} />
          <Partners data={clients}/>
        </>
    );
};
