export default function MenuItem() {
  return (
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
        <div className="text-center">
        <img src="/gourmet6.jpg" className="max-h-auto max-h-24 block mx-auto" alt="food" />
        </div>
        <h4 className="font-semibold text-xl my-3">Mignon steak</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          efficitur, nisl sed porttitor blandit, purus sapien fringilla arcu,
          vitae euismod enim nunc id mi. Vestibulum ac ornare lorem.
        </p>
        <button className="bg-primary text-white rounded-full px-8 py-2">
          Add to cart $12
        </button>
      </div>
  );
}
