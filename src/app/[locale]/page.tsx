import TabAbout from '../sections/tababout';
import TabProjects from '../sections/tabprojects';
import TabSchool from '../sections/tabschool';
import TabJobs from '../sections/tabsjobs';
import TabsEnd from '../sections/tabsend';


export default function IndexPage() {

  return (
    <div className="contentPage">
      <TabAbout />
      <TabProjects />
      <TabSchool />
      <TabJobs />
      <TabsEnd />
    </div>
  );
}