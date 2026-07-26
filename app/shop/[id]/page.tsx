import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../data";
import Header from "../../components/Header";

// Note: In Next.js App Router, dynamic params are passed as props
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 bg-gray-50 flex-grow">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back link */}
          <Link href="/shop" className="inline-flex items-center text-[#017a6d] font-bold uppercase text-[14px] hover:underline mb-8">
            ← Back to Shop
          </Link>

          <div className="bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative bg-gray-100 min-h-[400px] md:min-h-[600px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-[14px] font-black tracking-widest text-[#017a6d] uppercase font-lora">
                TERREOAK EXCLUSIVE
              </p>
              <h1 className="mt-2 text-[32px] md:text-[42px] font-black leading-[1.1] uppercase text-black">
                {product.title}
              </h1>
              
              <p className="mt-4 text-[24px] font-extrabold text-black/80">
                ${product.price.toFixed(2)} CAD
              </p>

              <div className="mt-8">
                <p className="text-[16px] text-black/70 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8">
                <h3 className="text-[16px] font-bold uppercase text-black">Features:</h3>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-black/70 font-medium">
                      <span className="text-[#01fa6d] mt-1">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Notice */}
              <div className="mt-8 p-4 bg-gray-50 border border-black/10 rounded-lg flex items-center gap-4">
                <div className="text-[24px]">📦</div>
                <div>
                  <p className="text-[14px] font-bold uppercase text-black">Shipping Notice</p>
                  <p className="text-[14px] text-black/60 font-medium mt-0.5">We currently only offer shipping within Canada.</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button 
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-10 py-[16px] text-[16px] font-extrabold text-black hover:bg-black hover:text-[#01fa6d] transition-colors shadow-lg cursor-pointer"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
