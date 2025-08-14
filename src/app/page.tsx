import TabAbout from './sections/tababout';
import TabProjects from './sections/tabprojects';

export default function Home() {
  return (
    <div className="contentPage">
    <TabAbout />
    <TabProjects />
    <TabAbout />
    </div>
  );
}
