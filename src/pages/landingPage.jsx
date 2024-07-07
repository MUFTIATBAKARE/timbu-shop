import Desktop from "../components/desktopHeader";
import Legend from "../components/Legend";
import PopularImages from "../components/PopularImages";

const landingPage = () => {
  return (
    <div>
      <Desktop />
      <Legend />
      <PopularImages />
    </div>
  );
};

export default landingPage;
