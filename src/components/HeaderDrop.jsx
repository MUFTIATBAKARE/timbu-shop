import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const languages = [
  { code: "English", label: "English" },
  { code: "Español", label: "Español" },
  { code: "Français", label: "Français" },
  { code: "Deutsch", label: "Deutsch" },
];

const countries = [
  { code: "United States", label: "United States (USD)", flag: "🇺🇸" },
  { code: "United Kingdom", label: "United Kingdom (GBP)", flag: "🇬🇧" },
  { code: "Canada", label: "Canada (CAD)", flag: "🇨🇦" },
  { code: "Nigeria", label: "Nigeria (NGN)", flag: "🇳🇬" },
  { code: "Germany", label: "Germany (EUR)", flag: "🇩🇪" },
  { code: "France", label: "France (EUR)", flag: "🇫🇷" },
];

function HeaderDrop({ isMobile = false }) {
  const { language, setLanguage, country, setCountry } = useContext(ShopContext);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
          <label htmlFor="mobile-lang-select" className="flex items-center gap-1.5">
            <span>🌐</span> Language:
          </label>
          <select
            id="mobile-lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs text-gray-900 font-medium outline-none focus:border-custom-midGreen cursor-pointer"
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
          <label htmlFor="mobile-country-select" className="flex items-center gap-1.5">
            <span>📍</span> Country / Region:
          </label>
          <select
            id="mobile-country-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs text-gray-900 font-medium outline-none focus:border-custom-midGreen cursor-pointer"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-xs text-white">
      {/* Language Selector */}
      <div className="flex items-center gap-1 bg-green-900/30 hover:bg-green-900/50 rounded-md px-2 py-1 transition-colors border border-green-700/40">
        <span aria-hidden="true">🌐</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Select Storefront Language"
          className="bg-transparent text-white font-medium text-xs outline-none cursor-pointer pr-1"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code} className="bg-gray-900 text-white">
              {l.label}
            </option>
          ))}
        </select>
      </div>

      {/* Country Selector */}
      <div className="flex items-center gap-1 bg-green-900/30 hover:bg-green-900/50 rounded-md px-2 py-1 transition-colors border border-green-700/40">
        <span aria-hidden="true">📍</span>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Select Country and Currency"
          className="bg-transparent text-white font-medium text-xs outline-none cursor-pointer pr-1"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code} className="bg-gray-900 text-white">
              {c.flag} {c.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

HeaderDrop.propTypes = {
  isMobile: PropTypes.bool,
};

export default HeaderDrop;
