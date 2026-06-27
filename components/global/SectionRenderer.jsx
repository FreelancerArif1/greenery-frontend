import React from "react";
import InnerBanner from '@/components/common/InnerBanner';
import Zigzag from '@/components/energy-system/Zigzag';
import ProductSLider from '@/components/energy-system/ProductSLider';
import TwoBoxProductSlider from '@/components/energy-system/TwoBoxProductSlider';
import ComplianceSlider from '@/components/energy-system/ComplianceSlider';
import FeatureProjects from '@/components/energy-system/FeatureProjects';
import ValueSlider from '@/components/energy-system/ValueSlider';
import ImpactSlider from '@/components/energy-system/ImpactSlider';
import CTA from '@/components/energy-system/CTA';
import BlogContainer from '@/components/home/BlogContainer';
import BlogSlider from '@/components/energy-system/BlogSlider';
import Overview from '@/components/common/Overview';
import LogoBox from '@/components/common/LogoBox';

const SectionRenderer = ({ section, index, allSections,products,feature_projects,blogs,slug }) => {
    const template = section?.section_data?.template;

    switch (template) {
        case 'inner_banner':
            return (
                <>
                  <InnerBanner title={section?.section_data?.subtitle}
                  text={section?.section_data?.short_desc}
                               img={section?.images?.list?.[0]?.full_path}
                  />
                </>
            );

      case 'overview':
        return (
          <>
            <Overview data={section} noButton/>
          </>
        );

      case 'why_us':
        return (
          <>
            <LogoBox data={section} classes={'pb-120'}/>
          </>
        );

        case 'zigzag_section':
            return (
                <>
                  <Zigzag section={section}/>
                </>
            );
            case 'product_list':
            return (
                <>
                  {
                    products?.categories?.length > 0 &&
                    <ProductSLider data={products} slug={slug} />
                  }

                </>
            );
      case 'two_box_product_list':
        return (
          <>
            {
              products?.categories?.length > 0 &&
              <TwoBoxProductSlider data={products} />
            }

          </>
        );
      case 'compliance_slider':
        return (
          <>
            {
              section?.posts?.list?.length > 0 &&
              <ComplianceSlider data={section} />

            }
          </>
        );
      case 'feature_projects':
        return (
          <>
            <FeatureProjects data={section} />
          </>
        );
      case 'value_slider':
        return (
          <>
            {
              section?.posts?.list?.length > 0 &&
              <ValueSlider data={section} secondaryBG={true} />
            }
          </>
        );

      case 'impact_slider':
        return (
          <>
            {
              section?.posts?.list?.length > 0 &&
              <ImpactSlider data={section} />
            }

          </>
        );

      case 'cta':
        return (
          <>
            <CTA data={section} />
          </>
        );

      case 'feature_news':
        return (
          <>
            {
              blogs?.length > 0 &&
              <BlogSlider data={section} blogList={blogs}/>
            }

          </>
        );

        default:
            console.warn(`No component found for template: ${template}`);
            return null;
    }
};

export default SectionRenderer;