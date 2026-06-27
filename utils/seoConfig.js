// utils/seoConfig.js

export function generatePageSEO({ title, description, keywords, ogImage, url }) {
    return {
        title: title || "Aarong Dairy",
        description:
            description ||
            "Aarong Dairy, part of BRAC Dairy, is committed to creating dairy products that can be a part of healthy and fulfilling lives.",
        keywords:
            keywords ||
            "Aarong Dairy, BRAC, dairy products, healthy food, milk, yogurt, Bangladesh",
        openGraph: {
            title: title || "Aarong Dairy",
            description:
                description ||
                "Aarong Dairy, part of BRAC Dairy, a BRAC social enterprise...",
            url: url || "https://aarongdairy.com.bd",
            siteName: "Aarong Dairy",
            images: [
                {
                    url: ogImage || "/og-default.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Aarong Dairy Banner",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title || "Aarong Dairy",
            description:
                description ||
                "Aarong Dairy, part of BRAC Dairy, a BRAC social enterprise...",
            images: [ogImage || "/og-default.jpg"],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
