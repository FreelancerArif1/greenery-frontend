import { getProjectDetailApi } from "@/api";
import ProductGallery from '@/components/product/ProductGallery';
import KeyFeatures from '@/components/product/KeyFeatures';
import Specs from '@/components/product/Specs';

export async function generateMetadata({ params, searchParams }, parent) {
  const getProjectData = await getProjectDetailApi(params.slug);
  return {
    title: {
      default: `${getProjectData?.data?.product_data?.meta_title}`,
    },
    description: `${getProjectData?.data?.product_data?.meta_description}`,
    keywords: `${getProjectData?.data?.product_data?.title_tag}`,
    openGraph: {
      title: `${getProjectData?.data?.product_data?.og_title}`,
      description: `${getProjectData?.data?.product_data?.og_description}`,
      images: [
        {
          url: `${getProjectData?.data?.images?.list?.[0]?.full_path}`,
          alt: `${getProjectData?.data?.product_data?.subtitle}`,
        },
      ],
    },
    facebook: {
      // Add explicit Facebook metadata
      title: getProjectData?.data?.product_data?.og_title,
      description: getProjectData?.data?.product_data?.og_description,
      images: [getProjectData?.data?.images?.list?.[0]?.full_path],
    },
  };
}

export default async function PortfolioDetail({ params }) {
  const getProjectData = await getProjectDetailApi(params.slug);
  const product_gallery = getProjectData?.data?.posts?.list?.find(
    (f) => f.data?.template === "product_gallery"
  );

  const key_features = getProjectData?.data?.posts?.list?.find(
    (f) => f.data?.template === "product_key_feature"
  );

  const product_specs = getProjectData?.data?.posts?.list?.find(
    (f) => f.data?.template === "product_specs"
  );

  const productData = getProjectData?.data?.product_data;
  const files = getProjectData?.data?.files;

  // Check if productData exists
  if (!product_gallery && !key_features && !product_specs) {
    return (
      <div className={'pt-150'} style={{ padding: '100px 0', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFF1ED' }}>
        <h1 style={{ fontSize: '56px', color: '#666' }}>No information available</h1>
      </div>
    );
  }

  return (
    <div className={'pt-150'}>
      {product_gallery && <ProductGallery data={product_gallery} productData={productData} files={files}/>}
      {key_features && <KeyFeatures data={key_features}/>}
      {product_specs && <Specs data={product_specs}/>}
    </div>
  );
}
