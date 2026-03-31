"use client";
import cancel from '@/app/assets/images/cancel.svg';
import bootle from '@/app/assets/images/bottle.jpg';
import { useState } from "react";
import { X, Star, Minus, Plus, Heart, Share2 } from "lucide-react";
import Image from 'next/image';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
    details: string[];
    inStock: boolean;
  };
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!isOpen) return null;

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-10 bg-black/50">
      <div className="relative w-full max-w-[500px] md:max-w-4xl h-[90vh] sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-scroll sm:overflow-hidden  border-gray-200 rounded-t-3xl sm:rounded-3xl bg-(--card) p-1">
        <div className="p-3 flex items-center justify-between">
                <p className="leading-body text-lg title-font2 track-body font-medium text-black">
                  Product details
                </p>
                {/* <div className="size-10 rounded-full bg-(--card) flex items-center justify-center border-gray-200 overflow-hidden border p-0.5"> */}
                <Image onClick={onClose} src={cancel} alt="cancel" className="size-6" />
            {/* </div> */}
          </div>
      <div className="relative w-full h-fit  rounded-3xl bg-white border border-gray-200">
        

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src={bootle}
                alt={product.name}
                className="w-full h-full rounded-2xl object-cover"
              />
              
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4">
            {/* Product Name */}
            <div>
              <h2 className="font-serif text-3xl tracking-header text-black title-font2">
                3-in-1 Pink Water Bottle Set with Insulated Tumbler & Straw
              </h2>

              {/* Rating */}
              {/* <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating)
                          ? "fill-orange-500 text-"
                          : "text-(--secondary)"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-(--secondary)">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div> */}
            </div>

            {/* Price Section */}
            <div className=" border-gray-100 ">
              <div className="flex items-baseline gap-4">
                <span className="title-font text-4xl title-font2 text-(--green)">
                  N10,500
                </span>
                {product.originalPrice && (
                  <span className="text-lg title-font2 title-font text-(--warning) line-through">
                    N15,000
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-(--secondary) leading-body tracking-body title-font ">
                Stay hydrated in style with the ultimate Tai Pei Bear 3-Piece Hydration Set. Whether you’re heading to the gym, the office, or running errands, this coordinated trio ensures you have the right size for every part of your day.
              </p>
              {/* <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--secondary) mt-2 flex-shrink-0" />
                    <span className="text-(--secondary) title-font tracking-body leading-body">{detail}</span>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Quantity Selector */}
            <div className="border-t border-border">
              <p className="text-sm title-font font-medium text-(--secondary) mb-4">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-100 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4 text-black" />
                  </button>
                  <span className="w-12 text-black text-center font-medium title-font tracking-body leading-body">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
                <span className="text-sm title-font2 text-(--success)">
                  {product.inStock ? "Available" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-border  flex flex-col gap-3">
              <button
                disabled={!product.inStock}
                className="w-full bg-green-600 py-3 rounded-lg tracking-body leading-body title-font2 font-medium hover:bg-(--green) transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
              
            </div>

            {/* Additional Info */}
            {/* <div className="border-t border-border pt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-(--secondary)">Shipping</span>
                <span className="font-medium text-(--secondary)">
                  Free on orders over $100
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-(--secondary)">Returns</span>
                <span className="font-medium text-(--secondary)">
                  30-day guarantee
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
