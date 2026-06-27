// OPTION 1: Using SectionRenderer Component
import React from "react";
import { getApi } from "@/api";
import SectionRenderer from "@/components/global/SectionRenderer";

export async function generateMetadata({ params }) {
    const { slug } = params;
    const getPost = await getApi(slug);
    const banner = getPost?.data?.page_images?.list?.find(f => f?.banner === "on")?.full_path;

    return {
        title: `${getPost?.data?.page_data?.meta_title || "Default Title"}`,
        description: `${getPost?.data?.page_data?.meta_description || "Default Description"}`,
        openGraph: {
            title: `${getPost?.data?.page_data?.og_title || "Default OG Title"}`,
            description: `${getPost?.data?.page_data?.og_description || "Default OG Description"}`,
            type: `website`,
            images: [{ url: `${banner}`, alt: `${getPost?.data?.page_data?.meta_title || "Default Image Alt"}` }],
        },
    };
}

export default async function EnergySystemPage({ params }) {
    const { slug } = params;
    const getData = await getApi(slug);
    const sections = getData?.data?.sections || [];
    const products = getData?.data?.products || [];
    const feature_projects = getData?.data?.feature_projects || [];
    const blogs = getData?.data?.blogs?.blog_list || [];

    return (
        <>
            {sections.map((section, index) => (
                <SectionRenderer
                    key={`${section?.section_data?.template}-${index}`}
                    section={section}
                    index={index}
                    allSections={sections}
                    products={products}
                    feature_projects={feature_projects}
                    blogs={blogs}
                    slug={slug}
                />
            ))}
        </>
    );
}