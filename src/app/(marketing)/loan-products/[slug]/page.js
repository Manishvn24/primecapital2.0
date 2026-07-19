// app/loans/[slug]/page.tsx
import LoanProductPage from "@/components/loan-products/LoanProductPage";
import { getAllLoanSlugs, getLoanProduct } from "@/data/LoanProducts";
import  { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const product = getLoanProduct(params.slug);

  if (!product) {
    return {
      title: "Loan Not Found",
    };
  }

return {
  title: product.seoTitle ?? product.title,
  description: product.shortDescription,
};
}



export function generateStaticParams() {
  return getAllLoanSlugs().map((slug) => ({ slug }));
}



export default async function Page({ params }) {
  const { slug } = await params;
  const product = getLoanProduct(slug);

  if (!product) notFound();
  return <LoanProductPage product={product} />;
}
