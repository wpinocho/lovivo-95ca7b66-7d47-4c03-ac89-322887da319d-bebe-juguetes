import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { AboutUI } from '@/pages/ui/AboutUI';

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      <AboutUI />
    </EcommerceTemplate>
  );
};

export default About;