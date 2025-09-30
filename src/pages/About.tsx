import { HeadlessAbout } from '@/components/headless/HeadlessAbout';
import { AboutUI } from '@/pages/ui/AboutUI';

const About = () => {
  return (
    <HeadlessAbout>
      {(logic) => <AboutUI logic={logic} />}
    </HeadlessAbout>
  );
};

export default About;