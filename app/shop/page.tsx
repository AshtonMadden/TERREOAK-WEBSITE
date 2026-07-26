import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "./data";
import Header from "../components/Header";

export default function ShopPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/shop-hero.png"
            alt="TERREOAK Shop"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-6xl px-6 flex flex-col justify-center min-h-[100dvh] md:min-h-0 md:block pt-32 pb-12 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left animate-slide-in-left">
          <div className="mt-auto md:mt-0">
            <p className="text-[14px] font-black tracking-widest text-[#01fa6d] uppercase drop-shadow-md font-lora">
              TERREOAK • Premium Goods
            </p>
            <h1 className="mt-2 text-[32px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl uppercase">
              TERREOAK SHOP
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-[1rem] font-bold text-white/90 md:text-[1.3rem]">
              Surplus and used professional-grade landscaping and maintenance equipment from our fleet.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP GRID */}
      <section className="py-20 flex-grow bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <Link 
                href={`/shop/${product.id}`} 
                key={product.id}
                className="group flex flex-col bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] font-black uppercase leading-tight group-hover:text-[#017a6d] transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-[18px] font-bold text-black/70">
                    ${product.price.toFixed(2)} CAD
                  </p>
                  
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center justify-center w-full rounded-full bg-black px-6 py-3 text-[14px] font-extrabold text-white uppercase group-hover:bg-[#01fa6d] group-hover:text-black transition-colors">
                      View Item
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
