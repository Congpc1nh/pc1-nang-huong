import { Link } from "react-router-dom";

const services = [
  {
    title: "Quản lý Bất động sản",
    img: "https://via.placeholder.com/400x250?text=Quan+Ly",
    path: "/services/quan-ly",
  },
  {
    title: "Môi giới bất động sản",
    img: "https://via.placeholder.com/400x250?text=Moi+Gioi",
    path: "/services/moi-gioi",
  },
  {
    title: "Tư vấn Bất động sản",
    img: "https://via.placeholder.com/400x250?text=Tu+Van",
    path: "/services/tu-van",
  },
];

export default function ServiceHighlightSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <Link
          to={service.path}
          key={service.title}
          className="group overflow-hidden rounded-xl shadow hover:shadow-lg transition-all duration-300"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="p-4 text-center bg-white">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              {service.title}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
}