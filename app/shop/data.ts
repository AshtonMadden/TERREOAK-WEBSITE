export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "used-window-washer",
    title: "PureWater Pro Water-Fed Pole System",
    price: 1800.00,
    description: "Commercial-grade water-fed pole window washing system with a high-capacity purification tank. We bought this for a contract we no longer service. In great condition, well-maintained by our crew. Perfect for commercial building maintenance. Local pickup or shipping within Canada only.",
    image: "/images/used-window-washer.png",
    features: ["Carbon fiber extension pole", "High-capacity DI purification tank", "Mounted on heavy-duty cart", "Used condition - excellent working order"]
  },
  {
    id: "used-snow-blower",
    title: "Ariens Professional 28\" Snow Blower",
    price: 1200.00,
    description: "Heavy-duty commercial two-stage snow blower. We are upgrading our fleet to larger tractor-mounted blowers, so we are selling off our walk-behinds. Starts on the first pull, recently serviced. Shipping within Canada only.",
    image: "/images/used-snow-blower.png",
    features: ["28-inch clearing width", "Commercial-grade engine", "Heated hand grips", "Used condition - recently serviced"]
  },
  {
    id: "used-backpack-blower",
    title: "STIHL BR 800 C-E Magnum Backpack Blower",
    price: 450.00,
    description: "Our most powerful commercial backpack blower. We have an excess of these after downsizing one of our fall cleanup crews. Shows cosmetic wear but engine runs flawlessly. Shipping within Canada only.",
    image: "/images/used-backpack-blower.png",
    features: ["Magnum power (4.4 bhp)", "Easy start system", "Ergonomic harness", "Used condition - cosmetic wear only"]
  }
];
