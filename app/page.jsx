import { getApi, getChildPage, getProductPage } from '@/api';
import BlogContainer from "@/components/home/BlogContainer";
import Overview from "@/components/common/Overview";
import CounterWrapper from '@/components/common/CounterWrapper';
import FeatureProducts from '@/components/home/FeatureProducts';
import Ourpartner from '@/components/home/Ourpartner';
import Ourcirtificate from '@/components/home/Ourcirtificate';
import Ourclients from '@/components/home/Ourclients';


import FeatureProjects from '@/components/energy-system/FeatureProjects';
import ComplianceSlider from '@/components/energy-system/ComplianceSlider';
import React from 'react';
import CTA from '@/components/energy-system/CTA';
import HomeSlider from "@/components/home/Banner";
import AnimatedFlow from "@/components/home/AnimatedFlow";
import AnimatedCircle from "@/components/home/AnimatedCircle";
import Sustainability from "@/components/home/Sustainability";
const apiValue = "home-page";

export async function metadata()  {
  const getData = await getApi(apiValue);
    const home_banner=getData?.data?.sections?.find((element)=>element?.section_data?.template==="home_banner");
    const banner=home_banner?.posts?.list?.[0]?.images?.[0]?.full_path;

  return {
    title: {
      default: `${getData?.data?.page_data?.meta_title || 'Greenery Energy Solution'}`,
    },
    description: `${getData?.data?.page_data?.meta_description || "GreeneryES, a clean-technology company under the Livenza Group, connects global innovation with local execution. Through exclusive distribution rights, certified engineering teams, and a nationwide service network, we deliver efficient, reliable, and sustainable clean-energy solutions for every sector."}`,
    openGraph: {
      title: `${getData?.data?.page_data?.og_title ? getData?.data?.page_data?.og_title : getData?.data?.page_data?.meta_title ? getData?.data?.page_data?.meta_title : 'Greenery Energy Solution' }`,
      description: `${getData?.data?.page_data?.og_description ? getData?.data?.page_data?.og_description : getData?.data?.page_data?.meta_description ? getData?.data?.page_data?.meta_description : "GreeneryES, a clean-technology company under the Livenza Group, connects global innovation with local execution. Through exclusive distribution rights, certified engineering teams, and a nationwide service network, we deliver efficient, reliable, and sustainable clean-energy solutions for every sector." }`,
      images: [
        {
          url: `${banner}`,
          alt: `${getData?.data?.page_data?.meta_title}`,
        },
      ],
    },
    // alternates: {
    //   canonical: `https://www.basicbuildersltd.com/`,
    // },
  }

}
export default async function Home() {

  const data = await getApi(apiValue);

  //data refactor
  const home_banner=data?.data?.sections?.find((element)=>element?.section_data?.template==="home_banner");
  const overview=data?.data?.sections?.find((element)=>element?.section_data?.template==="overview_counter");
  const animated_logo=data?.data?.sections?.find((element)=>element?.section_data?.template==="animated_logo");
  const global_leader=data?.data?.sections?.find((element)=>element?.section_data?.template==="global_leader");
  const sustainability=data?.data?.sections?.find((element)=>element?.section_data?.template==="sustainability");
  const cta=data?.data?.sections?.find((element)=>element?.section_data?.template==="cta");
  const feature_product=data?.data?.sections?.find((element)=>element?.section_data?.template==="feature_products");
  const feature_projects=data?.data?.sections?.find((element)=>element?.section_data?.template==="feature_projects");
  const compliance_slider=data?.data?.sections?.find((element)=>element?.section_data?.template==="compliance_slider");
  const productsData = data?.data?.feature_products;


  return (
        <>
            <HomeSlider data={home_banner}/>
            <Overview data={overview}/>
            <CounterWrapper data={overview}/>
            {/* <FeatureProducts data={productsData?.list} sectionData={feature_product}/> */}
            <Ourpartner />
            <AnimatedFlow data={animated_logo}/>
            <Ourcirtificate />
            <AnimatedCircle data={global_leader}/>
            <Ourclients />
            <FeatureProjects data={feature_projects}/>
            <ComplianceSlider data={compliance_slider} />
            <Sustainability data={sustainability}/>
            <CTA data={cta} noFirstButton/>
            <BlogContainer data={data}/>
        </>
    );
};


