import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <div className="bg-gray-200 rounded-lg">
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="head-text">
              Track Prices, Unlock Savings with
              <span className="text-green-600"> Price Tracker</span>
            </h1>

            <p className="mt-6">
              Empower your wallet with our Price Tracker – the key to smarter,
              more budget-friendly shopping! Your Price Tracking Journey Starts
              Here
            </p>

            <Searchbar />
          </div>
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-10">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
